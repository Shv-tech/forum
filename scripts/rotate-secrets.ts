import crypto from "crypto";

function main() {
  const newSecret = crypto.randomBytes(64).toString("hex");
  console.log("NEW_SESSION_SECRET=", newSecret);
  console.log(
    "⚠️  Deploy this secret, keep old one valid during rollout",
  );
}

main();
