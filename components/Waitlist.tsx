"use client";

import { useState } from "react";
import { isValidEmail } from "@/lib/captions";

const START = 2847; // sample number for the demo

// shortcut: demo only, nothing is sent and the count resets on reload; use a form service or API route for a real launch
export default function Waitlist() {
  const [count, setCount] = useState(START);
  const [state, setState] = useState<"idle" | "error" | "done">("idle");

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") ?? "");
    if (!isValidEmail(email)) return setState("error");
    setCount((c) => c + 1);
    setState("done");
  }

  const fmt = (n: number) => n.toLocaleString("en-US");

  return (
    <div id="waitlist" className="w-full max-w-md">
      {state === "done" ? (
        <p role="status" className="rounded-xl bg-ink px-4 py-3 text-sm font-semibold text-lime">
          You&apos;re #{fmt(count)} on the list 🎉 (Demo: no email was sent.)
        </p>
      ) : (
        <form onSubmit={submit} noValidate className="flex flex-col gap-2 sm:flex-row">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@email.com"
            aria-invalid={state === "error"}
            aria-describedby={state === "error" ? "email-error" : undefined}
            className="min-w-0 flex-1 rounded-xl border-2 border-ink bg-white px-4 py-3"
          />
          <button type="submit" className="rounded-xl bg-lime px-5 py-3 font-semibold text-ink ring-2 ring-ink hover:bg-[#c8f520]">
            Join the waitlist
          </button>
        </form>
      )}
      {state === "error" && (
        <p id="email-error" role="alert" className="mt-2 text-sm text-red-700">
          Please enter a valid email address.
        </p>
      )}
      <p className="mt-3 text-sm text-muted">
        <span className="font-semibold text-ink">{fmt(count)}</span> creators already waiting · launching in December
      </p>
    </div>
  );
}
