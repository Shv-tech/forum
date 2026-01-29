import InstitutionBadge from "../../../components/institutions/InstitutionBadge";

export default function ProfilePage() {
  return (
    <main className="mx-auto max-w-4xl px-8 py-12">
      <h1 className="font-serif text-3xl">Your profile</h1>

      <section className="mt-10 rounded-lg border bg-white p-6">
        <h2 className="text-lg font-medium">Identity</h2>
        <p className="mt-2 text-sm text-neutral-600">
          Profiles exist to establish attribution and institutional trust,
          not personal branding.
        </p>

        <div className="mt-6 space-y-2">
          <p className="text-sm">
            <strong>Name:</strong> Verified User
          </p>
          <p className="text-sm">
            <strong>Role:</strong> Contributor
          </p>
        </div>
      </section>

      <section className="mt-8 rounded-lg border bg-white p-6">
        <h2 className="text-lg font-medium">Affiliations</h2>
        <p className="mt-2 text-sm text-neutral-600">
          Affiliations are verified by institutions and displayed publicly
          alongside authored work.
        </p>

        <div className="mt-4">
          <InstitutionBadge name="Policy Research Institute" verified />
        </div>
      </section>
    </main>
  );
}
