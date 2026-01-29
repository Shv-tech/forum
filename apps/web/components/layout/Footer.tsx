export function Footer() {
  return (
    <footer className="mt-20 border-t bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-7xl grid-cols-4 gap-10 px-10 py-16 text-sm">
        <div>
          <h3 className="mb-4 font-semibold text-white">About</h3>
          <p>
            A permanent institution-grade system for the documentation,
            deliberation, and preservation of material related to artificial
            intelligence and its long-term societal impact.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Governance</h3>
          <ul className="space-y-2">
            <li>Procedural legitimacy</li>
            <li>Auditability</li>
            <li>Institutional roles</li>
            <li>Conflict resolution</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Resources</h3>
          <ul className="space-y-2">
            <li>Public archive</li>
            <li>Methodology</li>
            <li>Transparency reports</li>
            <li>Security posture</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Legal</h3>
          <ul className="space-y-2">
            <li>Terms of use</li>
            <li>Privacy notice</li>
            <li>Data permanence policy</li>
            <li>Responsible disclosure</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 px-10 py-6 text-xs text-slate-400">
        © {new Date().getFullYear()} Institutional Platform. All records are
        preserved with full attribution and audit history.
      </div>
    </footer>
  );
}
