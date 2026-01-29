export function AssistantPanel() {
  return (
    <aside className="fixed bottom-6 right-6 w-96 rounded border bg-white p-4 text-sm text-gray-700 shadow">
      <p className="font-medium">Research Assistant</p>
      <p className="mt-2 text-xs text-gray-500">
        This assistant provides navigational and contextual guidance only.
        All responses include citations. No speculative answers are generated.
      </p>
    </aside>
  );
}
