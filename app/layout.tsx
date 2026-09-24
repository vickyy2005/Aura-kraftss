import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import AtelierLoader from '@/components/AtelierLoader'

export const metadata: Metadata = {
  title: 'aura.kraftss — Handcrafted Woolen Rangoli Mats & Artisan Decor',
  description:
    'Bespoke handcrafted woolen rangoli mats, 3D peacock rugs, floral wedding aisle runners, and chowki decor by aura.kraftss. WhatsApp: +91 96077 78013.',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#A82855',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth bg-[#FFF0F5]">
      <body className="antialiased bg-[#FFF0F5] text-[#380D1D]">
        <AtelierLoader />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
