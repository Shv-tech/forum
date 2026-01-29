import VersionTimeline from "../../../../../components/submissions/VersionTimeline";

export default function SubmissionVersionsPage() {
  return (
    <main className="mx-auto max-w-4xl px-8 py-12">
      <h1 className="font-serif text-3xl">
        Version history
      </h1>

      <p className="mt-4 text-neutral-700 leading-relaxed">
        This page records the complete history of revisions for this submission.
        Earlier versions remain accessible and citable.
      </p>

      <VersionTimeline />
    </main>
  );
}
