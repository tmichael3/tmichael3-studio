import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProjectsProvider } from '@/components/projects-provider';
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'tmichael3.studio | Professional Photography & Videography',
    template: '%s | tmichael3.studio'
  },
  description: 'Professional photography and videography services specializing in portraits, weddings, and commercial work. Creating timeless visual narratives that preserve precious moments.',
  keywords: ['photography', 'videography', 'portraits', 'weddings', 'commercial photography', 'professional photographer'],
  authors: [{ name: 'TJ Michael' }],
  creator: 'TJ Michael',
  metadataBase: new URL('https://tmichael3.studio'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tmichael3.studio',
    title: 'tmichael3.studio | Professional Photography & Videography',
    description: 'Professional photography and videography services specializing in portraits, weddings, and commercial work.',
    siteName: 'tmichael3.studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'tmichael3.studio | Professional Photography & Videography',
    description: 'Professional photography and videography services specializing in portraits, weddings, and commercial work.',
    creator: '@tmichael3studio',
  },
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.toggle('dark', theme === 'dark');
              } catch {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "tmichael3.studio",
              "description": "Professional photography and videography services",
              "url": "https://tmichael3.studio",
              "telephone": "(555) 123-4567",
              "email": "hello@tmichael3.studio",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US",
                "addressRegion": "Available nationwide"
              },
              "serviceType": ["Photography", "Videography", "Wedding Photography", "Portrait Photography", "Commercial Photography"],
              "founder": {
                "@type": "Person",
                "name": "TJ Michael"
              }
            })
          }}
        />
      </head>
      <body className={cn(inter.className, 'min-h-screen bg-background')}>
        <ProjectsProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ProjectsProvider>
      </body>
    </html>
  )
}