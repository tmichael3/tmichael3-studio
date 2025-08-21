import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ProjectCard } from '@/components/project-card'
import { projects } from '@/lib/projects'
import { reviews } from '@/data/reviews'
import { Star, Camera, Heart, Users, Video } from 'lucide-react'

export default function Home() {
  // Get recent projects for display (server-side, deterministic)
  const recentProjects = projects.slice(0, 6)

  // Define services with icons for homepage
  const services = [
    {
      title: 'Portrait Photography',
      description: 'Individual, family, and senior portraits',
      price: 'Starting at $200',
      href: '/services/portrait',
      icon: Camera
    },
    {
      title: 'Wedding Photography',
      description: 'Complete wedding day coverage',
      price: 'Starting at $1,500',
      href: '/services/wedding',
      icon: Heart
    },
    {
      title: 'Commercial Photography',
      description: 'Business and real estate photography',
      price: 'Starting at $300',
      href: '/services/commercial',
      icon: Users
    },
    {
      title: 'Videography',
      description: 'Cinematic video production and films',
      price: 'Starting at $800',
      href: '/services/videography',
      icon: Video
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Professional Photography & Videography
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up animate-delay-200">
              Capturing life&apos;s precious moments with artistic vision and technical excellence. 
              Specializing in weddings, portraits, and commercial photography.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-400">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Crafting Visual Stories
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Offering professional personal, corporate, and wedding photography services tailored to your unique needs. 
              We blend technical expertise with artistic vision to create timeless images that tell your story.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional photography and videography services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`animate-fade-in-up animate-delay-${Math.min((index + 1) * 100, 500)}`}
              >
                <Card className="text-center group hover:shadow-lg transition-smooth h-full">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-smooth">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                    <Button className="w-full" asChild>
                      <Link href={service.href}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A curated selection of our latest photography and videography projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {recentProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`animate-fade-in animate-delay-${Math.min((index + 1) * 100, 500)}`}
              >
                <ProjectCard 
                  project={project} 
                  priority={index < 3}
                  disableAnimation={true}
                />
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in-up animate-delay-400">
            <Button asChild size="lg" className="px-8 py-3">
              <Link href="/portfolio">
                View Full Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from the amazing couples and families we&apos;ve had the privilege to work with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className={`animate-fade-in animate-delay-${Math.min((index + 1) * 100, 500)}`}
              >
                <Card className="text-center h-full transition-smooth hover:shadow-lg">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <CardDescription className="text-base italic">
                      &quot;{review.text}&quot;
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.service}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Create Something Beautiful?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let&apos;s work together to capture the moments that matter most to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get Started
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/portfolio">
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}