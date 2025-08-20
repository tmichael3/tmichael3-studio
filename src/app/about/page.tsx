"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Camera, Video } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { aboutInfo } from '@/data/constants'
import { PageHeroSection } from '@/components/page-hero-section'

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
      {/* Hero Section */}
      <PageHeroSection
        title={`Hi, I'm ${aboutInfo.name}`}
        description={aboutInfo.bio}
        buttonText="Let's Work Together"
        customImages={[
          "/About_Photos/TJ-Racetrack.webp",
          "/About_Photos/TJ-Jenn-Charity.webp",
          "/About_Photos/19685554491_bec2abece6_b.jpg",
          "/About_Photos/IMG-20220419-WA0005.webp"
        ]}
      />

      {/* About Story Section */}
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
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="relative overflow-hidden rounded-lg bg-muted">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="/About_Photos/IMG-20220419-WA0005.webp"
                        alt="TJ Michael portrait"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-left"
                >
                  <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      My journey into photography began with a simple fascination for capturing moments that tell stories. 
                      What started as a hobby quickly evolved into a passion, and eventually became my life&apos;s work. 
                      I believe that every photograph should evoke emotion and preserve memories that will be treasured for generations.
                    </p>
                    <p>
                      Specializing in portraits, weddings, and commercial photography, I&apos;ve had the privilege of working 
                      with amazing clients who trust me to document their most important moments. From intimate family 
                      sessions to grand wedding celebrations, each project brings its own unique challenges and rewards.
                    </p>
                    <p>
                      When I&apos;m not behind the camera, you&apos;ll find me exploring new locations, experimenting with lighting 
                      techniques, or planning the next creative project. I&apos;m constantly learning and evolving as an artist, 
                      always striving to bring fresh perspectives to my work.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
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
