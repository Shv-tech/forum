export default function SubmissionsPage() {
  return (
    <section className="space-y-8">
      <header>
        <h1 className="font-serif text-3xl">Submissions</h1>
        <p className="mt-3 max-w-3xl text-sm text-gray-600">
          Submissions are formal contributions such as papers, policy analyses,
          technical critiques, and institutional position statements.
        </p>
      </header>

      <section className="rounded border bg-white p-6">
        <h2 className="text-sm font-medium text-gray-800">
          Your authored submissions
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Each submission maintains a complete version history. Edits create
          new versions and never overwrite previous records.
        </p>
      </section>

      <section className="text-sm text-gray-600 max-w-4xl">
        <p>
          Submission workflows are governed by review requirements, institutional
          affiliation rules, and role-based permissions. Drafts are private by
          default until formally submitted.
        </p>
      </section>
    </section>
  );
}
