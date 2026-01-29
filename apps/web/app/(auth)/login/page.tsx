export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm rounded border bg-white p-6">
        <h1 className="font-serif text-xl">Sign in</h1>

        <p className="mt-3 text-sm text-gray-600">
          Access requires a verified professional or institutional email address.
        </p>

        <button className="mt-6 w-full rounded border px-4 py-2 text-sm hover:bg-gray-50">
          Continue with email
        </button>
      </div>
    </main>
  );
}
