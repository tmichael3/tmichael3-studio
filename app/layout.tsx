import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProjectsProvider } from '@/components/projects-provider';
import { cn } from '@/lib/utils'
import { siteMetadata } from '@/data/metadata'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = siteMetadata

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