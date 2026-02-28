export function SiteFooter() {
  return (
    <footer className="mt-14 border-t border-nexus-border bg-[#0a0f16]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-nexus-muted sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <img src="/nyxera-labs-logo.svg" alt="Nyxera Labs logo" className="h-8 w-8" />
          <span>Nyxera Nexus by Nyxera Labs. All rights reserved © 2026</span>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="https://nyxera.cloud" className="hover:text-nexus-text">Nyxera Cloud</a>
          <a href="https://vectorvue.nyxera.cloud" className="hover:text-nexus-text">VectorVue</a>
          <a href="https://spectrastrike.nyxera.cloud" className="hover:text-nexus-text">SpectraStrike</a>
          <a href="https://docs.nyxera-nexus.nyxera.cloud" className="hover:text-nexus-text">Nexus Docs</a>
        </div>
      </div>
    </footer>
  );
}
