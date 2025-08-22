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
import { sectionLabels, portraitFilterCategories } from '@/data/constants'
import { Heart, Users, Camera } from 'lucide-react'

export default function PortraitPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Get portrait-related projects using memoization
  const portraitProjects = useMemo(() => {
    return projects.filter(project => 
      project.category === 'photography' && 
      ['family-portraits', 'senior-yearbook', 'corporate-headshots', 'pet-photos', 'personal-events'].includes(project.section)
    )
  }, [])

  // Define filter categories for portrait projects
  const filterCategories = useMemo(() => [
    {
      key: 'all',
      label: portraitFilterCategories.all,
      description: 'Explore our complete portrait portfolio showcasing various styles and sessions.'
    },
    {
      key: 'family-portraits',
      label: portraitFilterCategories['family-portraits'],
      filter: (project: Project) => project.section === 'family-portraits',
      description: 'Beautiful family portraits capturing love and connection in natural settings.'
    },
    {
      key: 'senior-yearbook',
      label: portraitFilterCategories['senior-yearbook'],
      filter: (project: Project) => project.section === 'senior-yearbook',
      description: 'Professional senior portraits celebrating this important milestone with style.'
    },
    {
      key: 'pet-photos',
      label: portraitFilterCategories['pet-photos'],
      filter: (project: Project) => project.section === 'pet-photos',
      description: 'Adorable pet photography sessions capturing your furry family members.'
    },
    {
      key: 'personal-events',
      label: portraitFilterCategories['personal-events'],
      filter: (project: Project) => project.section === 'personal-events',
      description: 'Personal milestone events and celebrations captured with artistic vision.'
    },
    {
      key: 'corporate-headshots',
      label: portraitFilterCategories['corporate-headshots'],
      filter: (project: Project) => project.section === 'corporate-headshots',
      description: 'Professional headshots and portrait sessions for business and personal branding.'
    }
  ], [])

  const handleProjectClick = (project: Project) => {
    setCurrentProject(project)
    setCurrentImageIndex(0)
    setLightboxOpen(true)
  }

  const services = [
    {
      icon: Heart,
      title: sectionLabels['family-portraits'],
      description: "Capture the love and connection between family members in beautiful, natural settings.",
      features: ["Multiple location options", "Group and individual shots", "Extended family sessions", "Pet-friendly sessions"]
    },
    {
      icon: Camera,
      title: sectionLabels['senior-yearbook'],
      description: "Celebrate this milestone with professional senior portraits that showcase personality and style.",
      features: ["Multiple outfit changes", "Various locations", "Individual styling consultation", "Digital gallery included"]
    },
    {
      icon: Users,
      title: sectionLabels['corporate-headshots'],
      description: "Professional headshots for business professionals and corporate teams.",
      features: ["Studio or on-location", "Consistent lighting", "Multiple expressions", "High-resolution files"]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageHeroSection
        title="Portrait Photography"
        description="Professional portrait sessions capturing personality, style, and authentic moments with artistic composition and expert lighting."
        pricing="Starting at $200 per session"
        buttonText="Book Your Session"
        filterCategories={['family-portraits', 'senior-yearbook', 'corporate-headshots', 'pet-photos', 'personal-events']}
      />

      {/* Services Section */}
      <section className="pt-12 md:pt-16 mb-12 md:mb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Portrait Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized portrait sessions tailored to capture your unique story and personality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
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

      {/* Portrait Examples with Category Filter */}
      <section className="mb-12 md:mb-16">
        <div className="container mx-auto px-4">
          <CategoryFilter
            enablePagination={true}
            projects={portraitProjects}
            categories={filterCategories}
            onProjectClick={handleProjectClick}
            title="Portrait Examples"
            description="Browse our recent portrait work across different styles and sessions to see our approach and quality."
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
              Ready to Create Beautiful Portraits?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let&apos;s work together to capture the moments and memories that matter most to you and your loved ones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Book Your Session
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  View Pricing
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
