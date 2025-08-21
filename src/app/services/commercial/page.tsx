import { Button } from '@/components/ui/button'
import { PageHeroSection } from '@/components/page-hero-section'
import Link from 'next/link'

export default function CommercialPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeroSection
        title="Commercial Photography"
        description="Professional commercial photography for businesses and real estate."
        pricing="Starting at $300 per project"
        buttonText="Get Quote"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Commercial Services</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Professional photography for businesses, real estate, and commercial needs.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get Custom Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
