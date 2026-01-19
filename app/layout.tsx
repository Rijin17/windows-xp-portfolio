import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rijin Stalin | Data Scientist',
  description: 'Portfolio of Rijin Stalin, a Data Scientist specializing in ML, Data Engineering, and Analytics.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white antialiased overflow-hidden`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
