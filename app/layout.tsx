import type { Metadata } from 'next';
import { Hanken_Grotesk, Inter, IBM_Plex_Mono } from 'next/font/google';
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

export const metadata: Metadata = {
  title: 'Juan Auto Repair — Springtown, TX',
  description:
    '30 years turning wrenches in Springtown. Juan Auto Repair handles everything from oil changes to full engine diagnostics on domestic and imported vehicles.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${hankenGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
