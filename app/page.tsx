import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="nexus-panel grid gap-6 rounded-xl p-8 shadow-glow lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <div className="flex items-center gap-4">
            <img src="/nexus-logo-hero.png" alt="Nyxera Nexus logo" className="h-20 w-20 object-contain" />
            <h1 className="font-brand text-4xl uppercase tracking-[0.12em] text-nexus-text">Nyxera Nexus</h1>
          </div>
          <p className="mt-4 max-w-3xl text-nexus-muted">
            Nyxera Nexus is the commercial bundle layer that unifies SpectraStrike offensive execution
            and VectorVue telemetry intelligence without merging codebases.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a href="https://spectrastrike.nyxera.cloud" className="nexus-chip-link">Explore SpectraStrike</a>
            <a href="https://vectorvue.nyxera.cloud" className="nexus-chip-link">Explore VectorVue</a>
            <a href="https://docs.nexus.nyxera.cloud" className="nexus-chip-link">View Documentation</a>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-nexus-border/90 bg-[#0a0f16] shadow-[0_20px_40px_rgba(3,8,18,0.45)]">
          <Image
            src="/nexus-hero.png"
            alt="Nyxera Nexus hero banner"
            width={1600}
            height={900}
            priority
            className="h-auto w-full object-cover"
          />
        </div>
      </section>

      <section className="nexus-panel mt-8 rounded-xl p-8">
        <h2 className="text-2xl font-semibold">Architecture Diagram</h2>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-nexus-muted">
          <span className="rounded border border-nexus-border px-3 py-2">Operator</span>
          <span>→</span>
          <span className="rounded border border-nexus-border px-3 py-2">SpectraStrike</span>
          <span>→</span>
          <span className="rounded border border-nexus-border px-3 py-2">Federation</span>
          <span>→</span>
          <span className="rounded border border-nexus-border px-3 py-2">VectorVue</span>
          <span>→</span>
          <span className="rounded border border-nexus-border px-3 py-2">Analytics</span>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <article className="nexus-panel rounded-xl p-6">
          <h3 className="text-xl font-semibold">Value Proposition</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-nexus-muted">
            <li>Signed execution provenance</li>
            <li>Telemetry validation</li>
            <li>Cognitive analytics</li>
            <li>Compliance-ready reporting</li>
          </ul>
        </article>
        <article className="nexus-panel rounded-xl p-6">
          <h3 className="text-xl font-semibold">Comparison</h3>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-nexus-border px-3 py-2 text-left">Platform</th>
                <th className="border border-nexus-border px-3 py-2 text-left">Role</th>
              </tr>
            </thead>
            <tbody className="text-nexus-muted">
              <tr><td className="border border-nexus-border px-3 py-2">SpectraStrike</td><td className="border border-nexus-border px-3 py-2">Offensive execution fabric</td></tr>
              <tr><td className="border border-nexus-border px-3 py-2">VectorVue</td><td className="border border-nexus-border px-3 py-2">Telemetry and cognitive analytics</td></tr>
              <tr><td className="border border-nexus-border px-3 py-2">Nyxera Nexus</td><td className="border border-nexus-border px-3 py-2">Commercial integration layer</td></tr>
            </tbody>
          </table>
        </article>
      </section>
    </div>
  );
}
