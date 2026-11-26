// The One-Liner Groan-Off — one original dad joke, written to /output/entry.txt
// The joke: a dad-joke classic ("Hi Hungry, I'm Dad") with a fresh AI twist.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE = `I asked AI to write me a dad joke. It said, 'Hi Hungry, I'm Dad.'`;

// Gate: the scorer only accepts UTF-8 text of 1 to 140 characters, not
// only whitespace. Refuse to write anything that would fail the gate.
if (JOKE.length < 1 || JOKE.length > 140 || JOKE.trim().length === 0) {
  throw new Error(`Joke fails the gate at ${JOKE.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to /output/entry.txt`);
