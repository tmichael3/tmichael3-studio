"use client"

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Camera, Video, Play, Layers } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { projects, type Project } from '@/data/projects'
import { CustomLightbox } from '@/components/custom-lightbox'

type CategoryType = 'photography' | 'video-production' | 'weddings'

export default function Portfolio() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeCategory, setActiveCategory] = useState<CategoryType>('photography')

  // Group projects by category
  const projectsByCategory = {
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
    'photography': 'Photography',
    'video-production': 'Video Production',
    'weddings': 'Weddings'
  }

  const categoryDescriptions = {
    'photography': 'Professional photography services capturing life\'s most precious moments with artistic vision and technical excellence.',
    'video-production': 'Dynamic video production solutions for brands, businesses, and personal projects with cinematic storytelling.',
    'weddings': 'Complete wedding documentation combining photography and videography to preserve your most important day.'
  }

  const sectionLabels = {
    'family-portraits': 'Family Portraits',
    'senior-yearbook': 'Senior/Yearbook Photos',
    'corporate-headshots': 'Corporate Headshots',
    'branded-photoshoots': 'Branded Photoshoots',
    'pet-photos': 'Pet Photos',
    'branded-marketing-video': 'Branded Marketing Video',
    'training-videos': 'Training Videos',
    'podcasts': 'Podcasts',
    'corporate-events': 'Corporate Events',
    'personal-events': 'Personal Events',
    'wedding-photo-video': 'Wedding Photo & Video'
  }

  const handleProjectClick = (project: Project) => {
    setCurrentProject(project)
    setCurrentImageIndex(0)
    setLightboxOpen(true)
  }

  const ProjectCard = ({ project }: { project: Project }) => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="group cursor-pointer"
      onClick={() => handleProjectClick(project)}
    >
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted">
        <Image
          src={project.thumbnailUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        
        {/* Media type indicator */}
        <div className="absolute bottom-3 right-3 p-2 bg-black/80 rounded-full text-white">
          {project.mediaType === 'video' ? (
            <Video className="h-4 w-4" />
          ) : project.mediaType === 'hybrid' ? (
            <Layers className="h-4 w-4" />
          ) : (
            <Camera className="h-4 w-4" />
          )}
        </div>

        {/* Play button for videos */}
        {(project.mediaType === 'video' || project.mediaType === 'hybrid') && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="p-4 bg-white/90 rounded-full">
              <Play className="h-8 w-8 text-foreground ml-1" />
            </div>
          </div>
        )}

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="text-white font-semibold text-lg leading-tight">
            {project.title}
          </h3>
        </div>
      </div>
    </motion.div>
  )

  const currentProjects = projectsByCategory[activeCategory]
  const groupedProjects = activeCategory === 'weddings' 
    ? { 'wedding-photo-video': currentProjects }
    : groupProjectsBySections(currentProjects)

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
              <div className="space-y-16">
                {Object.entries(groupedProjects).map(([sectionKey, sectionProjects], sectionIndex) => (
                  <motion.div
                    key={sectionKey}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + (sectionIndex * 0.1) }}
                  >
                    {/* Section Header - Hide for weddings since there's only one section */}
                    {activeCategory !== 'weddings' && (
                      <div className="mb-8">
                        <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
                          {sectionLabels[sectionKey as keyof typeof sectionLabels]}
                        </h3>
                      </div>
                    )}

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {sectionProjects.map((project, index) => (
                        <motion.div
                          key={project.id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + (sectionIndex * 0.1) + (index * 0.05) }}
                        >
                          <ProjectCard project={project} />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
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