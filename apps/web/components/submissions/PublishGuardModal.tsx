"use client";

export default function PublishGuardModal({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-md bg-white p-6">
        <h2 className="font-serif text-xl">
          Confirm submission for review
        </h2>

        <p className="mt-4 text-sm text-neutral-700 leading-relaxed">
          Submitting this draft initiates the formal review process.
          The content will become part of the permanent institutional record.
        </p>

        <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
          You will not be able to edit this version after submission.
        </p>

        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="rounded-md border px-4 py-2 text-sm"
          >
            Cancel
          </button>
          <button
            className="rounded-md bg-neutral-900 px-4 py-2 text-sm text-white"
          >
            Confirm submission
          </button>
        </div>
      </div>
    </div>
  );
}
