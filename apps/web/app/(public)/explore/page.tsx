import { Search } from "lucide-react";

export default function ExplorePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <header className="max-w-2xl">
        <h1 className="font-serif text-2xl">
          Explore records and deliberations
        </h1>
        <p className="mt-3 text-sm text-gray-600">
          Search across published submissions, verified institutions,
          affiliated contributors, reviews, and archived materials.
        </p>
      </header>

      <div className="relative mt-8 max-w-xl">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        <input
          type="text"
          className="w-full rounded border bg-white pl-9 pr-3 py-2 text-sm
                     focus:outline-none focus:ring-1 focus:ring-gray-300"
          placeholder="Search by topic, institution, author, or year"
        />
      </div>

      <section className="mt-10 max-w-3xl text-sm text-gray-600">
        <p>
          Results are grouped by entity type and filtered by publication status.
          Drafts, private materials, and internal governance records are never
          exposed in public search results.
        </p>
      </section>
    </main>
  );
}
