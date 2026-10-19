"use client";

import { useState } from "react";
import { generateCaptions, platforms, tones, type Platform, type Tone } from "@/lib/captions";

const chip = (active: boolean) =>
  `rounded-full border px-4 py-1.5 text-sm capitalize transition-colors ${
    active ? "border-ink bg-ink text-paper" : "border-line bg-white hover:border-ink"
  }`;

export default function TryIt() {
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState<Tone>("friendly");
  const [platform, setPlatform] = useState<Platform>("instagram");
  const [results, setResults] = useState<string[]>([]);
  const [run, setRun] = useState(0); // bumps on every generate so the cards re-animate
  const [copied, setCopied] = useState<number | null>(null);
  const [error, setError] = useState(false);

  function generate(e: React.FormEvent) {
    e.preventDefault();
    const out = generateCaptions(topic, tone, platform);
    setError(out.length === 0);
    setResults(out);
    setRun((r) => r + 1);
    setCopied(null);
  }

  async function copy(i: number) {
    try {
      await navigator.clipboard.writeText(results[i]);
      setCopied(i);
    } catch {
      setCopied(null); // clipboard can be blocked; the text is still selectable
    }
  }

  return (
    <div className="rounded-3xl border-2 border-ink bg-white p-5 text-left shadow-[6px_6px_0_0_#121212] sm:p-7">
      <form onSubmit={generate} noValidate className="grid gap-4">
        <label className="grid gap-2 text-sm font-semibold">
          What do you want to post about?
          <input
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            maxLength={60}
            placeholder="e.g. morning routines, our new menu, hiring"
            aria-invalid={error}
            aria-describedby={error ? "topic-error" : undefined}
            className="rounded-xl border-2 border-line px-4 py-3 text-base font-normal focus:border-ink"
          />
        </label>
        {error && (
          <p id="topic-error" role="alert" className="-mt-2 text-sm text-red-700">
            Type a topic first.
          </p>
        )}
        <fieldset className="flex flex-wrap items-center gap-2">
          <legend className="mb-2 text-sm font-semibold">Tone</legend>
          {tones.map((t) => (
            <button key={t} type="button" aria-pressed={tone === t} onClick={() => setTone(t)} className={chip(tone === t)}>
              {t}
            </button>
          ))}
        </fieldset>
        <fieldset className="flex flex-wrap items-center gap-2">
          <legend className="mb-2 text-sm font-semibold">Platform</legend>
          {platforms.map((p) => (
            <button key={p} type="button" aria-pressed={platform === p} onClick={() => setPlatform(p)} className={chip(platform === p)}>
              {p === "tiktok" ? "TikTok" : p === "linkedin" ? "LinkedIn" : "Instagram"}
            </button>
          ))}
        </fieldset>
        <button type="submit" className="mt-1 rounded-xl bg-lime px-5 py-3 font-semibold text-ink ring-2 ring-ink hover:bg-[#c8f520]">
          Generate captions ✨
        </button>
      </form>

      <div aria-live="polite" className="mt-6 grid gap-3">
        {results.map((c, i) => (
          <div key={`${run}-${i}`} className="pop rounded-2xl bg-paper p-4" style={{ "--d": `${i * 0.12}s` } as React.CSSProperties}>
            <p className="whitespace-pre-line text-sm leading-relaxed">{c}</p>
            <button type="button" onClick={() => copy(i)} className="mt-3 text-xs font-semibold underline underline-offset-4">
              {copied === i ? "Copied ✓" : "Copy"}
            </button>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted">Demo: captions come from built-in templates. No AI is called and nothing is stored.</p>
    </div>
  );
}
