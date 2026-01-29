import Link from "next/link";

export function SubmissionListItem({
  id,
  title,
  status,
}: {
  id: string;
  title: string;
  status: string;
}) {
  return (
    <Link
      href={`/app/submissions/${id}`}
      className="block rounded border bg-white p-4 hover:bg-gray-50"
    >
      <h3 className="font-medium text-gray-900">{title}</h3>
      <p className="mt-1 text-xs text-gray-600">
        Status: {status}
      </p>
    </Link>
  );
}
