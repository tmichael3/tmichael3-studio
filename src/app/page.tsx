"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Home() {
  const [hoveredButton, setHoveredButton] = useState<number | null>(null)

  const services = [
    {
      title: "Portrait",
      description: "Explore Personal Photography",
      href: "/services/portrait",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1200&fit=crop&crop=face"
    },
    {
      title: "Corporate",
      description: "Discover Corporate Solutions",
      href: "/services/commercial",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1200&fit=crop&crop=face"
    },
    {
      title: "Wedding",
      description: "Capture Your Special Day",
      href: "/services/wedding",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1200&fit=crop&crop=center"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section - Three Service Panels */}
      <section>
        <div className="md:container md:mx-auto md:px-4">
          <div className="h-[60vh] md:h-[55vh] lg:h-[65vh] flex flex-col md:flex-row overflow-hidden">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="relative flex-1 group cursor-pointer overflow-hidden"
              >
                {/* Background Image */}
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${service.image})`
                  }}
                  animate={{
                    scale: hoveredButton === index ? 1.1 : 1
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                
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

      {/* Photography & Videography Description Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Photography with a Personal Touch
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Offering professional personal, corporate, and wedding photography services tailored to your unique needs. 
              We blend technical expertise with artistic vision to create timeless images that tell your story.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}