export default function InstitutionProfilePage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <section className="space-y-10 max-w-5xl">
      <header>
        <h1 className="font-serif text-3xl">Institution Profile</h1>
        <p className="mt-3 text-sm text-gray-600">
          Institution identifier: {params.id}
        </p>
      </header>

      <section className="rounded border bg-white p-6 text-sm text-gray-700">
        <p>
          Institution pages represent verified organizational participation.
          Membership, submissions, and official statements displayed here are
          institutionally approved.
        </p>
      </section>

      <section className="text-sm text-gray-600 max-w-4xl">
        <p>
          Institutions do not compete for visibility. There are no rankings,
          badges, or comparative metrics. Presence reflects governance-approved
          participation only.
        </p>
      </section>
    </section>
  );
}
