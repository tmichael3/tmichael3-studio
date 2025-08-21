import { Button } from '@/components/ui/button'
import { PageHeroSection } from '@/components/page-hero-section'
import Link from 'next/link'

export default function WeddingPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeroSection
        title="Wedding Photography & Videography"
        description="Capturing the magic of your special day with artistic photography and cinematic videography."
        pricing="Starting at $1,500 per wedding"
        buttonText="View Packages"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Wedding Services</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Comprehensive wedding coverage from engagement photos to the final dance.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}