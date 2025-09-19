import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gokul Kannan - Full Stack Developer & Mobile App Developer | Portfolio',
  description: 'Gokul Kannan - Experienced Full Stack Developer with 5+ years expertise in PHP, Laravel, React.js, Next.js, Flutter, and mobile app development. View my portfolio of 29+ projects including web applications, mobile apps, and backend systems.',
  keywords: 'Gokul Kannan, Gokul Kannan Developer, Full Stack Developer Gokul Kannan, PHP Developer, Laravel Developer, React Developer, Next.js Developer, Flutter Developer, Mobile App Developer, Web Developer, Software Developer, uSiS Technologies, Portfolio, Resume, Projects',
  authors: [{ name: 'Gokul Kannan', url: 'https://gokulkannan.dev' }],
  creator: 'Gokul Kannan',
  publisher: 'Gokul Kannan',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Gokul Kannan - Full Stack Developer & Mobile App Developer',
    description: 'Experienced Full Stack Developer with 5+ years expertise in PHP, Laravel, React.js, Next.js, Flutter, and mobile app development. Portfolio showcasing 29+ projects.',
    type: 'website',
    locale: 'en_US',
    url: 'https://gokulkannan.dev',
    siteName: 'Gokul Kannan Portfolio',
    images: [
      {
        url: '/assets/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Gokul Kannan - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gokul Kannan - Full Stack Developer & Mobile App Developer',
    description: 'Experienced Full Stack Developer with 5+ years expertise in PHP, Laravel, React.js, Next.js, Flutter, and mobile app development.',
    images: ['/assets/profile.jpg'],
    creator: '@gokulkannan',
  },
  alternates: {
    canonical: 'https://gokulkannan.dev',
  },
  category: 'technology',
  classification: 'Portfolio Website',
  referrer: 'origin-when-cross-origin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Gokul Kannan",
    "jobTitle": "Full Stack Developer & Mobile App Developer",
    "description": "Experienced Full Stack Developer with 5+ years expertise in PHP, Laravel, React.js, Next.js, Flutter, and mobile app development",
    "url": "https://gokulkannan.dev",
    "image": "https://gokulkannan.dev/assets/profile.jpg",
    "email": "gokulprofessional5797@gmail.com",
    "telephone": "+91-9876543210",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "sameAs": [
      "https://www.linkedin.com/in/gokul-kannan-141096140/",
      "https://github.com/gokulkannan"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "uSiS Technologies Pvt. Ltd."
    },
    "knowsAbout": [
      "PHP", "Laravel", "React.js", "Next.js", "Flutter", "Dart", "JavaScript", 
      "TypeScript", "Node.js", "MySQL", "MongoDB", "Firebase", "AWS", "Mobile App Development",
      "Web Development", "Full Stack Development", "API Development", "REST APIs"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Software Developer",
      "occupationLocation": {
        "@type": "Country",
        "name": "India"
      },
      "skills": "PHP, Laravel, React.js, Next.js, Flutter, Mobile Development, Web Development"
    }
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
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
