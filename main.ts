// Unsent: The Micro-Confession Sprint
// Writes one two-part micro-confession to /output/entry.txt:
// a To: line naming who it was meant for, then the unsent message
// itself, one line written exactly as it was typed, with no
// explanation after it. Deterministic: the same bytes every run.

import { mkdirSync, writeFileSync } from "node:fs";

const TO_LINE = "To: Dad";

const MESSAGE =
  "i still have the voicemail where you said you were proud of me " +
  "on a phone that hasn't switched on in two years and i never " +
  "told you because i didn't want you to know how much i still " +
  "need to hear it";

const entry = `${TO_LINE}\n${MESSAGE}\n`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
