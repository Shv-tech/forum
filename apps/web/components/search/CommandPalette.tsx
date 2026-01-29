"use client";

import { useEffect, useState } from "react";
import { Search, Building2, FileText, User } from "lucide-react";

type Result = {
  id: string;
  type: "institution" | "submission" | "user";
  title: string;
  subtitle?: string;
  href: string;
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }
    // production: call backend search API
    setResults([
      {
        id: "1",
        type: "submission",
        title: "AI Governance in Public Systems",
        subtitle: "Policy Paper · 2025",
        href: "/app/submissions/1",
      },
    ]);
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40">
      <div className="mx-auto mt-32 max-w-xl rounded-lg bg-white shadow-xl">
        <div className="flex items-center gap-3 border-b px-4 py-3">
          <Search size={16} />
          <input
            autoFocus
            className="w-full text-sm focus:outline-none"
            placeholder="Search institutions, submissions, people…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="max-h-96 overflow-y-auto">
          {results.map((r) => (
            <a
              key={r.id}
              href={r.href}
              className="flex items-start gap-3 px-4 py-3 hover:bg-neutral-50"
            >
              {r.type === "institution" && <Building2 size={16} />}
              {r.type === "submission" && <FileText size={16} />}
              {r.type === "user" && <User size={16} />}
              <div>
                <p className="text-sm font-medium">{r.title}</p>
                {r.subtitle && (
                  <p className="text-xs text-neutral-500">{r.subtitle}</p>
                )}
              </div>
            </a>
          ))}
          {!results.length && query && (
            <p className="px-4 py-6 text-sm text-neutral-500">
              No matching records.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
