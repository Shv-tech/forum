import { ArrowRight } from "lucide-react";

export default function PublicHomePage() {
  return (
    <main className="bg-neutral-50 text-neutral-900">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-8 py-28">
        <div className="max-w-4xl">
          <h1 className="font-serif text-[44px] leading-tight tracking-tight">
            A permanent institutional record for
            <br />
            responsible artificial intelligence
          </h1>

          <p className="mt-8 text-lg leading-relaxed text-neutral-700">
            This platform exists to support rigorous, identity-bound, and
            institution-aware deliberation on artificial intelligence
            its design, governance, deployment, and long-term societal impact.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-neutral-700">
            It is not a social network. It does not optimize for engagement.
            It is built to last decades, not quarters.
          </p>

          <div className="mt-12 flex items-center gap-6">
            <a
              href="/explore"
              className="inline-flex items-center gap-3 rounded-md border border-neutral-900 px-6 py-3 text-sm font-medium transition hover:bg-neutral-900 hover:text-white"
            >
              Explore the archive
              <ArrowRight size={16} />
            </a>

            <a
              href="/governance"
              className="text-sm text-neutral-600 underline-offset-4 hover:underline"
            >
              Read governance principles
            </a>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-8 py-24 grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl">
              Designed for institutions, not virality
            </h2>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Every architectural decision prioritizes accountability,
              attribution, permanence, and auditability.
            </p>
          </div>

          <div className="space-y-6 text-neutral-700 leading-relaxed">
            <p>
              Contributions are formal submissions — not posts.
              Reviews are signed — not anonymous.
            </p>
            <p>
              Institutions participate as first-class entities.
              Individuals act in verified roles.
            </p>
            <p>
              Records are preserved immutably, with full version history.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
