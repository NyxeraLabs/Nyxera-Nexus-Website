import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://nexus.nyxera.cloud'),
  title: {
    default: 'Nyxera Nexus',
    template: '%s | Nyxera Nexus'
  },
  description: 'Nyxera Nexus is the enterprise federated validation platform unifying attested execution, trust governance, and security evidence intelligence.',
  openGraph: {
    title: 'Nyxera Nexus',
    description: 'Enterprise Federated Validation Platform',
    url: 'https://nexus.nyxera.cloud',
    siteName: 'Nyxera Nexus',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nyxera Nexus',
    description: 'Enterprise Federated Validation Platform'
  },
  icons: {
    icon: [
      { url: '/nexus-logo-hero.png', type: 'image/png' },
      { url: '/favicon.ico' }
    ],
    apple: [{ url: '/nexus-logo-hero.png', type: 'image/png' }],
    shortcut: ['/nexus-logo-hero.png']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen grid-canvas">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
