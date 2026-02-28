import Link from 'next/link';

const links = [
  { href: 'https://spectrastrike.nyxera.cloud', label: 'Explore SpectraStrike' },
  { href: 'https://vectorvue.nyxera.cloud', label: 'Explore VectorVue' },
  { href: 'https://docs.nexus.nyxera.cloud', label: 'View Documentation' }
];

export function SiteHeader() {
  return (
    <header className="border-b border-nexus-border bg-[#0b111a]/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <img src="/nexus-logo.svg" alt="Nyxera Nexus logo" className="h-10 w-10" />
          <div>
            <p className="font-brand text-sm uppercase tracking-[0.14em] text-nexus-text">Nyxera Nexus</p>
            <p className="text-xs text-nexus-muted">The Unified Offensive Intelligence Platform</p>
          </div>
        </Link>
        <nav className="flex flex-wrap gap-2 text-xs sm:text-sm">
          {links.map((item) => (
            <a key={item.href} href={item.href} className="rounded border border-nexus-border bg-nexus-panel px-3 py-2 text-nexus-muted hover:border-nexus-accent hover:text-nexus-text">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
