import SubmissionEditor from "../../../../components/submissions/SubmissionEditor";

export default function NewSubmissionPage() {
  return (
    <main className="mx-auto max-w-5xl px-8 py-10">
      <header className="mb-10">
        <h1 className="font-serif text-3xl">
          New submission
        </h1>
        <p className="mt-4 max-w-3xl text-neutral-700 leading-relaxed">
          Create a formal submission for archival review and deliberation.
          Submissions may include research papers, policy analyses,
          institutional statements, or technical critiques.
        </p>

        <p className="mt-3 text-neutral-700 leading-relaxed">
          Drafts are private by default. Once submitted for review,
          the content becomes part of an auditable institutional workflow.
        </p>
      </header>

      <SubmissionEditor mode="create" />
    </main>
  );
}
