import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gokul Kannan - Full Stack Developer & Mobile App Developer',
  description: 'Experienced Full Stack Developer specializing in PHP, Laravel, React.js, Next.js, Flutter, and mobile app development. Portfolio showcasing web applications, mobile apps, and backend systems.',
  keywords: 'Gokul Kannan, Full Stack Developer, PHP Developer, Laravel Developer, React Developer, Next.js Developer, Flutter Developer, Mobile App Developer, Web Developer',
  authors: [{ name: 'Gokul Kannan' }],
  openGraph: {
    title: 'Gokul Kannan - Full Stack Developer',
    description: 'Experienced Full Stack Developer with expertise in web and mobile app development',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gokul Kannan - Full Stack Developer',
    description: 'Experienced Full Stack Developer with expertise in web and mobile app development',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
