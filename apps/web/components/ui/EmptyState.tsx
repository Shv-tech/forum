export function EmptyState({
  title,
  message,
}: {
  title: string;
  message: string;
}) {
  return (
    <div className="rounded border bg-gray-50 p-6 text-center">
      <h3 className="font-medium text-gray-700">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{message}</p>
    </div>
  );
}
