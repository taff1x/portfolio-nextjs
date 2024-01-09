import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/app/components/navigation'
import BottomBar from '@/app/components/bottom-bar'
import ScrollButton from '@/app/components/scroll-button'

const inter = Inter({ subsets: ['latin'] })

export const metadata : Metadata = {
  title: 'SOFTaff | Software Developer',
  description: 'Welcome to my portfolio! I specialize in Next.js and React.js development. Explore my projects and skills.',
  keywords: 'Next.js, React.js, software developer, portfolio, projects, SCADA, PLC',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <BottomBar />
        <ScrollButton />
      </body>
    </html>
  )
}
