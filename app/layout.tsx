import type { Metadata } from 'next';
import { Hanken_Grotesk, Inter, IBM_Plex_Mono } from 'next/font/google';
import { SHOP } from '@/lib/data';
import './globals.css';

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-hanken-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

const SITE_URL = 'https://juanautorepairs.com';
const SITE_TITLE = 'Juan Auto Repair — Auto Repair Shop in Springtown, TX';
const SITE_DESCRIPTION =
  'Locally owned auto repair shop in Springtown, TX. Oil changes, brake service, AC repair, and engine diagnostics on domestic and imported vehicles — 30 years of experience, no dealership markup.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    'auto repair Springtown TX',
    'mechanic Springtown Texas',
    'brake repair Springtown',
    'car AC repair Springtown',
    'engine diagnostics Springtown TX',
    'Juan Auto Repair',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Juan Auto Repair',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: 'en_US',
    images: [
      {
        url: '/images/hero-bg.jpg',
        width: 1800,
        height: 2250,
        alt: 'Juan Auto Repair — Springtown, TX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/images/hero-bg.jpg'],
  },
};

// Structured data for local search / Google's rich results — tells Google
// this is a real, physical auto repair shop (not just a web page about
// one), with the exact name/address/phone/hours to match against the
// Google Business Profile once that's set up. See:
// https://schema.org/AutoRepair
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: SHOP.name,
  image: `${SITE_URL}/images/hero-bg.jpg`,
  url: SITE_URL,
  telephone: SHOP.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SHOP.addressLine1,
    addressLocality: 'Springtown',
    addressRegion: 'TX',
    postalCode: '76082',
    addressCountry: 'US',
  },
  areaServed: ['Springtown, TX', 'Azle, TX', 'Weatherford, TX', 'Parker County, TX'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${hankenGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
