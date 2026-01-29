export type SearchResult = {
  id: string;
  type: "submission" | "institution" | "user";
  title: string;
  subtitle?: string;
  href: string;
};

export async function search(query: string): Promise<SearchResult[]> {
  const res = await fetch(
    `/api/search?q=${encodeURIComponent(query)}`,
    { credentials: "include" },
  );

  if (!res.ok) {
    throw new Error("Search failed");
  }

  return res.json();
}
