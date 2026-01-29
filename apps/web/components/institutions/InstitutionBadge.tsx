import { CheckCircle } from "lucide-react";

export default function InstitutionBadge({
  name,
  verified,
}: {
  name: string;
  verified?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-md border px-3 py-1 text-sm">
      <span>{name}</span>
      {verified && (
        <CheckCircle size={14} className="text-green-600" />
      )}
    </span>
  );
}
