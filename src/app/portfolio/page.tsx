import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { projects } from '@/lib/projects'
import { ProjectCard } from '@/components/project-card'
import Link from 'next/link'
import { Camera, Video, Heart } from 'lucide-react'

export default function PortfolioPage() {
  // Group projects by category (server-side)
  const portfolioSections = [
    {
      title: 'Wedding Photography',
      description: 'Beautiful moments from recent wedding celebrations',
      icon: Heart,
      projects: projects.filter(p => p.category === 'weddings' || p.section === 'wedding-photo-video').slice(0, 6)
    },
    {
      title: 'Portrait Sessions',
      description: 'Professional portraits and family sessions',
      icon: Camera,
      projects: projects.filter(p => ['family-portraits', 'senior-yearbook', 'corporate-headshots'].includes(p.section)).slice(0, 6)
    },
    {
      title: 'Commercial Work',
      description: 'Professional business and real estate photography',
      icon: Camera,
      projects: projects.filter(p => ['real-estate', 'corporate'].includes(p.section)).slice(0, 6)
    },
    {
      title: 'Videography',
      description: 'Cinematic films and video content',
      icon: Video,
      projects: projects.filter(p => p.mediaType === 'video' || p.mediaType === 'hybrid').slice(0, 6)
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Portfolio
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              A showcase of recent work spanning weddings, portraits, commercial photography, and videography. 
              Each project tells a unique story through professional artistry and technical excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Sections */}
      {portfolioSections.map((section, sectionIndex) => (
        <section key={section.title} className={`py-20 ${sectionIndex % 2 === 1 ? 'bg-muted/50' : ''}`}>
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-12 animate-fade-in-up">
              <div className="flex items-center justify-center gap-3 mb-4">
                <section.icon className="h-8 w-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold">{section.title}</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {section.description}
              </p>
            </div>

            {/* Projects Grid */}
            {section.projects.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.projects.map((project, index) => (
                    <div 
                      key={project.id}
                      className={`animate-fade-in animate-delay-${Math.min((index + 1) * 100, 500)}`}
                    >
                      <ProjectCard 
                        project={project} 
                        priority={sectionIndex === 0 && index < 3}
                        disableAnimation={true}
                      />
                    </div>
                  ))}
                </div>

                {/* View More Button */}
                <div className="text-center mt-8 animate-fade-in-up animate-delay-400">
                  <Button variant="outline" size="lg" asChild>
                    <Link href={`/services/${section.title.toLowerCase().split(' ')[0]}`}>
                      View More {section.title}
                    </Link>
                  </Button>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <Card className="max-w-md mx-auto">
                  <CardContent className="p-8">
                    <section.icon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Coming Soon</h3>
                    <p className="text-muted-foreground">
                      New {section.title.toLowerCase()} projects will be added here soon.
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* All Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recent Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A mix of recent projects showcasing the full range of our photography and videography services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.slice(0, 12).map((project, index) => (
              <div 
                key={project.id}
                className={`animate-fade-in animate-delay-${Math.min((index + 1) * 50, 500)}`}
              >
                <ProjectCard 
                  project={project} 
                  priority={index < 4}
                  disableAnimation={true}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Create Your Own Story?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let&apos;s work together to capture your special moments with the same care and artistry you see here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Start Your Project
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">
                  Learn More About Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}