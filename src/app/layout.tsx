import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CDT',
  description: 'Solutions innovantes en génie civil et électrique',
  viewport: { 
    width: 'device-width',
    initialScale: 1,
  },
  icons: {
    icon: [
      {
        url: '/images/favicon/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      
      {
        url: '/images/favicon/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    apple: {
      url: '/images/favicon/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}