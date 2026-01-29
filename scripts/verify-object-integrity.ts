import fs from "fs";
import path from "path";
import crypto from "crypto";

const STORAGE_ROOT = path.resolve("storage");

function hashFile(p: string): string {
  return crypto.createHash("sha256")
    .update(fs.readFileSync(p))
    .digest("hex");
}

function main() {
  let failures = 0;

  const walk = (dir: string) => {
    for (const file of fs.readdirSync(dir)) {
      const full = path.join(dir, file);
      if (fs.statSync(full).isDirectory()) {
        walk(full);
      } else {
        const recordedHash = file.split(".")[0];
        const actualHash = hashFile(full);
        if (recordedHash !== actualHash) {
          console.error("✗ Integrity violation:", full);
          failures++;
        }
      }
    }
  };

  walk(STORAGE_ROOT);

  if (failures > 0) {
    process.exit(1);
  }

  console.log("✔ Object integrity verified");
}

main();
