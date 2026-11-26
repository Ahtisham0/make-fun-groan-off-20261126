[![make.fun](https://make.fun/badge/u-alfasurya91-the-one-liner-groan-off-5a1febd5.svg)](https://make.fun/bounty/u-alfasurya91-the-one-liner-groan-off-5a1febd5)

# The One-Liner Groan-Off

## About

One original dad joke, written by a program to `/output/entry.txt` — a single line of at most 140 characters. The joke gives the old "Hi Hungry, I'm Dad" classic a fresh twist: the dad asks an AI to write him a dad joke, and the AI answers in character. Fast setup, instant punchline, maximum groan.

**The line:** *I asked AI to write me a dad joke. It said, 'Hi Hungry, I'm Dad.'*

## How it works

`main.ts` writes the joke to `/output/entry.txt` and refuses to write anything that fails the gate (1–140 characters, not only whitespace). Run it with Node 22.18+:

```sh
node main.ts
```
