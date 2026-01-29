"use client";

import { useState } from "react";
import PublishGuardModal from "./PublishGuardModal";
import SubmissionMetaPanel from "./SubmissionMetaPanel";

type Props = {
  mode: "create" | "edit";
  initialContent?: string;
};

export default function SubmissionEditor({
  mode,
  initialContent = "",
}: Props) {
  const [content, setContent] = useState(initialContent);
  const [showPublishGuard, setShowPublishGuard] = useState(false);

  return (
    <section className="grid grid-cols-12 gap-8">
      {/* Main editor */}
      <div className="col-span-8">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Begin drafting the submission content here…"
          className="
            min-h-[600px] w-full resize-none rounded-md border
            bg-white p-6 font-serif text-[16px] leading-relaxed
            focus:outline-none focus:ring-2 focus:ring-neutral-300
          "
        />

        <div className="mt-6 flex gap-4">
          <button
            className="rounded-md border border-neutral-300 px-5 py-2 text-sm hover:bg-neutral-100"
          >
            Save draft
          </button>

          <button
            onClick={() => setShowPublishGuard(true)}
            className="rounded-md border border-neutral-900 bg-neutral-900 px-5 py-2 text-sm text-white hover:bg-neutral-800"
          >
            Submit for review
          </button>
        </div>
      </div>

      {/* Metadata + rules */}
      <div className="col-span-4">
        <SubmissionMetaPanel />
      </div>

      {showPublishGuard && (
        <PublishGuardModal onClose={() => setShowPublishGuard(false)} />
      )}
    </section>
  );
}
