export default function DashboardPage() {
  return (
    <section className="space-y-10">
      <header>
        <h1 className="font-serif text-3xl">Dashboard</h1>
        <p className="mt-3 max-w-3xl text-sm text-gray-600">
          This dashboard provides an overview of your institutional participation,
          responsibilities, and active engagements within the platform.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded border bg-white p-6">
          <h2 className="text-sm font-medium text-gray-700">
            Active Submissions
          </h2>
          <p className="mt-2 text-2xl font-semibold">—</p>
          <p className="mt-2 text-xs text-gray-500">
            Drafts or published submissions authored or co-authored by you.
          </p>
        </div>

        <div className="rounded border bg-white p-6">
          <h2 className="text-sm font-medium text-gray-700">
            Pending Reviews
          </h2>
          <p className="mt-2 text-2xl font-semibold">—</p>
          <p className="mt-2 text-xs text-gray-500">
            Review invitations awaiting completion or response.
          </p>
        </div>

        <div className="rounded border bg-white p-6">
          <h2 className="text-sm font-medium text-gray-700">
            Institutional Roles
          </h2>
          <p className="mt-2 text-2xl font-semibold">—</p>
          <p className="mt-2 text-xs text-gray-500">
            Verified affiliations and governance roles assigned to you.
          </p>
        </div>
      </section>

      <section className="max-w-4xl text-sm text-gray-600">
        <p>
          The dashboard intentionally avoids engagement metrics such as likes,
          popularity, or activity scores. Its purpose is to orient you within
          your formal responsibilities, not to optimize attention.
        </p>
      </section>
    </section>
  );
}
