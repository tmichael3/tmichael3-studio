import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface PageHeroSectionProps {
  title: string
  description: string
  pricing?: string
  buttonText?: string
  filterCategories?: string[]
  customImages?: string[]
}

export function PageHeroSection({ 
  title, 
  description, 
  pricing, 
  buttonText = "Get Started"
}: PageHeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 opacity-90 max-w-3xl mx-auto">
            {description}
          </p>
          {pricing && (
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/80 font-semibold">
              {pricing}
            </p>
          )}
          <div className="animate-fade-in-up animate-delay-400">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                {buttonText}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
