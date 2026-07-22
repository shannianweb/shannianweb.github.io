import { cpSync, existsSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const output = resolve(root, "out");

if (!existsSync(resolve(output, "index.html"))) {
  throw new Error("Static export is missing out/index.html");
}

// `_next` is generated and content-hashed. Remove only the previous generated
// asset directory so old build IDs never accumulate in the Pages deployment.
rmSync(resolve(root, "_next"), { recursive: true, force: true });
cpSync(output, root, { recursive: true, force: true });
console.log("Static export synced to the repository root for GitHub Pages.");
