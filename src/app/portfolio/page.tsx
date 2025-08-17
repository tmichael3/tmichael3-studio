"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { projects, type Project } from '@/data/projects'
import { CustomLightbox } from '@/components/custom-lightbox'
import { ProjectCard } from '@/components/project-card'

type CategoryType = 'all' | 'photography' | 'video-production' | 'weddings'

export default function Portfolio() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all')

  // Group projects by category
  const projectsByCategory = {
    'all': projects,
    'photography': projects.filter(p => p.category === 'photography'),
    'video-production': projects.filter(p => p.category === 'video-production'),
    'weddings': projects.filter(p => p.category === 'weddings')
  }

  // Group projects by section within categories
  const groupProjectsBySections = (categoryProjects: Project[]) => {
    const grouped = categoryProjects.reduce((acc, project) => {
      if (!acc[project.section]) {
        acc[project.section] = []
      }
      acc[project.section].push(project)
      return acc
    }, {} as Record<string, Project[]>)
    return grouped
  }

  const categoryLabels = {
    'all': 'All Work',
    'photography': 'Photography',
    'video-production': 'Video Production',
    'weddings': 'Weddings'
  }

  const categoryDescriptions = {
    'all': 'Explore our complete portfolio showcasing photography and videography work across all categories and project types.',
    'photography': 'Professional photography services capturing life\'s most precious moments with artistic vision and technical excellence.',
    'video-production': 'Dynamic video production solutions for brands, businesses, and personal projects with cinematic storytelling.',
    'weddings': 'Complete wedding documentation combining photography and videography to preserve your most important day.'
  }

  const sectionLabels = {
    'family-portraits': 'Family Portraits',
    'senior-photos': 'Senior Photos',
    'senior-yearbook': 'Senior/Yearbook Photos',
    'corporate-headshots': 'Corporate Headshots',
    'branded-photoshoots': 'Branded Photoshoots',
    'pet-photos': 'Pet Photos',
    'branded-marketing-video': 'Branded Marketing Video',
    'training-videos': 'Training Videos',
    'podcasts': 'Podcasts',
    'corporate-events': 'Corporate Events',
    'personal-events': 'Personal Events',
    'portraits': 'Portrait Sessions',
    'wedding-photo-video': 'Wedding Photo & Video',
    'wedding-photo': 'Wedding Photography',
    'wedding-video': 'Wedding Videography',
    'real-estate': 'Real Estate',
    'business': 'Business Photography',
    'photography': 'Photography Work',
    'video-production': 'Video Production',
    'weddings': 'Wedding Work'
  }

  const handleProjectClick = (project: Project) => {
    setCurrentProject(project)
    setCurrentImageIndex(0)
    setLightboxOpen(true)
  }

  const currentProjects = projectsByCategory[activeCategory]
  
  const groupedProjects = (() => {
    if (activeCategory === 'all') {
      // For "all" category, group by project category (photography, video-production, weddings)
      const allGrouped: Record<string, Project[]> = {}
      currentProjects.forEach(project => {
        if (!allGrouped[project.category]) {
          allGrouped[project.category] = []
        }
        allGrouped[project.category].push(project)
      })
      return allGrouped
    } else if (activeCategory === 'weddings') {
      // For weddings, split into photo and video columns
      const photoProjects = currentProjects.filter(p => p.mediaType === 'photo')
      const videoProjects = currentProjects.filter(p => p.mediaType === 'video')
      return {
        'wedding-photo': photoProjects,
        'wedding-video': videoProjects
      }
    } else {
      return groupProjectsBySections(currentProjects)
    }
  })()

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Explore this collection of visual stories, from intimate family moments to grand celebrations and compelling brand narratives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation and Portfolio Content */}
      <div className="container mx-auto px-4 pb-16 md:pb-24">
        {/* Category Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 p-1 bg-muted rounded-lg">
            {Object.entries(categoryLabels).map(([key, label]) => (
              <Button
                key={key}
                variant={activeCategory === key ? "default" : "ghost"}
                onClick={() => setActiveCategory(key as CategoryType)}
                className={`px-6 py-2 rounded-md transition-all duration-200 ${
                  activeCategory === key 
                    ? 'bg-primary text-primary-foreground shadow-sm' 
                    : 'hover:bg-background'
                }`}
              >
                {label}
              </Button>
            ))}
          </div>
        </div>

        {/* Carousel Container */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.3
              }}
            >
              {/* Category Description */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {categoryLabels[activeCategory]}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {categoryDescriptions[activeCategory]}
                </p>
              </motion.div>

              {/* Sections */}
              {activeCategory === 'weddings' ? (
                // Special two-column layout for weddings
                <div className="grid md:grid-cols-2 gap-12">
                  {Object.entries(groupedProjects).map(([sectionKey, sectionProjects], sectionIndex) => (
                    <motion.div
                      key={sectionKey}
                      initial={{ opacity: 0, x: sectionIndex === 0 ? -30 : 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (sectionIndex * 0.1) }}
                    >
                      <div className="mb-8">
                        <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
                          {sectionLabels[sectionKey as keyof typeof sectionLabels]}
                        </h3>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-6">
                        {sectionProjects.map((project, index) => (
                          <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + (sectionIndex * 0.1) + (index * 0.05) }}
                          >
                            <ProjectCard 
                              project={project} 
                              priority={index < 2}
                              onClick={handleProjectClick}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                // Standard layout for other categories
                <div className="space-y-16">
                  {Object.entries(groupedProjects).map(([sectionKey, sectionProjects], sectionIndex) => (
                    <motion.div
                      key={sectionKey}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 + (sectionIndex * 0.1) }}
                    >
                      <div className="mb-8">
                        <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
                          {sectionLabels[sectionKey as keyof typeof sectionLabels]}
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {sectionProjects.map((project, index) => (
                          <motion.div
                            key={project.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + (sectionIndex * 0.1) + (index * 0.05) }}
                          >
                            <ProjectCard 
                              project={project} 
                              priority={sectionIndex === 0 && index < 4}
                              onClick={handleProjectClick}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
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