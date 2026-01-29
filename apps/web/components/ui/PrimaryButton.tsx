export function PrimaryButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="rounded border bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-800">
      {children}
    </button>
  );
}
