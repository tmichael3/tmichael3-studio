import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About TJ Michael
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Professional photographer and videographer passionate about capturing life&apos;s most precious moments.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Work With Me</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}