import { Button } from '@/components/ui/button'
import { PageHeroSection } from '@/components/page-hero-section'
import Link from 'next/link'

export default function PortraitPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeroSection
        title="Portrait Photography"
        description="Professional portrait sessions capturing personality and authentic moments."
        pricing="Starting at $200 per session"
        buttonText="Book Your Session"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Portrait Services</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Professional portrait photography for individuals, families, and businesses.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}