import type {Metadata} from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster"
import { StockTicker } from '@/components/StockTicker';

export const metadata: Metadata = {
  title: {
    default: 'Grow Media - We Grow Brands Online',
    template: '%s | Grow Media',
  },
  description: 'Grow Media is a social media marketing agency dedicated to helping brands thrive online through expert strategy, creative content, and data-driven results.',
  keywords: ['social media marketing', 'digital agency', 'content creation', 'paid ads', 'influencer marketing'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <StockTicker />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
