import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Account — MONTREVE",
};

export default function AccountPage() {
  return (
    <div className="mx-auto max-w-md px-6 pb-24 pt-32 text-center">
      <p className="text-[11px] uppercase tracking-luxury-lg text-taupe">Account</p>
      <h1 className="mt-4 font-serif text-4xl">Welcome to MONTREVE</h1>
      <p className="mt-4 text-sm text-espresso/65">
        Sign in to track orders, save favourites and access private collections. Account
        creation is not available in this preview.
      </p>
      <div className="mt-10 space-y-3">
        <button
          disabled
          className="w-full cursor-not-allowed border border-stone/40 py-3.5 text-[11px] uppercase tracking-luxury text-espresso/50"
        >
          Sign In
        </button>
        <button
          disabled
          className="w-full cursor-not-allowed border border-stone/40 py-3.5 text-[11px] uppercase tracking-luxury text-espresso/50"
        >
          Create Account
        </button>
      </div>
      <Link
        href="/"
        className="mt-8 inline-block text-[11px] uppercase tracking-luxury underline underline-offset-4"
      >
        Return Home
      </Link>
    </div>
  );
}
