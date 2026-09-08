/**
 * Generates real product photography via the OpenAI Images API (gpt-image-1)
 * for every shot in lib/products.ts, saving each file at the exact
 * convention-based path the site already knows how to load
 * (see lib/image-path.ts / IMAGE_MANIFEST.md).
 *
 * Usage:
 *   npx tsx scripts/generate-photos.ts            # generate everything missing
 *   npx tsx scripts/generate-photos.ts --only=<slug>  # just one product (smoke test)
 *   npx tsx scripts/generate-photos.ts --limit=5      # stop after N images
 *
 * Reads OPENAI_API_KEY from .env.local (gitignored, never committed).
 * Safe to re-run: any file that already exists on disk is skipped, so an
 * interrupted run can just be started again.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import path from "path";
import { PRODUCTS } from "../lib/products";
import { productImagePath } from "../lib/image-path";

function loadEnvLocal() {
  const envPath = path.join(__dirname, "..", ".env.local");
  if (!existsSync(envPath)) return;
  const lines = readFileSync(envPath, "utf-8").split("\n");
  for (const line of lines) {
    const match = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
    if (match && !process.env[match[1]]) {
      process.env[match[1]] = match[2].trim();
    }
  }
}
loadEnvLocal();

const API_KEY = process.env.OPENAI_API_KEY;
if (!API_KEY) {
  console.error("Missing OPENAI_API_KEY (expected in .env.local)");
  process.exit(1);
}

const args = process.argv.slice(2);
const onlySlug = args.find((a) => a.startsWith("--only="))?.split("=")[1];
const limitArg = args.find((a) => a.startsWith("--limit="))?.split("=")[1];
const limit = limitArg ? parseInt(limitArg, 10) : Infinity;

interface Job {
  productSlug: string;
  productName: string;
  shot: string;
  prompt: string;
  outPath: string;
}

function buildJobs(): Job[] {
  const jobs: Job[] = [];
  const products = onlySlug ? PRODUCTS.filter((p) => p.slug === onlySlug) : PRODUCTS;
  for (const product of products) {
    const primaryColor = product.colors[0].name;
    for (const image of product.images) {
      const rel = productImagePath(product.slug, image.shot, primaryColor);
      const outPath = path.join(__dirname, "..", "public", rel);
      jobs.push({
        productSlug: product.slug,
        productName: product.name,
        shot: image.shot,
        prompt: image.prompt,
        outPath,
      });
    }
  }
  return jobs;
}

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function generateOne(job: Job, attempt = 1): Promise<boolean> {
  try {
    const res = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-image-1",
        prompt: job.prompt,
        size: "1024x1536",
        quality: "medium",
        n: 1,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      if ((res.status === 429 || res.status >= 500) && attempt <= 3) {
        const wait = attempt * 5000;
        console.warn(`  retry ${attempt}/3 after ${res.status} (${wait}ms)`);
        await sleep(wait);
        return generateOne(job, attempt + 1);
      }
      console.error(`  FAILED ${job.productSlug}/${job.shot}: ${res.status} ${text.slice(0, 300)}`);
      return false;
    }

    const json = (await res.json()) as { data: { b64_json: string }[] };
    const b64 = json.data[0]?.b64_json;
    if (!b64) {
      console.error(`  FAILED ${job.productSlug}/${job.shot}: no image data returned`);
      return false;
    }

    mkdirSync(path.dirname(job.outPath), { recursive: true });
    writeFileSync(job.outPath, Buffer.from(b64, "base64"));
    return true;
  } catch (err) {
    if (attempt <= 3) {
      const wait = attempt * 5000;
      console.warn(`  retry ${attempt}/3 after error (${wait}ms): ${(err as Error).message}`);
      await sleep(wait);
      return generateOne(job, attempt + 1);
    }
    console.error(`  FAILED ${job.productSlug}/${job.shot}: ${(err as Error).message}`);
    return false;
  }
}

async function main() {
  const allJobs = buildJobs();
  const pending = allJobs.filter((j) => !existsSync(j.outPath));
  const skipped = allJobs.length - pending.length;
  const toRun = pending.slice(0, limit);

  console.log(
    `Total shots: ${allJobs.length} | already on disk: ${skipped} | generating now: ${toRun.length}`
  );

  let done = 0;
  let failed = 0;
  for (const job of toRun) {
    process.stdout.write(`[${done + failed + 1}/${toRun.length}] ${job.productSlug} — ${job.shot} ... `);
    const ok = await generateOne(job);
    if (ok) {
      done++;
      console.log("OK");
    } else {
      failed++;
      console.log("FAILED");
    }
    await sleep(500);
  }

  console.log(`\nDone. Generated: ${done}, Failed: ${failed}, Already had: ${skipped}`);
  if (failed > 0) {
    console.log("Re-run the same command to retry only the failed/missing ones.");
  }
}

main();
