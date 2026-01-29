export function SectionHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <header className="space-y-1">
      <h2 className="font-serif text-xl">{title}</h2>
      {description && (
        <p className="text-sm text-gray-600">{description}</p>
      )}
    </header>
  );
}
