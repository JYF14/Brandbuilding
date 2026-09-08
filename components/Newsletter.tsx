"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-espresso px-6 py-24 text-snow lg:px-10">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-[11px] uppercase tracking-luxury-lg text-oatmeal">
          The MONTREVE World
        </p>
        <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl">
          Private access to new collections, stories and alpine destinations.
        </h2>
        {submitted ? (
          <p className="mt-8 font-serif italic text-lg text-oatmeal">
            Thank you for joining us.
          </p>
        ) : (
          <form
            className="mx-auto mt-10 flex max-w-md items-stretch border-b border-snow/40"
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setSubmitted(true);
            }}
          >
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full bg-transparent py-3 text-sm text-snow placeholder:text-snow/50 focus:outline-none"
            />
            <button
              type="submit"
              className="whitespace-nowrap px-2 text-[11px] uppercase tracking-luxury text-snow transition-opacity hover:opacity-60"
            >
              Join
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
