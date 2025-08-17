"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CategoryFilter } from '@/components/category-filter'
import { CustomProjectsHero } from '@/components/custom-projects-hero'
import { useState, useMemo } from 'react'
import { CustomLightbox } from '@/components/custom-lightbox'
import { type Project } from '@/data/projects'
import { Heart, Star } from 'lucide-react'
import { useProjects } from '@/components/projects-provider'
import { weddingFilterCategories } from '@/data/constants'

export default function WeddingPage() {
  const { projects } = useProjects()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Filter projects for wedding photography and videography
  const weddingProjects = useMemo(() => 
    projects.filter(project => 
      project.category === 'weddings' || 
      (project.category === 'photography' && project.section === 'wedding-photo-video')
    ), [projects]
  )

  // Define filter categories for wedding projects
  const filterCategories = useMemo(() => [
    {
      key: 'all',
      label: weddingFilterCategories.all,
      description: 'Explore our complete wedding portfolio showcasing both photography and videography work.'
    },
    {
      key: 'photography',
      label: weddingFilterCategories.photography,
      filter: (project: Project) => project.mediaType === 'photo' || project.mediaType === 'hybrid',
      description: 'Beautiful wedding photography capturing every precious moment and emotion of your special day.'
    },
    {
      key: 'videography', 
      label: weddingFilterCategories.videography,
      filter: (project: Project) => project.mediaType === 'video' || project.mediaType === 'hybrid',
      description: 'Cinematic wedding films that tell the story of your love with emotion and artistry.'
    }
  ], [])

  const handleProjectClick = (project: Project) => {
    setCurrentProject(project)
    setCurrentImageIndex(0)
    setLightboxOpen(true)
  }

  const weddingPackages = [
    {
      title: "Essential",
      price: "$2,500",
      description: "Perfect for intimate ceremonies and smaller celebrations.",
      features: [
        "6 hours of wedding day coverage",
        "200+ edited high-resolution photos",
        "Online gallery for 1 year",
        "Print release included",
        "Basic timeline consultation",
        "Digital delivery within 4 weeks"
      ],
      buttonText: "Choose Essential",
      popular: false
    },
    {
      title: "Premium",
      price: "$4,500",
      description: "Complete wedding documentation with photo and video coverage.",
      features: [
        "8 hours of wedding day coverage",
        "400+ edited high-resolution photos",
        "3-4 minute highlight video",
        "Online gallery for 2 years",
        "Print release & USB drive",
        "Engagement session included",
        "Detailed timeline planning",
        "Digital delivery within 3 weeks"
      ],
      buttonText: "Most Popular Choice",
      popular: true
    },
    {
      title: "Luxury",
      price: "$7,500",
      description: "Premium experience with full-day coverage and cinematic video.",
      features: [
        "12 hours of wedding day coverage",
        "600+ edited high-resolution photos",
        "8-10 minute cinematic film",
        "Ceremony & reception full videos",
        "Premium online gallery for 3 years",
        "Engagement & bridal sessions",
        "Second photographer included",
        "Same-day preview gallery",
        "Custom wedding album",
        "Digital delivery within 2 weeks"
      ],
      buttonText: "Book Luxury",
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <CustomProjectsHero serviceKey="wedding" />

      {/* Wedding Packages Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Wedding Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive wedding photography and videography packages tailored to your celebration, from intimate ceremonies to grand celebrations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {weddingPackages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                className="relative"
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="h-3 w-3" />
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
                    >
                      {pkg.buttonText} {pkg.popular ? '♥' : '→'}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Moved above portfolio */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Book Your Wedding?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let&apos;s create beautiful memories together. Contact us to discuss your wedding photography needs and find the perfect package for your special day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3">
                <Heart className="w-4 h-4 mr-2" />
                Book Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                View Full Gallery
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Gallery with Category Filter */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <CategoryFilter
            projects={weddingProjects}
            categories={filterCategories}
            onProjectClick={handleProjectClick}
            title="Wedding Examples"
            description="Explore our recent wedding work across photography and videography to see our style and approach."
          />
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
