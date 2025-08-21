"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { projects } from '@/lib/projects'
import { useState, useEffect, useMemo } from 'react'
import { siteSettings } from '@/data/site-settings'

interface PageHeroSectionProps {
  title: string
  description: string
  pricing?: string
  buttonText: string
  filterCategories?: string[] // Categories to filter projects for background images
  customImages?: string[] // Optional: custom images instead of project filtering
}

export function PageHeroSection({ 
  title, 
  description, 
  pricing, 
  buttonText, 
  filterCategories = [], 
  customImages 
}: PageHeroSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Get background images from projects or use custom images
  const backgroundImages = useMemo(() => {
    if (customImages && customImages.length > 0) {
      return customImages.slice(0, 8) // Limit to 8 images
    }

    if (filterCategories.length === 0) {
      return ['/placeholders/photo-placeholder.svg']
    }

    const categoryProjects = projects.filter(project => 
      filterCategories.some(category => 
        project.section === category || project.category === category
      )
    )
    
    // Extract thumbnail URLs, filter out placeholder URLs for better visuals
    const images = categoryProjects
      .map(project => project.thumbnailUrl)
      .filter(url => url && !url.includes('placeholder'))
      .slice(0, 8) // Limit to 8 images
    
    // If no real images, fall back to a default placeholder
    return images.length > 0 ? images : ['/placeholders/photo-placeholder.svg']
  }, [filterCategories, customImages])

  // Auto-rotate background images
  useEffect(() => {
    if (backgroundImages.length <= 1) return

    const interval = setInterval(() => {
      setCurrentImageIndex(prev => 
        prev === backgroundImages.length - 1 ? 0 : prev + 1
      )
    }, siteSettings.animations.heroImageDisplayDuration)

    return () => clearInterval(interval)
  }, [backgroundImages.length])

  return (
    <section>
      <div className="md:container md:mx-auto md:px-4">
        <div className="h-[60vh] min-h-[400px] sm:h-[55vh] md:h-[55vh] lg:h-[55vh] flex overflow-hidden">
          <div className="relative flex-1 group overflow-hidden">
            {/* Animated Background Images */}
            <div className="absolute inset-0 z-0">
              <AnimatePresence>
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    duration: siteSettings.animations.heroImageTransitionDuration / 1000,
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('${backgroundImages[currentImageIndex]}')`
                  }}
                />
              </AnimatePresence>
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />
            
            {/* Hero Content - Centered */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 md:p-12 text-white text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6 max-w-4xl"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  {title}
                </h1>
                <p className="text-xl md:text-2xl leading-relaxed">
                  {description}
                </p>
                {pricing && (
                  <div className="mb-4">
                    <p className="text-lg font-semibold text-white/90">
                      {pricing}
                    </p>
                  </div>
                )}
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 text-lg px-8 py-3"
                >
                  {buttonText}
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
