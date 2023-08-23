import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';

import { ToasterProvider } from '@/components/toaster-provider';
import { ModalProvider } from '@/components/modal-provider';
import { CrispProvider } from '@/components/crisp-provider';

import './globals.css';

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Power AI',
  description: 'AI Platform',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
        </head>
        <CrispProvider />
        <body className={font.className}>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
