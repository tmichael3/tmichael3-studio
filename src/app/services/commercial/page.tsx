"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CategoryFilter } from '@/components/category-filter'
import { CustomProjectsHero } from '@/components/custom-projects-hero'
import { useProjects } from '@/components/projects-provider'
import { useState, useMemo } from 'react'
import { CustomLightbox } from '@/components/custom-lightbox'
import { type Project } from '@/data/projects'
import { commercialFilterCategories } from '@/data/constants'
import { Building2, Camera, Palette, Zap, Clock, Users } from 'lucide-react'

export default function CommercialPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const { projects } = useProjects()

  // Get commercial-related projects using memoization - include both photography and video production
  const commercialProjects = useMemo(() => {
    return projects.filter(project => 
      (project.category === 'photography' && 
       ['real-estate', 'commercial', 'corporate-headshots', 'branded-photoshoots', 'corporate-events'].includes(project.section)) ||
      (project.category === 'video-production' && 
       ['branded-marketing-video', 'training-videos', 'corporate-events'].includes(project.section))
    )
  }, [projects])

  // Define filter categories for commercial projects
  const filterCategories = useMemo(() => [
    {
      key: 'all',
      label: commercialFilterCategories.all,
      description: 'Explore our complete commercial portfolio showcasing business photography and videography services across various industries.'
    },
    {
      key: 'corporate-headshots',
      label: commercialFilterCategories['corporate-headshots'],
      filter: (project: Project) => project.section === 'corporate-headshots',
      description: 'Professional headshots for executives, teams, and corporate branding.'
    },
    {
      key: 'branded-photoshoots',
      label: commercialFilterCategories['branded-photoshoots'],
      filter: (project: Project) => project.section === 'branded-photoshoots',
      description: 'Creative brand photography that tells your company story and showcases your products.'
    },
    {
      key: 'branded-marketing-video',
      label: commercialFilterCategories['branded-marketing-video'],
      filter: (project: Project) => project.section === 'branded-marketing-video' || project.mediaType === 'video',
      description: 'Professional video content for marketing, branding, and promotional campaigns.'
    },
    {
      key: 'training-videos',
      label: commercialFilterCategories['training-videos'],
      filter: (project: Project) => project.section === 'training-videos',
      description: 'Educational and training video content for internal and external use.'
    },
    {
      key: 'corporate-events',
      label: commercialFilterCategories['corporate-events'],
      filter: (project: Project) => project.section === 'corporate-events',
      description: 'Event photography and videography for conferences, meetings, and corporate gatherings.'
    },
    {
      key: 'real-estate',
      label: commercialFilterCategories['real-estate'],
      filter: (project: Project) => project.section === 'real-estate',
      description: 'Professional real estate photography showcasing properties at their best.'
    },
    {
      key: 'commercial',
      label: commercialFilterCategories['commercial'],
      filter: (project: Project) => project.section === 'commercial',
      description: 'Commercial photography for marketing, advertising, and business promotion.'
    }
  ], [])

  const handleProjectClick = (project: Project) => {
    setCurrentProject(project)
    setCurrentImageIndex(0)
    setLightboxOpen(true)
  }

  const retainerPackages = [
    {
      title: "Starter",
      price: "$1,500",
      period: "/month",
      description: "Perfect for small businesses just getting started with professional photography.",
      features: [
        "2 photography sessions per month",
        "15 edited high-resolution images",
        "Basic brand consultation",
        "Social media sized images",
        "72-hour turnaround",
        "Email support"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      title: "Essential",
      price: "$2,500",
      period: "/month",
      description: "Perfect for small businesses and startups looking to establish their visual presence.",
      features: [
        "4 photography sessions per month",
        "20 edited high-resolution images",
        "Basic brand consultation",
        "Social media sized images",
        "48-hour turnaround",
        "Email support"
      ],
      buttonText: "Most Popular",
      popular: true
    },
    {
      title: "Professional",
      price: "$4,500",
      period: "/month",
      description: "Comprehensive visual content solution for growing businesses and established brands.",
      features: [
        "8 photography sessions per month",
        "50 edited high-resolution images",
        "Advanced brand consultation",
        "Social media & web optimized images",
        "24-hour turnaround",
        "Priority phone & email support",
        "Monthly strategy review",
        "Custom editing styles"
      ],
      buttonText: "Scale Your Brand",
      popular: false
    }
  ]

  const additionalServices = [
    {
      icon: Building2,
      title: "Real Estate Photography",
      description: "Professional property photography that showcases homes and commercial spaces at their best."
    },
    {
      icon: Camera,
      title: "Product Photography",
      description: "High-quality product images for e-commerce, catalogs, and marketing materials."
    },
    {
      icon: Palette,
      title: "Brand Photography",
      description: "Custom brand imagery that tells your company's story and connects with your audience."
    },
    {
      icon: Users,
      title: "Corporate Headshots",
      description: "Professional headshots for teams, executives, and business professionals."
    },
    {
      icon: Zap,
      title: "Event Photography",
      description: "Coverage of corporate events, conferences, and business gatherings."
    },
    {
      icon: Clock,
      title: "Same-Day Editing",
      description: "Rush editing services for time-sensitive projects and urgent deliverables."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <CustomProjectsHero serviceKey="commercial" />

      {/* Retainer Packages Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Monthly Retainer Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Consistent, high-quality commercial photography to keep your brand fresh and engaging month after month.
            </p>
          </motion.div>

          {/* Updated grid to show 3 columns on desktop, matching wedding packages */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {retainerPackages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                className="relative"
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                <Card className={`h-full ${pkg.popular ? 'border-primary border-2 shadow-lg' : ''}`}>
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                    <div className="text-3xl md:text-4xl font-bold text-foreground">{pkg.price}<span className="text-muted-foreground text-lg">{pkg.period}</span></div>
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
                      {pkg.buttonText} →
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Examples with Category Filter */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <CategoryFilter
            projects={commercialProjects}
            categories={filterCategories}
            onProjectClick={handleProjectClick}
            title="Recent Commercial Work"
            description="A showcase of recent commercial photography and videography projects across various industries and business needs."
          />
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized commercial photography services to meet your specific business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + (index * 0.1) }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let&apos;s discuss how our commercial photography services can help your business stand out and connect with your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3">
                Start Your Project
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                View Our Work
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
