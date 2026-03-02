import Image from 'next/image';

const architectureLayers = [
  {
    title: 'Execution Domain',
    detail:
      'SpectraStrike executes policy-bound offensive validation operations with deterministic runtime controls and attested task provenance.'
  },
  {
    title: 'Federation Assurance Plane',
    detail:
      'Nexus validates identity, policy context, and cryptographic trust before bi-directional orchestration across product boundaries.'
  },
  {
    title: 'Evidence Intelligence Domain',
    detail:
      'VectorVue receives signed telemetry streams for correlation, evidence integrity scoring, and executive-level assurance reporting.'
  }
];

const useCases = [
  {
    title: 'Board-Level Security Assurance',
    detail:
      'Translate offensive validation activity into defensible enterprise evidence mapped to governance, audit, and regulatory expectations.'
  },
  {
    title: 'Federated Multi-Tenant Operations',
    detail:
      'Operate independent tenant contexts with deterministic boundaries and consistent control enforcement across execution and analytics layers.'
  },
  {
    title: 'Continuous Validation Programs',
    detail:
      'Run repeatable validation workflows that preserve chain-of-custody, cryptographic attestation, and remediation traceability.'
  },
  {
    title: 'Strategic Security Transformation',
    detail:
      'Align red-team execution and enterprise analytics into a unified operating model for measurable risk reduction and decision support.'
  }
];

const differentiators = [
  {
    title: 'Asymmetric Trust Architecture',
    detail: 'Ed25519 signatures, mTLS enforcement, and replay protection establish verifiable trust across all federation exchanges.'
  },
  {
    title: 'Deterministic Validation Pipeline',
    detail: 'Execution contracts, normalized telemetry schemas, and policy-bound orchestration produce consistent, audit-ready outputs.'
  },
  {
    title: 'Operational Evidence Integrity',
    detail: 'Every validation event carries cryptographic provenance for non-repudiation and defensible enterprise chain-of-custody.'
  },
  {
    title: 'Strategic Platform Layer',
    detail: 'Nexus operates above point products as the executive control plane for enterprise validation governance.'
  }
];

const comparisonRows = [
  {
    capability: 'Primary Function',
    pointProducts: 'Execution or analytics in isolated product boundaries.',
    nexus: 'Federated validation governance across execution and intelligence systems.'
  },
  {
    capability: 'Trust Model',
    pointProducts: 'Product-specific controls with fragmented attestations.',
    nexus: 'Unified cryptographic trust pipeline with end-to-end evidence integrity.'
  },
  {
    capability: 'Executive Reporting',
    pointProducts: 'Operational metrics with limited strategic context.',
    nexus: 'Board-ready assurance views backed by verifiable validation telemetry.'
  },
  {
    capability: 'Cross-Platform Orchestration',
    pointProducts: 'Manual integrations and inconsistent control transfer.',
    nexus: 'Deterministic federation layer with policy continuity and tenant mapping.'
  }
];

export default function HomePage() {
  return (
    <div className="relative mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="nexus-panel-enterprise relative overflow-hidden rounded-2xl p-8 sm:p-10 lg:p-14">
        <div className="pointer-events-none absolute -top-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-nexus-accent/10 blur-3xl" />
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr]">
          <div className="relative z-10">
            <div className="flex items-center gap-4">
              <img src="/nexus-logo-hero.png" alt="Nyxera Nexus logo" className="h-20 w-20 object-contain sm:h-24 sm:w-24" />
              <div>
                <h1 className="font-brand text-5xl font-semibold uppercase tracking-[0.12em] text-nexus-text sm:text-6xl">Nyxera Nexus</h1>
                <p className="mt-2 text-sm uppercase tracking-[0.14em] text-nexus-muted sm:text-base">Federated Enterprise Validation Platform</p>
              </div>
            </div>
            <p className="mt-6 max-w-3xl text-base leading-7 text-nexus-muted sm:text-lg sm:leading-8">
              Nyxera Nexus is the strategic platform layer that unifies attested offensive validation execution and evidence intelligence into a single enterprise assurance model.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-nexus-muted sm:text-lg sm:leading-8">
              It delivers executive-grade visibility across federation boundaries, enforcing cryptographic trust, policy continuity, and deterministic tenant governance at infrastructure scale.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <a href="https://spectrastrike.nyxera.cloud" className="nexus-chip-link">Explore SpectraStrike</a>
              <a href="https://vectorvue.nyxera.cloud" className="nexus-chip-link">Explore VectorVue</a>
              <a href="https://docs.nexus.nyxera.cloud" className="nexus-chip-link">Platform Documentation</a>
            </div>
          </div>
          <div className="nexus-hero-frame overflow-hidden rounded-2xl">
            <Image
              src="/nexus-hero.png"
              alt="Nyxera Nexus enterprise platform interface"
              width={1600}
              height={900}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-enterprise" id="architecture">
        <div className="nexus-panel rounded-2xl p-8 sm:p-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-nexus-muted">Platform Architecture</p>
            <h2 className="mt-3 text-3xl font-semibold text-nexus-text sm:text-4xl">Federation Control Plane for Assured Validation</h2>
            <p className="mt-4 text-base leading-7 text-nexus-muted sm:text-lg sm:leading-8">
              Nexus orchestrates trust, policy, and telemetry continuity across SpectraStrike and VectorVue without collapsing product boundaries.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {architectureLayers.map((layer) => (
              <article key={layer.title} className="nexus-layer-card rounded-xl p-6">
                <h3 className="text-lg font-semibold text-nexus-text">{layer.title}</h3>
                <p className="mt-3 text-sm leading-6 text-nexus-muted sm:text-base">{layer.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-enterprise" id="use-cases">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-nexus-muted">Enterprise Use Cases</p>
          <h2 className="mt-3 text-3xl font-semibold text-nexus-text sm:text-4xl">Built for High-Assurance Security Programs</h2>
          <p className="mt-4 text-base leading-7 text-nexus-muted sm:text-lg sm:leading-8">
            Nexus supports enterprise security leaders who require strategic clarity, operational rigor, and cryptographic trust at scale.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {useCases.map((item) => (
            <article key={item.title} className="nexus-panel rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(3,8,18,0.5)]">
              <h3 className="text-lg font-semibold text-nexus-text">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-nexus-muted sm:text-base">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-enterprise" id="differentiation">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-nexus-muted">Strategic Differentiation</p>
          <h2 className="mt-3 text-3xl font-semibold text-nexus-text sm:text-4xl">Enterprise Assurance Beyond Point Integrations</h2>
          <p className="mt-4 text-base leading-7 text-nexus-muted sm:text-lg sm:leading-8">
            Nexus establishes a strategic validation layer that transforms offensive activity into trusted security evidence for executive decision-making.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {differentiators.map((item) => (
            <article key={item.title} className="nexus-diff-card rounded-xl p-6">
              <h3 className="text-lg font-semibold text-nexus-text">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-nexus-muted sm:text-base">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-enterprise" id="comparison">
        <div className="nexus-panel rounded-2xl p-8 sm:p-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-nexus-muted">Platform Comparison</p>
            <h2 className="mt-3 text-3xl font-semibold text-nexus-text sm:text-4xl">Federated Platform Advantage</h2>
            <p className="mt-4 text-base leading-7 text-nexus-muted sm:text-lg sm:leading-8">
              Nexus provides unified strategic control where stand-alone products deliver only segmented operational outputs.
            </p>
          </div>
          <div className="mt-8 overflow-x-auto rounded-xl border border-nexus-border/80 bg-[#0b121d]/70">
            <table className="w-full min-w-[760px] border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-[#111b2a] text-nexus-text">
                  <th className="border-b border-nexus-border/80 px-4 py-3 text-left font-semibold">Capability</th>
                  <th className="border-b border-nexus-border/80 px-4 py-3 text-left font-semibold">Point Products</th>
                  <th className="border-b border-nexus-border/80 px-4 py-3 text-left font-semibold">Nyxera Nexus</th>
                </tr>
              </thead>
              <tbody className="text-nexus-muted">
                {comparisonRows.map((row) => (
                  <tr key={row.capability} className="align-top">
                    <td className="border-b border-nexus-border/70 px-4 py-4 font-medium text-nexus-text">{row.capability}</td>
                    <td className="border-b border-nexus-border/70 px-4 py-4">{row.pointProducts}</td>
                    <td className="border-b border-nexus-border/70 px-4 py-4">{row.nexus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
