export default function SubmissionDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <article className="space-y-10 max-w-4xl">
      <header>
        <h1 className="font-serif text-3xl">
          Submission Record
        </h1>
        <p className="mt-3 text-sm text-gray-600">
          Submission ID: {params.id}
        </p>
      </header>

      <section className="prose prose-gray max-w-none">
        <p>
          This page presents a complete, immutable record of a submission,
          including its current published version and all historical revisions.
        </p>

        <p>
          Authorship, institutional affiliation, and review history are displayed
          transparently to ensure attribution and accountability.
        </p>
      </section>

      <section className="rounded border bg-white p-6 text-sm text-gray-600">
        <p>
          Once published, submissions cannot be edited directly. Revisions are
          introduced as new versions, preserving the original content.
        </p>
      </section>
    </article>
  );
}
