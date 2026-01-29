export default function GovernancePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-14">
      <h1 className="font-serif text-2xl">Governance framework</h1>

      <p className="mt-4 text-sm text-gray-700">
        Governance is explicit, documented, and enforced by system rules.
        There are no discretionary or hidden moderation powers.
      </p>

      <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-gray-700">
        <li>Identity-bound participation</li>
        <li>Role-based permissions with audit trails</li>
        <li>Signed and permanent reviews</li>
        <li>Append-only governance logs</li>
      </ul>
    </main>
  );
}
