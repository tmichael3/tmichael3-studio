"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CategoryFilter } from '@/components/CategoryFilter'
import { PageHeroSection } from '@/components/PageHeroSection'
import { projects, type Project } from '@/lib/projects'
import { useState, useMemo } from 'react'
import { CustomLightbox } from '@/components/CustomLightbox'
import { Video, Play, Camera } from 'lucide-react'

export default function VideographyPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Filter projects for videography only
  const videographyProjects = useMemo(() => 
    projects.filter((project: Project) => 
      project.mediaType === 'video' || project.mediaType === 'hybrid'
    ), []
  )

  // Define filter categories for videography projects
  const filterCategories = useMemo(() => [
    {
      key: 'all',
      label: 'All Videos',
      description: 'Explore our complete videography portfolio showcasing all types of video production work.'
    },
    {
      key: 'wedding-videos',
      label: 'Wedding Films',
      filter: (project: Project) => project.category === 'weddings' && (project.mediaType === 'video' || project.mediaType === 'hybrid'),
      description: 'Cinematic wedding films capturing the emotion and beauty of your special day.'
    },
    {
      key: 'commercial-videos',
      label: 'Commercial Videos',
      filter: (project: Project) => project.section === 'branded-marketing-video' || project.section === 'training-videos',
      description: 'Professional video content for businesses, marketing, and training purposes.'
    },
    {
      key: 'event-videos',
      label: 'Event Videography',
      filter: (project: Project) => project.section === 'corporate-events' || project.section === 'personal-events',
      description: 'Dynamic event coverage capturing the energy and highlights of your occasion.'
    }
  ], [])

  const handleProjectClick = (project: Project) => {
    setCurrentProject(project)
    setCurrentImageIndex(0)
    setLightboxOpen(true)
  }

  const videographyPackages = [
    {
      title: "Essential Video",
      price: "$800",
      description: "Perfect for small events and basic video needs.",
      features: [
        "Up to 3 hours of filming",
        "Basic edited highlight reel (2-3 minutes)",
        "1 round of revisions",
        "Digital delivery in HD",
        "Standard turnaround (2-3 weeks)",
        "Basic color correction"
      ],
      buttonText: "Choose Essential",
      popular: false
    },
    {
      title: "Professional Video",
      price: "$1,800",
      description: "Comprehensive video production with cinematic quality.",
      features: [
        "Up to 6 hours of filming",
        "Cinematic highlight reel (4-6 minutes)",
        "Raw footage provided",
        "2 rounds of revisions",
        "4K delivery available",
        "Advanced color grading",
        "Custom music selection",
        "Fast turnaround (1-2 weeks)"
      ],
      buttonText: "Most Popular Choice",
      popular: true
    },
    {
      title: "Premium Production",
      price: "$3,500",
      description: "Full-service video production with multiple deliverables.",
      features: [
        "Full day filming coverage",
        "Multiple video deliverables",
        "Extended highlight reel (8-12 minutes)",
        "Social media optimized clips",
        "Drone footage included",
        "Multi-camera setup",
        "Professional audio recording",
        "Rush delivery (3-5 days)",
        "Custom graphics/titles"
      ],
      buttonText: "Book Premium",
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageHeroSection
        title="Videography & Film Production"
        description="Professional videography services creating cinematic stories that capture emotion, movement, and unforgettable moments."
        pricing="Video packages starting at $800"
        buttonText="View Packages"
        filterCategories={['video-production', 'weddings']}
      />

      {/* Video Services Overview - Moved Above Examples */}
      <section className="pt-12 md:pt-16 mb-12 md:mb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Video Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive videography services covering all your video production needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Video,
                title: "Wedding Videography",
                description: "Cinematic wedding films and highlight reels",
                features: ["Ceremony coverage", "Reception highlights", "Drone footage", "Same-day edits"]
              },
              {
                icon: Camera,
                title: "Commercial Videos",
                description: "Professional business and marketing content",
                features: ["Brand videos", "Product showcases", "Training videos", "Social media content"]
              },
              {
                icon: Play,
                title: "Event Videography",
                description: "Dynamic coverage of corporate and personal events",
                features: ["Live streaming", "Multi-camera setup", "Event highlights", "Interviews"]
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-full text-primary">
                        <service.icon className="h-8 w-8" />
                      </div>
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center justify-center">
                          <div className="w-1 h-1 bg-primary rounded-full mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Packages Section */}
      <section className="mb-12 md:mb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Video Production Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional videography packages tailored to your project needs, from simple highlight reels to comprehensive film production.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {videographyPackages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                viewport={{ once: true }}
                className="relative"
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Play className="h-3 w-3" />
                      Most Popular
                    </div>
                  </div>
                )}
                <Card className={`h-full ${pkg.popular ? 'border-primary border-2 shadow-lg' : ''}`}>
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                    <div className="text-3xl md:text-4xl font-bold text-foreground">{pkg.price}</div>
                    <CardDescription className="text-base">
                      {pkg.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col h-full">
                    <ul className="space-y-3 flex-grow">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full mt-6 ${pkg.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                      variant={pkg.popular ? 'default' : 'outline'}
                      asChild
                    >
                      <Link href="/contact">
                        {pkg.buttonText} {pkg.popular ? '🎬' : '→'}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Examples - Below Services */}
      <section className="mb-12 md:mb-16">
        <div className="container mx-auto px-4">
          <CategoryFilter
            enablePagination={true}
            projects={videographyProjects}
            categories={filterCategories}
            onProjectClick={handleProjectClick}
            title="Video Examples"
            description="Explore our recent videography work showcasing our cinematic style and technical expertise across different types of productions."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Create Your Video Story?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let&apos;s bring your vision to life through compelling videography that captures every important moment and emotion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  <Video className="w-4 h-4 mr-2" />
                  Start Your Project
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/portfolio">
                  View Video Portfolio
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Custom Lightbox */}
      <CustomLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        project={currentProject}
        initialIndex={currentImageIndex}
      />
    </div>
  )
}
