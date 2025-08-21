"use client"

import React, { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { projects, type Project } from '@/lib/projects'
import { CustomLightbox } from '@/components/custom-lightbox'
import { ProjectCard } from '@/components/project-card'
import { ViewMoreCard } from '@/components/view-more-card'
import { PageHeroSection } from '@/components/page-hero-section'

type CategoryType = 'all' | 'photography' | 'video-production' | 'weddings'

export default function Portfolio() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all')
  const [visibleItemsPerSection, setVisibleItemsPerSection] = useState<Record<string, number>>({})
  const [isDesktop, setIsDesktop] = useState(false)

  // Detect screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1280)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Responsive pagination logic based on rows
  const getPaginationConfig = () => {
    return {
      desktop: {
        columns: 4,
        initialRows: 2,
        loadMoreRows: 1
      },
      mobile: {
        columns: 2, 
        initialRows: 3,
        loadMoreRows: 1
      }
    }
  }

  const getInitialItemsCount = () => {
    const config = getPaginationConfig()
    // Desktop: 2 rows × 4 cols = 8 (7 projects + 1 "View More")
    // Mobile: 3 rows × 2 cols = 6 (5 projects + 1 "View More")
    if (isDesktop) {
      return config.desktop.columns * config.desktop.initialRows
    } else {
      return config.mobile.columns * config.mobile.initialRows
    }
  }

  const getLoadMoreCount = () => {
    const config = getPaginationConfig()
    // Desktop: 1 row × 4 cols = 4 more projects
    // Mobile: 1 row × 2 cols = 2 more projects
    if (isDesktop) {
      return config.desktop.columns * config.desktop.loadMoreRows
    } else {
      return config.mobile.columns * config.mobile.loadMoreRows
    }
  }

  // Group projects by category
  const projectsByCategory = useMemo(() => ({
    'all': projects,
    'photography': projects.filter(p => p.category === 'photography'),
    'video-production': projects.filter(p => p.category === 'video-production'),
    'weddings': projects.filter(p => p.category === 'weddings')
  }), [])

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
    'weddings': 'Wedding Work',
    'commercial': 'Commercial'
  }
  
  const handleProjectClick = (project: Project) => {
    setCurrentProject(project)
    setCurrentImageIndex(0)
    setLightboxOpen(true)
  }

  const handleLoadMore = (sectionKey: string) => {
    const currentVisible = visibleItemsPerSection[sectionKey] || getInitialItemsCount()
    const loadMoreCount = getLoadMoreCount()
    setVisibleItemsPerSection(prev => ({
      ...prev,
      [sectionKey]: currentVisible + loadMoreCount
    }))
  }

  const currentProjects = useMemo(() => projectsByCategory[activeCategory], [projectsByCategory, activeCategory])
  
  const groupedProjects = useMemo(() => {
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
  }, [activeCategory, currentProjects])

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageHeroSection
        title="Portfolio"
        description="Explore our complete collection of photography and videography work across all specialties."
        pricing="View our full range of services"
        buttonText="Contact Us"
        filterCategories={['photography', 'video-production', 'weddings']}
      />

      {/* Navigation and Portfolio Content */}
      <div className="container mx-auto px-4 pt-12 md:pt-16 mb-12 md:mb-16">
        {/* Category Title and Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {categoryLabels[activeCategory]}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            {categoryDescriptions[activeCategory]}
          </p>

          {/* Category Navigation */}
          <div className="flex justify-center">
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
        </motion.div>

        {/* Portfolio Content */}
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
                      
                      {/* Render projects with pagination */}
                      {renderSectionWithPagination(sectionKey, sectionProjects)}
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

                      {/* Render projects with pagination */}
                      {renderSectionWithPagination(sectionKey, sectionProjects)}
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

  // Helper function to render section with pagination
  function renderSectionWithPagination(sectionKey: string, sectionProjects: Project[]) {
    const currentVisible = visibleItemsPerSection[sectionKey] || getInitialItemsCount()
    const visibleProjects = sectionProjects.slice(0, currentVisible - 1) // -1 for "View More" card
    const hasMoreItems = sectionProjects.length > currentVisible - 1
    
    const gridClass = activeCategory === 'weddings' 
      ? "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
      : "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"

    return (
      <div className={gridClass}>
        {visibleProjects.map((project, index) => {
          // Only animate the first few cards and newly loaded cards
          const isInitialLoad = index < getInitialItemsCount() - 1
          const shouldAnimate = isInitialLoad || index >= (currentVisible - getLoadMoreCount() - 1)
          
          return shouldAnimate ? (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.2,
                delay: isInitialLoad ? index * 0.02 : (index - (currentVisible - getLoadMoreCount() - 1)) * 0.03
              }}
            >
              <ProjectCard 
                project={project} 
                priority={index < 4}
                onClick={handleProjectClick}
                disableAnimation={true}
              />
            </motion.div>
          ) : (
            <div key={project.id}>
              <ProjectCard 
                project={project} 
                priority={index < 4}
                onClick={handleProjectClick}
                disableAnimation={true}
              />
            </div>
          )
        })}
        
        {/* Show View More card if there are more items */}
        {hasMoreItems && (
          <motion.div
            key={`${sectionKey}-view-more`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.05 }}
          >
            <ViewMoreCard onClick={() => handleLoadMore(sectionKey)} />
          </motion.div>
        )}
      </div>
    )
  }
}