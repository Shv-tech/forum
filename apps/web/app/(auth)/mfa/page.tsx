export default function MFAPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-xl">Additional verification required</h1>
        <p className="mt-3 text-sm text-gray-600">
          Enter your multi-factor authentication code to proceed.
        </p>
      </div>
    </main>
  );
}
