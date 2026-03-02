export function SiteFooter() {
  return (
    <footer className="mt-14 border-t border-nexus-border bg-[#070c14]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-10 text-sm text-nexus-muted sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <img src="/nyxera-logo.png" alt="Nyxera Labs logo" className="h-9 w-9 object-contain" />
            <span className="text-nexus-text">Nyxera Labs</span>
          </div>
          <p className="mt-3 text-nexus-text">Nyxera Nexus™ by Nyxera Labs</p>
          <p className="mt-1">Enterprise Federated Validation Platform</p>
          <p className="mt-1">© 2026 Nyxera Labs — All Rights Reserved</p>
        </div>

        <div className="grid gap-6 text-sm sm:grid-cols-2">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-nexus-text">Platforms</p>
            <div className="flex flex-col gap-2">
              <a href="https://spectrastrike.nyxera.cloud" className="nexus-footer-link">SpectraStrike</a>
              <a href="https://vectorvue.nyxera.cloud" className="nexus-footer-link">VectorVue</a>
              <a href="https://nexus.nyxera.cloud" className="nexus-footer-link">Nyxera Nexus</a>
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-nexus-text">Resources</p>
            <div className="flex flex-col gap-2">
              <a href="https://nyxera.cloud" className="nexus-footer-link">Nyxera Cloud</a>
              <a href="https://docs.spectrastrike.nyxera.cloud" className="nexus-footer-link">Spectra Docs</a>
              <a href="https://docs.vectorvue.nyxera.cloud" className="nexus-footer-link">VectorVue Docs</a>
              <a href="https://docs.nexus.nyxera.cloud" className="nexus-footer-link">Nexus Docs</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
