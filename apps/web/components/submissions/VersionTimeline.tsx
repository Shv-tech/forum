export default function VersionTimeline() {
  return (
    <ul className="mt-8 space-y-6">
      <li className="border-l-2 border-neutral-300 pl-6">
        <p className="text-sm text-neutral-600">
          Version 1 · Submitted · 2026-01-14
        </p>
        <p className="mt-1 text-neutral-800">
          Initial submission for peer review
        </p>
      </li>

      <li className="border-l-2 border-neutral-300 pl-6">
        <p className="text-sm text-neutral-600">
          Version 2 · Draft · 2026-01-20
        </p>
        <p className="mt-1 text-neutral-800">
          Revised in response to reviewer feedback
        </p>
      </li>
    </ul>
  );
}
