// One-Line Office Jokes — make.fun bounty entry.
// Writes the single office joke (199 chars max) to /output/entry.txt
// (no trailing newline) and prints it to stdout. Node 22.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry line, built in two parts: the office curses (printer, Wi-Fi),
// then the reversal — the meeting that should have been an email has a sequel.
const SETUP =
  "The printer jams only when the document matters most, the Wi-Fi dies only mid-presentation, and the meeting that really could have been an email ";
const PUNCH = "just sent me a calendar invite for its sequel.";
const LINE = SETUP + PUNCH;
const CHAR_LIMIT = 199; // chars — the gate caps the file at 199, not 200

function main(): void {
  if (LINE.length < 1 || LINE.length > CHAR_LIMIT) {
    throw new Error(`line is ${LINE.length} chars, limit is ${CHAR_LIMIT}`);
  }
  if (LINE !== LINE.trim()) {
    throw new Error("line must not start or end with whitespace");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf-8" });
  process.stdout.write(LINE + "\n");
}

main();
