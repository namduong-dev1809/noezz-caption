// Run with: npm test
import { test } from "node:test";
import assert from "node:assert/strict";
import { generateCaptions, hashtag, isValidEmail, platforms, tones } from "./captions.ts";

test("hashtag joins words in CamelCase and drops punctuation", () => {
  assert.equal(hashtag("remote work tips"), "#RemoteWorkTips");
  assert.equal(hashtag("  coffee, & croissants! "), "#CoffeeCroissants");
  assert.equal(hashtag("!!!"), "");
});

test("every tone and platform gives three captions with the topic", () => {
  for (const tone of tones)
    for (const platform of platforms) {
      const out = generateCaptions("Morning Routines", tone, platform);
      assert.equal(out.length, 3, `${tone}/${platform}`);
      for (const c of out) assert.match(c.toLowerCase(), /morning routines/);
    }
});

test("platform shapes the ending", () => {
  assert.match(generateCaptions("yoga", "friendly", "tiktok")[0], /#Yoga #fyp/);
  assert.match(generateCaptions("yoga", "friendly", "linkedin")[0], /comments\.$/);
  assert.match(generateCaptions("yoga", "friendly", "instagram")[0], /#Yoga #smallbusiness/);
});

test("empty topic gives nothing, long topic is trimmed", () => {
  assert.deepEqual(generateCaptions("   ", "bold", "instagram"), []);
  const long = "x".repeat(200);
  assert.ok(generateCaptions(long, "bold", "tiktok")[0].length < 200);
});

test("email check", () => {
  assert.ok(isValidEmail("a@b.co"));
  assert.ok(!isValidEmail("a@b"));
});
