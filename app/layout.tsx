// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

// Metadata update kar diya VK Realtor ke hisaab se
export const metadata: Metadata = {
  title: 'VK Realtor | Creating Space for Life',
  description: 'Experience premium living with our world-class residential and commercial properties.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* 
        1. Inter font hata diya.
        2. Light theme ka background aur text color laga diya.
        3. Default font 'font-optima' laga diya jisse poori website pe apply ho jaye.
      */}
      <body className="bg-[#F4EFEA] text-[#1a1a1a] antialiased font-optima">
        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}