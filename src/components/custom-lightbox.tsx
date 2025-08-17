"use client"

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { type Project } from '@/data/projects'

interface CustomLightboxProps {
  isOpen: boolean
  onClose: () => void
  project: Project | null
  initialIndex?: number
}

interface MediaItem {
  type: 'photo' | 'video'
  url: string
  thumbnailUrl: string
  embedId?: string
}

export function CustomLightbox({ isOpen, onClose, project, initialIndex = 0 }: CustomLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  // Reset to first item when project changes
  useEffect(() => {
    if (project && isOpen) {
      setCurrentIndex(0)
    }
  }, [project, isOpen])

  // Create unified media array for hybrid projects
  const createMediaArray = useCallback((): MediaItem[] => {
    if (!project) return []
    
    const mediaItems: MediaItem[] = []

    // Add photos first
    if (project.mediaUrls) {
      project.mediaUrls.forEach(url => {
        mediaItems.push({
          type: 'photo',
          url,
          thumbnailUrl: url
        })
      })
    }

    // Add video at the end for hybrid projects
    if (project.mediaType === 'hybrid' && project.videoEmbedId) {
      mediaItems.push({
        type: 'video',
        url: project.videoUrl || '',
        thumbnailUrl: '/placeholders/video-placeholder.svg',
        embedId: project.videoEmbedId
      })
    }

    return mediaItems
  }, [project])

  // For non-hybrid projects, use existing logic
  const isHybrid = project?.mediaType === 'hybrid'
  const mediaArray = isHybrid ? createMediaArray() : []
  
  // For regular photo projects
  const isPhotoProject = project?.mediaType === 'photo' && project.mediaUrls
  // For regular video projects  
  const isVideoProject = project?.mediaType === 'video' && project.videoEmbedId

  const goToPrevious = useCallback(() => {
    if (isHybrid && mediaArray.length > 0) {
      setCurrentIndex(prev => prev > 0 ? prev - 1 : prev)
    } else if (isPhotoProject && project?.mediaUrls) {
      setCurrentIndex(prev => prev > 0 ? prev - 1 : prev)
    }
  }, [isHybrid, mediaArray.length, isPhotoProject, project?.mediaUrls])

  const goToNext = useCallback(() => {
    if (isHybrid && mediaArray.length > 0) {
      setCurrentIndex(prev => prev < mediaArray.length - 1 ? prev + 1 : prev)
    } else if (isPhotoProject && project?.mediaUrls) {
      setCurrentIndex(prev => prev < project.mediaUrls!.length - 1 ? prev + 1 : prev)
    }
  }, [isHybrid, mediaArray.length, isPhotoProject, project?.mediaUrls])

  const goToMedia = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !project) return
      
      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          goToPrevious()
          break
        case 'ArrowRight':
          goToNext()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, project, goToNext, goToPrevious])

  if (!isOpen || !project) return null

  // Get current media for display
  const getCurrentMedia = () => {
    if (isHybrid && mediaArray.length > 0) {
      return mediaArray[currentIndex]
    } else if (isPhotoProject && project.mediaUrls) {
      return {
        type: 'photo' as const,
        url: project.mediaUrls[currentIndex],
        thumbnailUrl: project.mediaUrls[currentIndex]
      }
    } else if (isVideoProject) {
      return {
        type: 'video' as const,
        url: project.videoUrl || '',
        thumbnailUrl: '/placeholders/video-placeholder.svg',
        embedId: project.videoEmbedId
      }
    }
    return null
  }

  const currentMedia = getCurrentMedia()
  const hasNavigation = (isHybrid && mediaArray.length > 1) || (isPhotoProject && project.mediaUrls && project.mediaUrls.length > 1)

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

          {/* Main Content Container */}
          <div className="flex-1 flex items-center justify-center px-4 py-4">
            <div className="relative max-w-5xl max-h-[60vh] w-full h-full">
              <div 
                className="relative w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {currentMedia && (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${currentMedia.type}-${currentIndex}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full h-full"
                    >
                      {currentMedia.type === 'video' ? (
                        <div className="relative w-full max-w-4xl mx-auto">
                          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                            <iframe
                              src={`https://player.vimeo.com/video/${currentMedia.embedId}?autoplay=1&color=ffffff&title=0&byline=0&portrait=0`}
                              className="absolute inset-0 w-full h-full"
                              frameBorder="0"
                              allow="autoplay; fullscreen; picture-in-picture"
                              allowFullScreen
                              title={project.title}
                            />
                          </div>
                        </div>
                      ) : (
                        <Image
                          src={currentMedia.url}
                          alt={`${project.title} - Image ${currentIndex + 1}`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 80vw"
                          priority
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>
                )}

                {/* Navigation Arrows */}
                {hasNavigation && (
                  <>
                    {currentIndex > 0 && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-0"
                        aria-label="Previous media"
                      >
                        <ChevronLeft className="h-8 w-8" />
                      </Button>
                    )}

                    {((isHybrid && currentIndex < mediaArray.length - 1) || 
                      (isPhotoProject && project.mediaUrls && currentIndex < project.mediaUrls.length - 1)) && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-0"
                        aria-label="Next media"
                      >
                        <ChevronRight className="h-8 w-8" />
                      </Button>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          {hasNavigation && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-4 bg-black/30"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-center">
                <div className="flex gap-2 overflow-x-auto max-w-full pb-2 px-4">
                  {isHybrid ? (
                    // Hybrid project thumbnails
                    mediaArray.map((media, index) => (
                      <button
                        key={index}
                        onClick={() => goToMedia(index)}
                        className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border rounded-lg transition-all duration-200 ${
                          index === currentIndex
                            ? 'border-white ring-2 ring-white/50'
                            : 'border-white/30 hover:border-white/60'
                        }`}
                        aria-label={`Go to ${media.type} ${index + 1}`}
                      >
                        <Image
                          src={media.thumbnailUrl}
                          alt={`${project.title} thumbnail ${index + 1}`}
                          fill
                          className="object-contain"
                          sizes="80px"
                        />
                        {media.type === 'video' && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                            <Play className="h-4 w-4 text-white" />
                          </div>
                        )}
                        {index === currentIndex && (
                          <div className="absolute inset-0 bg-white/20" />
                        )}
                      </button>
                    ))
                  ) : (
                    // Photo-only project thumbnails
                    project.mediaUrls?.map((url, index) => (
                      <button
                        key={index}
                        onClick={() => goToMedia(index)}
                        className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border rounded-lg transition-all duration-200 ${
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
                          className="object-contain"
                          sizes="80px"
                        />
                        {index === currentIndex && (
                          <div className="absolute inset-0 bg-white/20" />
                        )}
                      </button>
                    ))
                  )}
                </div>
              </div>
              
              {/* Media Counter */}
              <div className="text-center mt-2">
                <span className="text-white/80 text-sm">
                  {currentIndex + 1} of {isHybrid ? mediaArray.length : (project.mediaUrls?.length || 1)}
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}