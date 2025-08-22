"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useState, useEffect, useMemo } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { reviews, type Review } from '@/data/reviews'
import { ProjectCard } from '@/components/ProjectCard'
import { ProjectCardClientWrapper } from '@/components/ProjectCardClientWrapper'
import { CustomLightbox } from '@/components/CustomLightbox'
import { projects, type Project } from '@/lib/projects'

export default function Home() {
  const [hoveredButton, setHoveredButton] = useState<number | null>(null)
  const [currentReview, setCurrentReview] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Get 8 recent projects for Recent Work section (deterministic)
  const recentProjects = useMemo(() => {
    // Use a deterministic approach - take every nth project to get variety
    const step = Math.max(1, Math.floor(projects.length / 8))
    const selected: Project[] = []
    
    for (let i = 0; i < projects.length && selected.length < 8; i += step) {
      selected.push(projects[i])
    }
    
    // If we need more projects, fill from the beginning
    while (selected.length < 8 && selected.length < projects.length) {
      const remaining = projects.filter(p => !selected.find(s => s.id === p.id))
      if (remaining.length > 0) {
        selected.push(remaining[0])
      } else {
        break
      }
    }
    
    return selected
  }, [])

  const handleProjectClick = (project: Project) => {
    setCurrentProject(project)
    setCurrentImageIndex(0)
    setLightboxOpen(true)
  }

  const services = [
    {
      title: "Portrait",
      description: "Explore Personal Photography",
      href: "/services/portrait",
      image: "/_Projects/02_Lauren_SP/Lauren+Senior-70.webp"
    },
    {
      title: "Commercial",
      description: "Discover Corporate Solutions",
      href: "/services/commercial",
      image: "/_Projects/06_Alfred_Real_Estate/234Alfred-16.webp"
    },
    {
      title: "Wedding",
      description: "Capture Your Special Day",
      href: "/services/wedding",
      image: "/_Projects/04_Unknown_Wedding/IMG_5586.webp"
    },
    {
      title: "Videography",
      description: "Cinematic Video Production",
      href: "/services/videography",
      image: "/placeholders/video-placeholder.svg"
    }
  ]

  // Auto-scroll functionality - 5 seconds display time
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Service Panels */}
      <section>
        <div className="md:container md:mx-auto md:px-4">
          <div className="h-[100vh] md:h-[55vh] lg:h-[65vh] flex flex-col md:flex-row overflow-hidden">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="relative flex-1 group cursor-pointer overflow-hidden"
              >
                {/* Background Image */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    scale: hoveredButton === index ? 1.1 : 1
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Image
                    src={service.image}
                    alt={`${service.title} photography service`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={index === 0}
                  />
                </motion.div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-end items-center p-8 md:p-12 text-white text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-4"
                  >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                      {service.title}
                    </h2>
                    <Button
                      asChild
                      variant="outline"
                      className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 w-fit h-12 lg:h-12"
                      onMouseEnter={() => setHoveredButton(index)}
                      onMouseLeave={() => setHoveredButton(null)}
                    >
                      <Link href={service.href}>
                        {service.description}
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Container */}
      <div>
        {/* Photography & Videography Description Section */}
        <section className="pt-12 md:pt-16 mb-12 md:mb-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-4xl mx-auto text-center space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Photography & Videography with a Personal Touch
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Offering professional personal, corporate, and wedding photography services tailored to your unique needs. 
                We blend technical expertise with artistic vision to create timeless images that tell your story.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="mb-12 md:mb-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional photography and videography services tailored to your needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {[
                {
                  icon: () => (
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: "Portrait Photography",
                  description: "Individual, family, and senior portraits",
                  price: "Starting at $200",
                  href: "/services/portrait"
                },
                {
                  icon: () => (
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  ),
                  title: "Wedding Photography",
                  description: "Complete wedding day coverage",
                  price: "Starting at $1,500",
                  href: "/services/wedding"
                },
                {
                  icon: () => (
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: "Commercial Photography",
                  description: "Business and real estate photography",
                  price: "Starting at $300",
                  href: "/services/commercial"
                },
                {
                  icon: () => (
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: "Videography",
                  description: "Cinematic video production and films",
                  price: "Starting at $800",
                  href: "/services/videography"
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-full text-center p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-full text-primary">
                        <service.icon />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                    <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90" asChild>
                      <Link href={service.href}>Learn More</Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Work Section */}
        <section className="mb-12 md:mb-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Recent Work
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                Discover our latest photography and videography projects showcasing our diverse range of work across all specialties.
              </p>
              
              {/* Recent Projects Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {recentProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <ProjectCardClientWrapper 
                      project={project} 
                      onClick={() => handleProjectClick(project)}
                    >
                      <ProjectCard project={project} />
                    </ProjectCardClientWrapper>
                  </motion.div>
                ))}
              </motion.div>

              {/* View Portfolio Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8"
              >
                <Button asChild size="lg" className="px-8 py-3">
                  <Link href="/portfolio">
                    View Full Portfolio
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Client Reviews Section */}
        <section className="mb-12 md:mb-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
                What Our Clients Say
              </h2>
              
              {/* Review Content */}
              <div className="p-8 md:p-12">
                <div className="flex items-center justify-between">
                  {/* Previous Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevReview}
                    className="shrink-0 hover:bg-accent"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>

                  {/* Review Content */}
                  <div className="flex-1 mx-8">
                    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
                      {/* Client Photo - Top on mobile, left on desktop */}
                      <div className="shrink-0 order-1 md:order-1">
                        <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-border">
                          <Image
                            src={reviews[currentReview].image}
                            alt={`${reviews[currentReview].name} profile photo`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 96px, 128px"
                          />
                        </div>
                      </div>

                      {/* Review Text - Below photo on mobile, right on desktop */}
                      <div className="flex-1 text-center md:text-left order-2 md:order-2">
                        {/* Review Text */}
                        <blockquote className="text-lg md:text-xl text-foreground mb-4 leading-relaxed">
                          &ldquo;{reviews[currentReview].text}&rdquo;
                        </blockquote>
                        
                        {/* Client Name and Service */}
                        <div className="space-y-1">
                          <p className="font-semibold text-foreground">
                            {reviews[currentReview].name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {reviews[currentReview].service} Photography
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Next Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextReview}
                    className="shrink-0 hover:bg-accent"
                    aria-label="Next review"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>

                {/* Review Indicators */}
                <div className="flex justify-center mt-8 gap-2">
                  {reviews.map((review: Review, index: number) => (
                    <button
                      key={review.id}
                      onClick={() => setCurrentReview(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentReview ? 'bg-primary' : 'bg-muted-foreground/30'
                      }`}
                      aria-label={`Go to review ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

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
