export default function ReviewsPage() {
  return (
    <section className="space-y-10 max-w-5xl">
      <header>
        <h1 className="font-serif text-3xl">Reviews</h1>
        <p className="mt-3 text-sm text-gray-600">
          Reviews are formal, signed evaluations associated with submissions.
          They may represent peer, institutional, or stewardship review.
        </p>
      </header>

      <section className="rounded border bg-white p-6 text-sm text-gray-700">
        <p>
          Review invitations are issued explicitly and require affirmative
          acceptance. Anonymous or informal reviews are not supported.
        </p>
      </section>

      <section className="rounded border bg-white p-6 text-sm text-gray-600">
        <p>No active review assignments.</p>
      </section>
    </section>
  );
}
