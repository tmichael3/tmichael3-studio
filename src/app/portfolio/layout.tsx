import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio | tmichael3.studio',
  description: 'Explore our collection of family portraits, wedding photography, and branded marketing videos showcasing our visual storytelling expertise.',
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}