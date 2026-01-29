import { Footer } from "../components/layout/Footer";
import { Sidebar } from "../components/layout/Sidebar";
import { TopNav } from "../components/layout/TopNav";

/* eslint-disable react/no-unescaped-entities */
export default function HomePage() {
  return (
    <main className="w-full">

      {/* ==============================
          HERO / INSTITUTIONAL ANCHOR
      =============================== */}
      <div className="flex min-h-screen-w-full flex-col bg-slate-50">
      <TopNav />
      <section className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-10 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* HERO TEXT */}
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-6">
              A permanent institutional record
            </p>

            <h1 className="text-4xl lg:text-5xl font-serif leading-tight">
              A permanent institutional record for responsible artificial intelligence
            </h1>

            <p className="mt-8 text-lg leading-relaxed text-slate-700">
              This platform exists to support rigorous, identity-bound, and
              institution-aware deliberation on artificial intelligence — its
              design, governance, deployment, and long-term societal impact.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              It is not a social network. It does not optimize for engagement
              metrics or visibility. It is designed to endure decades, not quarters,
              and to preserve institutional memory rather than accelerate attention.
            </p>

            <div className="mt-10 flex flex-wrap gap-6 text-sm">
              <a href="/archive" className="underline">
                Explore the public archive →
              </a>
              <a href="/governance" className="underline">
                Read governance principles →
              </a>
              <a href="/methodology" className="underline">
                View institutional methodology →
              </a>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div>
            <div className="aspect-[4/3] bg-slate-100 border overflow-hidden">
              <img src="../assets/hero.png" alt="Institutional deliberation context" className="object-cover w-full h-full" />
            </div>
           
          </div>

        </div>
      </section>

      {/* ==============================
          WHY THIS EXISTS
      =============================== */}
      <section className="bg-slate-50 border-b">
        <div className="mx-auto max-w-4xl px-10 py-20">
          <h2 className="text-3xl font-serif mb-8">
            Why this institution exists
          </h2>

          <p className="text-lg leading-relaxed text-slate-700">
            Artificial intelligence is no longer a speculative technology.
            It is already embedded in economic systems, governance structures,
            public services, research institutions, and decision-making processes
            that affect societies at scale. Yet the mechanisms for documenting,
            scrutinizing, and preserving serious institutional deliberation on
            these systems remain fragmented, informal, or transient.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-slate-700">
            This institution exists to address that gap. It provides a permanent,
            procedurally governed digital environment in which institutions,
            researchers, policymakers, and accredited contributors can publish,
            review, and preserve formal submissions related to artificial
            intelligence without distortion by popularity dynamics or platform
            incentives.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-slate-700">
            Its purpose is not persuasion. Its purpose is record-keeping,
            deliberation, and continuity — ensuring that decisions, positions,
            critiques, and analyses remain accessible, attributable, and intact
            over time.
          </p>
        </div>
      </section>

      {/* ==============================
          DESIGNED FOR INSTITUTIONS
      =============================== */}
      <section className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-10 py-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          <div>
            <h2 className="text-3xl font-serif mb-8">
              Designed for institutions, not virality
            </h2>

            <p className="text-lg leading-relaxed text-slate-700">
              Every architectural and procedural decision within this system
              prioritizes accountability, attribution, permanence, and
              auditability. The platform does not contain engagement feeds,
              popularity rankings, or algorithmic amplification mechanisms.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-slate-700">
              Contributions take the form of formal submissions rather than posts.
              Reviews are signed and attributable rather than anonymous.
              Institutions participate as first-class entities, while individuals
              operate within explicitly defined and verifiable roles.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-slate-700">
              Once published, records are preserved immutably, with full version
              histories and permanent identifiers. Deletion, suppression, or
              retroactive modification is structurally restricted through
              governance controls and audit oversight.
            </p>
          </div>

          <div>
            <div className="aspect-[3/4] bg-slate-100 border overflow-hidden">
              <img src="../assets/sec2.png" alt="Archival review and documentation" className="object-cover w-full h-full" />
            </div>
          </div>

        </div>
      </section>

      {/* ==============================
          INSTITUTIONAL SCOPE
      =============================== */}
      <section className="bg-slate-50 border-b">
        <div className="mx-auto max-w-7xl px-10 py-20">
          <h2 className="text-3xl font-serif mb-12">
            Institutional scope
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            <div>
              <div className="relative h-48 mb-8 overflow-hidden rounded-md">
  <img
    src="../assets/left.png"
    alt="Policy hearing or regulatory discussion"
    className="w-full h-full object-cover"
  />
</div>
              <p className="mt-4 text-slate-700">
                Formal position statements, regulatory analysis, and
                cross-jurisdictional perspectives addressing how artificial
                intelligence systems should be governed, evaluated, and
                constrained in the public interest.
              </p>
            </div>

            <div>
              <div className="aspect-[4/3] bg-slate-100 border mb-4" />
              <p className="text-xs text-slate-500 mb-2">
                Technical research
              </p>
              <p className="leading-relaxed text-slate-700">
                Peer-reviewed submissions examining safety, alignment,
                robustness, interpretability, and other foundational
                technical considerations relevant to long-term AI deployment.
              </p>
            </div>

            <div>
              <div className="aspect-[4/3] bg-slate-100 border mb-4" />
              <p className="text-xs text-slate-500 mb-2">
                Ethics and societal impact
              </p>
              <p className="leading-relaxed text-slate-700">
                Analyses of social, legal, cultural, and economic implications,
                including labor impact, human rights, public trust, and the
                distribution of benefits and risks.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ==============================
          GOVERNANCE COMMITMENT
      =============================== */}
      <section className="bg-white border-b">
        <div className="mx-auto max-w-4xl px-10 py-20">
          <h2 className="text-3xl font-serif mb-8">
            Institutional governance and accountability
          </h2>

          <p className="text-lg leading-relaxed text-slate-700">
            This digital platform operates as a permanent, institution-grade
            system for the documentation, deliberation, and preservation of
            material related to artificial intelligence and its long-term
            societal implications.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-slate-700">
            All submissions, reviews, affiliations, and governance actions are
            recorded with explicit attribution and preserved in accordance with
            established principles of archival integrity, transparency, and
            procedural legitimacy.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-slate-700">
            Unauthorized modification, deletion, or suppression of records is
            structurally restricted through role-based authorization, immutable
            audit logs, and continuous oversight mechanisms enforced by code
            rather than discretion.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-slate-700">
            Participation in this system constitutes acknowledgment of these
            principles and acceptance of the responsibilities associated with
            contributing to an institutional, public-interest digital record.
          </p>
        </div>
      </section>
      <Footer />
      </div>
    </main>
  );
}
