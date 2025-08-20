"use client"

import React, { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ProjectCard } from '@/components/project-card'
import { ViewMoreCard } from '@/components/view-more-card'
import { type Project } from '@/data/projects'

interface CategoryFilterProps {
  projects: Project[]
  categories: Array<{
    key: string
    label: string
    filter?: (project: Project) => boolean
    description?: string
  }>
  onProjectClick: (project: Project) => void
  className?: string
  title?: string
  description?: string
  enablePagination?: boolean
  initialItemsPerPage?: number
}

export const CategoryFilter = React.memo(function CategoryFilter({
  projects,
  categories,
  onProjectClick,
  className = "",
  title = "Portfolio",
  description = "Explore our work across different categories",
  enablePagination = false,
  initialItemsPerPage
}: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.key || 'all')
  const [visibleItemsPerCategory, setVisibleItemsPerCategory] = useState<Record<string, number>>({})
  const [screenSize, setScreenSize] = useState<'mobile' | 'lg' | 'xl'>('lg')

  // Detect screen size for responsive pagination
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      if (width >= 1280) {
        setScreenSize('xl') // 4 columns
      } else if (width >= 1024) {
        setScreenSize('lg') // 3 columns
      } else {
        setScreenSize('mobile') // 2 columns
      }
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Calculate items per page based on responsive breakpoints
  const getItemsPerPage = useMemo(() => {
    if (!enablePagination) return null
    if (initialItemsPerPage) return initialItemsPerPage
    
    // Responsive pagination sizes for optimal grid layout:
    switch (screenSize) {
      case 'xl': // 4 columns
        return 8 // 7 projects + 1 "View More" = 2 rows × 4 columns
      case 'lg': // 3 columns  
        return 6 // 5 projects + 1 "View More" = 2 rows × 3 columns
      default: // mobile (2 columns)
        return 10 // 9 projects + 1 "View More" = 5 rows × 2 columns
    }
  }, [enablePagination, initialItemsPerPage, screenSize])

  // Filter projects based on active category
  const filteredProjects = useMemo(() => {
    const activeFilter = categories.find(cat => cat.key === activeCategory)
    if (!activeFilter || !activeFilter.filter) {
      return projects // Show all if no filter or "all" category
    }
    return projects.filter(activeFilter.filter)
  }, [projects, activeCategory, categories])

  // Get current number of visible items for active category
  const currentVisibleCount = visibleItemsPerCategory[activeCategory] || getItemsPerPage || filteredProjects.length

  // Projects to display (with pagination if enabled)
  const displayedProjects = useMemo(() => {
    if (!enablePagination) {
      return filteredProjects
    }
    return filteredProjects.slice(0, currentVisibleCount)
  }, [filteredProjects, enablePagination, currentVisibleCount])

  // Check if there are more items to load
  const hasMoreItems = enablePagination && filteredProjects.length > currentVisibleCount

  // Projects to show in grid (replace last item with "View More" if needed)
  const gridProjects = useMemo(() => {
    if (!hasMoreItems) {
      return displayedProjects
    }
    // Replace the last project with a placeholder for "View More" card
    return displayedProjects.slice(0, -1)
  }, [displayedProjects, hasMoreItems])

  // Get current category info
  const currentCategoryInfo = useMemo(() => {
    return categories.find(cat => cat.key === activeCategory)
  }, [activeCategory, categories])

  // Handle category change
  const handleCategoryChange = (categoryKey: string) => {
    setActiveCategory(categoryKey)
    // Initialize pagination for new category if pagination is enabled and not already set
    if (enablePagination && getItemsPerPage && !visibleItemsPerCategory[categoryKey]) {
      setVisibleItemsPerCategory(prev => ({
        ...prev,
        [categoryKey]: getItemsPerPage
      }))
    }
  }

  // Initialize pagination for the initial category and reset on screen size change
  React.useEffect(() => {
    if (enablePagination && getItemsPerPage) {
      setVisibleItemsPerCategory(prev => ({
        ...prev,
        [activeCategory]: getItemsPerPage
      }))
    }
  }, [activeCategory, enablePagination, getItemsPerPage, screenSize])

  // Handle load more
  const handleLoadMore = () => {
    if (!enablePagination || !getItemsPerPage) return
    
    setVisibleItemsPerCategory(prev => ({
      ...prev,
      [activeCategory]: (prev[activeCategory] || getItemsPerPage) + getItemsPerPage
    }))
  }

  return (
    <div className={className}>
      {/* Title and Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {title}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      </motion.div>

      {/* Category Navigation */}
      <div className="flex justify-center mb-12">
        <div className="flex flex-wrap justify-center gap-2 p-1 bg-muted rounded-lg">
          {categories.map((category) => (
            <Button
              key={category.key}
              variant={activeCategory === category.key ? "default" : "ghost"}
              onClick={() => handleCategoryChange(category.key)}
              className={`px-6 py-2 rounded-md transition-all duration-200 ${
                activeCategory === category.key 
                  ? 'bg-primary text-primary-foreground shadow-sm' 
                  : 'hover:bg-background'
              }`}
            >
              {category.label}
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
              className="text-center mb-8"
            >
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {currentCategoryInfo?.description || ""}
              </p>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {/* Display the main projects */}
              {gridProjects.map((project, index) => (
                <motion.div
                  key={`${activeCategory}-${project.id}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (index * 0.05) }}
                >
                  <ProjectCard
                    project={project}
                    priority={index < 4}
                    onClick={onProjectClick}
                  />
                </motion.div>
              ))}

              {/* Show View More card if there are more items */}
              {hasMoreItems && (
                <motion.div
                  key={`${activeCategory}-view-more`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (gridProjects.length * 0.05) }}
                >
                  <ViewMoreCard onClick={handleLoadMore} />
                </motion.div>
              )}
            </div>

            {/* No Results Message */}
            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-lg text-muted-foreground">
                  No projects found in this category.
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
})
