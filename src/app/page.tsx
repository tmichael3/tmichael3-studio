"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { reviews, type Review } from '@/data/reviews'

export default function Home() {
  const [hoveredButton, setHoveredButton] = useState<number | null>(null)
  const [currentReview, setCurrentReview] = useState(0)

  const services = [
    {
      title: "Portrait",
      description: "Explore Personal Photography",
      href: "/services/portrait",
      image: "/_Projects/02_Lauren_SP/Lauren+Senior-70.webp"
    },
    {
      title: "Corporate",
      description: "Discover Corporate Solutions",
      href: "/services/commercial",
      image: "/_Projects/06_Alfred_Real_Estate/234Alfred-16.webp"
    },
    {
      title: "Wedding",
      description: "Capture Your Special Day",
      href: "/services/wedding",
      image: "/_Projects/04_Unknown_Wedding/IMG_5586.webp"
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
      {/* Hero Section - Three Service Panels */}
      <section>
        <div className="md:container md:mx-auto md:px-4">
          <div className="h-[65vh] md:h-[55vh] lg:h-[65vh] flex flex-col md:flex-row overflow-hidden">
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
                      className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 w-fit"
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

      {/* Content Container with Flexbox */}
      <div className="flex flex-col py-16 md:py-24 gap-16 md:gap-24">
        {/* Photography & Videography Description Section */}
        <section>
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

        {/* Client Reviews Section */}
        <section>
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
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentReview}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="flex flex-col items-center gap-8 md:flex-row md:gap-12"
                      >
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
                      </motion.div>
                    </AnimatePresence>
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
    </div>
  )
}