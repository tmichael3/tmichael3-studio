"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Camera, Video, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { aboutInfo } from '@/data/constants'

export default function AboutPage() {
  const aboutImages = [
    {
      src: "/About_Photos/TJ-Racetrack.webp",
      alt: "TJ Michael at racetrack"
    },
    {
      src: "/About_Photos/TJ-Jenn-Charity.webp", 
      alt: "TJ and Jenn at charity event"
    },
    {
      src: "/About_Photos/IMG-20220419-WA0005.webp",
      alt: "TJ Michael portrait"
    },
    {
      src: "/About_Photos/19685554491_bec2abece6_b.jpg",
      alt: "TJ Michael professional"
    }
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % aboutImages.length)
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + aboutImages.length) % aboutImages.length)
  }

  const experience = [
    {
      title: "Professional Photography",
      description: "Specializing in portraits, weddings, and commercial photography with a focus on capturing authentic moments and emotions.",
      years: aboutInfo.experience,
      icon: Camera
    },
    {
      title: "Video Production",
      description: "Creating compelling visual stories through cinematography and video editing for various clients and projects.",
      years: aboutInfo.experience,
      icon: Video
    },
    {
      title: "Commercial Work",
      description: "Working with businesses to create professional imagery for marketing, real estate, and corporate needs.",
      years: "2021 - Present"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Custom Hero Section with Static Background and Headshot */}
      <section>
        <div className="md:container md:mx-auto md:px-4">
          <div className="h-[60vh] min-h-[400px] sm:h-[55vh] md:h-[55vh] lg:h-[55vh] flex overflow-hidden">
            <div className="relative flex-1 group overflow-hidden">
              {/* Static Background Image */}
              <div className="absolute inset-0 z-0">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('/About_Photos/19685554491_bec2abece6_b.jpg')`
                  }}
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />
              
              {/* Hero Content - Split Layout */}
              <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 md:p-12 text-white">
                <div className="max-w-6xl w-full">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Left Side - Headshot */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      className="flex justify-center lg:justify-start"
                    >
                      <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/20">
                        <Image
                          src="/About_Photos/headshot-small.jpg"
                          alt="TJ Michael headshot"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 192px, 256px"
                          priority
                        />
                      </div>
                    </motion.div>

                    {/* Right Side - Text Content */}
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-center lg:text-left space-y-6"
                    >
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                        Hi, I&apos;m {aboutInfo.name}
                      </h1>
                      <p className="text-xl md:text-2xl leading-relaxed">
                        {aboutInfo.bio}
                      </p>
                      <Button
                        size="lg"
                        variant="outline"
                        className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 text-lg px-8 py-3"
                        asChild
                      >
                        <Link href="/contact">Let&apos;s Work Together</Link>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Moved Above My Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Years of dedicated practice and continuous learning have shaped my approach to photography and videography.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="text-sm text-primary font-medium mb-2">{exp.years}</div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {exp.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced My Story Section with Image Carousel */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">My Story</h2>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Enhanced Image Carousel */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Main Image Display */}
                  <div className="relative overflow-hidden rounded-lg bg-background shadow-lg">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={aboutImages[currentImageIndex].src}
                        alt={aboutImages[currentImageIndex].alt}
                        fill
                        className="object-cover transition-all duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* Gradient overlay for better text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    
                    {/* Navigation Arrows */}
                    <button
                      onClick={previousImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                  
                  {/* Image Indicators */}
                  <div className="flex justify-center mt-4 gap-2">
                    {aboutImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </motion.div>
                
                {/* Right Side - Enhanced Story Text */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-left"
                >
                  <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <div className="border-l-4 border-primary pl-6">
                      <p className="text-foreground font-medium mb-2">The Beginning</p>
                      <p>
                        My journey into photography began with a simple fascination for capturing moments that tell stories. 
                        What started as a hobby quickly evolved into a passion, and eventually became my life&apos;s work. 
                        I believe that every photograph should evoke emotion and preserve memories that will be treasured for generations.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-primary pl-6">
                      <p className="text-foreground font-medium mb-2">The Craft</p>
                      <p>
                        Specializing in portraits, weddings, and commercial photography, I&apos;ve had the privilege of working 
                        with amazing clients who trust me to document their most important moments. From intimate family 
                        sessions to grand wedding celebrations, each project brings its own unique challenges and rewards.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-primary pl-6">
                      <p className="text-foreground font-medium mb-2">The Vision</p>
                      <p>
                        When I&apos;m not behind the camera, you&apos;ll find me exploring new locations, experimenting with lighting 
                        techniques, or planning the next creative project. I&apos;m constantly learning and evolving as an artist, 
                        always striving to bring fresh perspectives to my work.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let&apos;s work together to capture your special moments and bring your vision to life.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
