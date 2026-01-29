export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-3xl">Record not found</h1>
        <p className="mt-3 text-sm text-gray-600">
          The requested resource does not exist or is not publicly accessible.
        </p>
      </div>
    </main>
  );
}
