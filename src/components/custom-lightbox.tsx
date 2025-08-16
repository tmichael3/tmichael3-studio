"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { type Project } from '@/data/projects'

interface CustomLightboxProps {
  isOpen: boolean
  onClose: () => void
  project: Project | null
  initialIndex?: number
}

export function CustomLightbox({ isOpen, onClose, project, initialIndex = 0 }: CustomLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !project?.mediaUrls) return
      
      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          setCurrentIndex(prev => prev > 0 ? prev - 1 : prev)
          break
        case 'ArrowRight':
          setCurrentIndex(prev => prev < (project.mediaUrls?.length || 1) - 1 ? prev + 1 : prev)
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, project])

  if (!isOpen || !project || !project.mediaUrls) return null

  const goToPrevious = () => {
    setCurrentIndex(prev => prev > 0 ? prev - 1 : prev)
  }

  const goToNext = () => {
    setCurrentIndex(prev => prev < project.mediaUrls!.length - 1 ? prev + 1 : prev)
  }

  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-black/90"
        onClick={onClose}
      >
        <div className="relative h-full flex flex-col">
          {/* Close Button */}
          <div className="absolute top-4 right-4 z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="bg-black/50 hover:bg-black/70 text-white border-0"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Project Info */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="pt-8 pb-4 px-4 text-center text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">{project.description}</p>
          </motion.div>

          {/* Main Image Container */}
          <div className="flex-1 flex items-center justify-center px-4 py-4">
            <div className="relative max-w-5xl max-h-[60vh] w-full h-full">
              <div 
                className="relative w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={project.mediaUrls[currentIndex]}
                      alt={`${project.title} - Image ${currentIndex + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 80vw"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                {currentIndex > 0 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-0"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </Button>
                )}

                {currentIndex < project.mediaUrls.length - 1 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-0"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-8 w-8" />
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-4 bg-black/30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center">
              <div className="flex gap-2 overflow-x-auto max-w-full pb-2">
                {project.mediaUrls.map((url, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      index === currentIndex
                        ? 'border-white ring-2 ring-white/50'
                        : 'border-white/30 hover:border-white/60'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  >
                    <Image
                      src={url}
                      alt={`${project.title} thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                    {index === currentIndex && (
                      <div className="absolute inset-0 bg-white/20" />
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Image Counter */}
            <div className="text-center mt-2">
              <span className="text-white/80 text-sm">
                {currentIndex + 1} of {project.mediaUrls.length}
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}