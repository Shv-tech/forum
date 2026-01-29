export default function AuditLogPage() {
  return (
    <section className="space-y-10 max-w-5xl">
      <header>
        <h1 className="font-serif text-3xl">Audit log</h1>
        <p className="mt-3 text-sm text-gray-600">
          This log records system-level actions associated with your account,
          affiliations, and governance-relevant activity.
        </p>
      </header>

      <section className="rounded border bg-white p-6 text-sm text-gray-700 space-y-4">
        <p>
          Audit records are append-only. Entries cannot be edited, reordered,
          or removed. This ensures traceability and institutional accountability.
        </p>
        <p>
          Certain governance actions may appear in redacted form where required
          to protect sensitive institutional processes.
        </p>
      </section>

      <section className="rounded border bg-white p-6 text-sm text-gray-600">
        <p>No audit events are currently visible.</p>
      </section>
    </section>
  );
}
