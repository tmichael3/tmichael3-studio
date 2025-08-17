"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/project-card'
import { useState } from 'react'
import { CustomLightbox } from '@/components/custom-lightbox'
import { type Project } from '@/data/projects'
import { Building2, Camera, Palette, Zap, Clock, Users } from 'lucide-react'

export default function CommercialPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Filter projects for commercial photography
  const commercialProjects = projects.filter(project => 
    project.category === 'photography' && 
    ['real-estate', 'commercial', 'corporate'].includes(project.section)
  )

  const handleProjectClick = (project: Project) => {
    setCurrentProject(project)
    setCurrentImageIndex(0)
    setLightboxOpen(true)
  }

  const retainerPackages = [
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
      buttonText: "Get Started",
      popular: false
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
      buttonText: "Most Popular",
      popular: true
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
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Commercial Photography
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
              Professional commercial photography services that elevate your brand and drive business results through compelling visual storytelling.
            </p>
            <Button size="lg" className="text-lg px-8 py-3">
              Discuss Your Project
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Retainer Packages Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Monthly Retainer Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Consistent, high-quality commercial photography to keep your brand fresh and engaging month after month.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl md:text-4xl font-bold text-foreground">{pkg.price}</span>
                      <span className="text-muted-foreground">{pkg.period}</span>
                    </div>
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

      {/* Portfolio Gallery */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Recent Commercial Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of recent commercial photography projects across various industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {commercialProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard 
                  project={project} 
                  priority={index < 4}
                  onClick={handleProjectClick}
                />
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
