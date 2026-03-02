import Link from 'next/link';

const links = [
  { href: '#architecture', label: 'Architecture' },
  { href: '#use-cases', label: 'Use Cases' },
  { href: '#differentiation', label: 'Differentiation' },
  { href: '#comparison', label: 'Comparison' },
  { href: 'https://docs.nexus.nyxera.cloud', label: 'Documentation' }
];

export function SiteHeader() {
  return (
    <header className="border-b border-nexus-border bg-[#0b111a]/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <img src="/nexus-logo-hero.png" alt="Nyxera Nexus logo" className="h-14 w-14 object-contain" />
          <div>
            <p className="font-brand text-[11px] font-semibold uppercase tracking-[0.14em] text-nexus-text sm:text-xs lg:text-sm">Nyxera Nexus</p>
            <p className="text-[10px] uppercase tracking-[0.12em] text-nexus-muted sm:text-[11px]">Enterprise Federated Validation Platform</p>
          </div>
        </Link>
        <nav className="flex flex-wrap gap-3 text-xs sm:text-sm">
          {links.map((item) => (
            <a key={item.href} href={item.href} className="nexus-nav-link">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
