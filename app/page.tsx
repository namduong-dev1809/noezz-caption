import TryIt from "@/components/TryIt";
import Waitlist from "@/components/Waitlist";

const features = [
  { title: "One topic, a week of posts", text: "Type one idea and get variations ready for every day of the week." },
  { title: "Sounds like you", text: "Pick friendly, bold or professional. Pro learns from your past posts." },
  { title: "Made for each platform", text: "Hooks for TikTok, line breaks for LinkedIn, hashtags for Instagram." },
  { title: "Schedule in one click", text: "Send captions straight to Buffer, Later or Meta Business Suite." },
];

const faqs = [
  { q: "When does Noezz Caption launch?", a: "Early access opens in December. People on the waitlist get in first, in order of sign-up." },
  { q: "Is it free?", a: "There will be a free plan with 20 captions a month. Waitlist members get 3 months of Pro free." },
  { q: "Which languages does it write in?", a: "English at launch, with Spanish, German and Vietnamese coming soon after." },
  { q: "Will my captions sound like AI?", a: "We tune every caption for your tone and platform, and you can edit before posting." },
];

export default function Home() {
  return (
    <>
      <p className="bg-ink px-4 py-2 text-center text-xs text-paper/80">
        Demo launch page · fictional product · built by{" "}
        <a href="https://duongthanhnam.vercel.app" className="underline hover:text-lime">
          Duong Thanh Nam
        </a>
      </p>
      <header className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-5 sm:px-6">
        <a href="#top" className="flex items-center gap-2 text-lg font-bold">
          <span aria-hidden="true" className="grid size-8 place-items-center rounded-lg bg-lime ring-2 ring-ink">
            ✦
          </span>
          Noezz Caption
        </a>
        <nav aria-label="Main" className="ml-auto hidden gap-6 text-sm font-medium sm:flex">
          <a href="#try" className="hover:underline">
            Try it
          </a>
          <a href="#features" className="hover:underline">
            Features
          </a>
          <a href="#faq" className="hover:underline">
            FAQ
          </a>
        </nav>
        <a href="#waitlist" className="ml-auto rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper hover:bg-black sm:ml-0">
          Join waitlist
        </a>
      </header>

      <main>
        <section id="top" className="mx-auto grid max-w-6xl items-start gap-12 px-4 pb-20 pt-10 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:pt-16">
          <div className="lg:sticky lg:top-10">
            <p className="pop inline-block rounded-full bg-white px-3 py-1 text-sm font-medium ring-1 ring-line">🔥 Early access opens in December</p>
            <h1 className="pop mt-6 text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl" style={{ "--d": "0.08s" } as React.CSSProperties}>
              A week of captions in <span className="bg-lime px-2 ring-2 ring-ink [box-decoration-break:clone]">10 seconds.</span>
            </h1>
            <p className="pop mt-6 max-w-md text-lg text-muted" style={{ "--d": "0.16s" } as React.CSSProperties}>
              Noezz Caption turns one idea into ready-to-post captions for Instagram, LinkedIn and TikTok, in your brand&apos;s voice.
            </p>
            <div className="pop mt-8" style={{ "--d": "0.24s" } as React.CSSProperties}>
              <Waitlist />
            </div>
          </div>
          <div id="try" className="pop" style={{ "--d": "0.3s" } as React.CSSProperties}>
            <TryIt />
          </div>
        </section>

        <section className="border-y-2 border-ink bg-lime py-5">
          <p className="mx-auto max-w-6xl px-4 text-center text-lg font-semibold sm:px-6">
            Built for small brands, coaches and creators who post every day (sample audience for this demo)
          </p>
        </section>

        <section id="features" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <h2 className="reveal max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">Stop staring at a blank caption box.</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {features.map((f, i) => (
              <article key={f.title} className="reveal rounded-3xl border-2 border-ink bg-white p-7">
                <span className="font-mono text-sm text-muted">0{i + 1}</span>
                <h3 className="mt-3 text-2xl font-bold">{f.title}</h3>
                <p className="mt-2 text-muted">{f.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-3xl px-4 pb-24 sm:px-6">
          <h2 className="reveal text-4xl font-extrabold tracking-tight">Questions</h2>
          <div className="reveal mt-8 divide-y-2 divide-ink rounded-3xl border-2 border-ink bg-white">
            {faqs.map((f) => (
              <details key={f.q} className="group px-6">
                <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 text-lg font-semibold">
                  {f.q}
                  <span aria-hidden="true" className="text-2xl transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="pb-5 text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-ink px-4 py-20 text-center text-paper sm:px-6">
          <h2 className="reveal mx-auto max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">Your next post is one idea away.</h2>
          <a href="#waitlist" className="reveal mt-8 inline-block rounded-xl bg-lime px-7 py-3 font-semibold text-ink">
            Join the waitlist →
          </a>
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:justify-between sm:px-6">
        <p>© 2026 Noezz Caption · a fictional product</p>
        <p>
          Design &amp; build:{" "}
          <a href="https://duongthanhnam.vercel.app" className="underline hover:text-ink">
            Duong Thanh Nam
          </a>
        </p>
      </footer>
    </>
  );
}
