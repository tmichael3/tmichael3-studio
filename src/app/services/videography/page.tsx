import { Button } from '@/components/ui/button'
import { PageHeroSection } from '@/components/page-hero-section'
import Link from 'next/link'

export default function VideographyPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeroSection
        title="Professional Videography"
        description="Cinematic video production that tells your story with emotion and artistry."
        pricing="Starting at $800 per project"
        buttonText="View Our Work"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Video Services</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Professional videography for weddings, corporate events, and special occasions.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}