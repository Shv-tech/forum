export default function SubmissionMetaPanel() {
  return (
    <aside className="rounded-md border bg-neutral-50 p-6 space-y-6">
      <div>
        <h3 className="font-serif text-lg">Submission context</h3>
        <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
          Submissions are evaluated in relation to institutional affiliation,
          declared intent, and long-term archival value.
        </p>
      </div>

      <div className="space-y-3 text-sm text-neutral-700">
        <p>
          • Authorship is attributable  
        </p>
        <p>
          • All versions are preserved  
        </p>
        <p>
          • Reviews become public records
        </p>
      </div>

      <div className="border-t pt-4 text-xs text-neutral-600 leading-relaxed">
        Once submitted for review, content cannot be edited.
        Revisions require creation of a new version.
      </div>
    </aside>
  );
}
