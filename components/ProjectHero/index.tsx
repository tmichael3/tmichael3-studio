"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { getHeroBackgroundImages } from '@/lib/projects'
import { useState, useEffect } from 'react'
import { type ServicePageHeroData } from '@/data/site-settings'
import { siteSettings } from '@/data/site-settings'

interface CustomProjectsHeroProps {
  serviceKey: 'portrait' | 'wedding' | 'commercial' | 'portfolio'
  heroData?: ServicePageHeroData // Optional override
}

export function CustomProjectsHero({ serviceKey, heroData }: CustomProjectsHeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Use provided heroData or get from site settings
  const data = heroData || siteSettings.servicePageHeros[serviceKey]
  
  // Get background images from projects matching the filter categories
  const backgroundImages = getHeroBackgroundImages(data.filterCategories)

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
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-background/90 to-muted/90">
      {/* Animated Background Images */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.2, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
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
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {data.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
            {data.description}
          </p>
          <div className="mb-8">
            <p className="text-lg font-semibold text-primary">
              {data.pricing}
            </p>
          </div>
          <Button size="lg" className="text-lg px-8 py-3">
            {data.buttonText}
          </Button>
        </motion.div>
      </div>

      {/* Image indicator dots */}
      {backgroundImages.length > 1 && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex space-x-2">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-primary shadow-lg' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
