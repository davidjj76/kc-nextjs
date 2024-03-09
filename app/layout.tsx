import '@/app/ui/global.css';

import { Metadata } from 'next';
import { inter } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: 'KC Next.js',
  description: 'Keepcoding Next.js in react advanced module',
  keywords: ['Keepcoding', 'next.js', 'react'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
