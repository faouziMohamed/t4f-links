import './globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

const meta = {
  title: 'Contactez-nous | Trust 4 Finance',
  description:
    'La première plateforme tout en un pour gérer votre Assossiation',
};
const SITE_URL = process.env.SITE_URL!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  applicationName: '2 Raffle',
  referrer: 'origin-when-cross-origin',
  keywords:
    'administratif, cotisations, Comptabilité, membres, associations, gestion, plateforme, partenaire, reporting, transactions, contact, finance, trust, mfaouzi',
  authors: [{ name: 'Faouzi Mohamed' }],
  metadataBase: new URL(SITE_URL),
  colorScheme: 'light dark',
  formatDetection: { telephone: false, email: true, address: false },
  themeColor: '#045b81',
  alternates: { canonical: '/' },
  category: 'website',
  manifest: `${SITE_URL}/site.webmanifest`,
  openGraph: {
    title: meta.title,
    description: meta.description,
    siteName: 'Trust 4 Finance - Contact',
    url: SITE_URL,
    locale: 'fr_FR',
    type: 'website',
    emails: 'trustforfinance@gmail.com',
  },
  twitter: {
    description: meta.description,
    title: meta.title,
    creator: '@fz_faouzi',
  },

  bookmarks: `${SITE_URL}#official-website`,
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}
