import Link from "next/link";
import { Home, FileText, Building2, Shield, ScrollText, User } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-64 border-r bg-white px-4 py-6">

      <nav className="space-y-2 text-sm">
        <Link href="/app/dashboard" className="flex items-center gap-3">
          <Home size={16} /> Dashboard
        </Link>
        <Link href="/app/submissions" className="flex items-center gap-3">
          <FileText size={16} /> Submissions
        </Link>
        <Link href="/app/institutions" className="flex items-center gap-3">
          <Building2 size={16} /> Institutions
        </Link>
        <Link href="/app/governance" className="flex items-center gap-3">
          <Shield size={16} /> Governance
        </Link>
        <Link href="/app/audit-log" className="flex items-center gap-3">
          <ScrollText size={16} /> Audit Log
        </Link>
        <Link href="/app/profile" className="flex items-center gap-3">
          <User size={16} /> Profile
        </Link>
      </nav>
    </aside>
  );
}
