# Noezz Caption — product launch page demo

A one-page launch / waitlist page for a **fictional** AI social-media caption tool, built as a portfolio demo.

> Noezz Caption is not a real product. The "generator" fills built-in templates (no AI call), the waitlist sends nothing, and the audience strip is sample content.

## Features

- **Interactive try-it box**: type a topic, pick a tone and a platform, get three captions with platform-specific endings and a hashtag built from the topic, plus copy buttons
- **Waitlist sign-up** with email validation, a live "you're #2,848" position and an accessible error message
- FAQ accordion with native `<details>`, fade-in on scroll, honours reduced-motion settings
- Bold light design: Bricolage Grotesque, lime accent, hard shadows

## Tech

Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · deployed on Vercel

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm test        # caption templates, hashtags, email check
```

| Path | What it holds |
|---|---|
| `lib/captions.ts` | Caption templates, hashtag builder, email check |
| `components/TryIt.tsx` | The generator box |
| `components/Waitlist.tsx` | Waitlist form and counter |
| `app/page.tsx` | Page sections and copy |

Made by [Duong Thanh Nam](https://duongthanhnam.vercel.app).
