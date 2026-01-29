export async function aiAssist(query: string) {
  const res = await fetch("/api/ai/assist", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
    credentials: "include",
  });

  if (!res.ok) throw new Error("AI assist failed");
  return res.json();
}
