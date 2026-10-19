// Demo "generator": fills hand-written templates with the user's topic. No AI call is made.
export type Tone = "friendly" | "bold" | "professional";
export type Platform = "instagram" | "linkedin" | "tiktok";

export const tones: Tone[] = ["friendly", "bold", "professional"];
export const platforms: Platform[] = ["instagram", "linkedin", "tiktok"];

const templates: Record<Tone, ((t: string) => string)[]> = {
  friendly: [
    (t) => `Little reminder: ${t} doesn't have to be complicated ☀️ Start small, stay curious, and enjoy the process.`,
    (t) => `Coffee in one hand, ${t} in the other. What's on your list this week? Tell us below 👇`,
    (t) => `We asked our community about ${t} and the answers made our day. Here are our favourites 💛`,
  ],
  bold: [
    (t) => `Stop overthinking ${t}. Ship it today, fix it tomorrow. 🚀`,
    (t) => `Hot take: most advice about ${t} is wrong. Here's what actually works.`,
    (t) => `${capitalize(t)} isn't a trend. It's the new normal. Are you in or out?`,
  ],
  professional: [
    (t) => `Three lessons we learned this quarter about ${t}, and how they changed the way we work.`,
    (t) => `How teams can approach ${t} with clear goals, simple metrics and weekly reviews.`,
    (t) => `${capitalize(t)}: a short guide to doing it well, based on what our clients ask most.`,
  ],
};

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** "remote work tips" -> "#RemoteWorkTips" */
export function hashtag(topic: string): string {
  const words = topic.normalize("NFKD").replace(/[^\p{L}\p{N}\s]/gu, "").split(/\s+/).filter(Boolean);
  return words.length ? "#" + words.map(capitalize).join("") : "";
}

export function generateCaptions(topic: string, tone: Tone, platform: Platform): string[] {
  const t = topic.trim().replace(/\s+/g, " ").slice(0, 60);
  if (!t) return [];
  const tag = hashtag(t);
  return templates[tone].map((make) => {
    const text = make(t.toLowerCase());
    if (platform === "linkedin") return `${text}\n\nWhat has worked for you? I'd love to hear it in the comments.`;
    if (platform === "tiktok") return `${text} ${tag} #fyp #tips`;
    return `${text}\n\n${tag} #smallbusiness #contentideas`;
  });
}

export const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
