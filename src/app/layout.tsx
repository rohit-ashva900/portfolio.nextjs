import type { Metadata } from 'next';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Rohit Ashva – Data Engineer',
  description: 'Portfolio of Rohit Ashva, Data Engineer. ETL/ELT, Azure, Databricks, Search & Indexing.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Rohit Ashva – Data Engineer',
    description: 'ETL/ELT, Azure, Databricks, Search & Indexing',
    type: 'website'
  },
  twitter: { card: 'summary_large_image' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header />
          <main className="container py-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

