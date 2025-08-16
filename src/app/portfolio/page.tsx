"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Camera, Video, Play } from 'lucide-react'
import { projects, type Project } from '@/data/projects'
import { CustomLightbox } from '@/components/custom-lightbox'

export default function Portfolio() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Group projects by service type
  const familyPortraits = projects.filter(p => p.serviceType === 'family-portraits')
  const brandedVideos = projects.filter(p => p.serviceType === 'branded-marketing-videos')
  const weddings = projects.filter(p => p.serviceType === 'weddings')

  const handleProjectClick = (project: Project) => {
    setCurrentProject(project)
    setCurrentImageIndex(0)
    
    if (project.mediaType === 'photo') {
      setLightboxOpen(true)
    } else {
      // For videos, open in new tab or handle differently
      if (project.videoUrl) {
        window.open(project.videoUrl, '_blank')
      }
    }
  }

  const ProjectCard = ({ project }: { project: Project }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
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
          ) : (
            <Camera className="h-4 w-4" />
          )}
        </div>

        {/* Play button for videos */}
        {project.mediaType === 'video' && (
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

  const ProjectSection = ({ 
    title, 
    projects, 
    description 
  }: { 
    title: string
    projects: Project[]
    description: string 
  }) => (
    <section className="mb-16 md:mb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {title}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )

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
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Explore our collection of visual stories, from intimate family moments to grand celebrations and compelling brand narratives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Sections */}
      <div className="container mx-auto px-4 pb-16 md:pb-24">
        <ProjectSection
          title="Family Portraits"
          projects={familyPortraits}
          description="Capturing the authentic connections and precious moments that define your family's unique story."
        />

        <ProjectSection
          title="Branded Marketing Videos"
          projects={brandedVideos}
          description="Dynamic visual storytelling that brings your brand to life and connects with your audience."
        />

        <ProjectSection
          title="Weddings"
          projects={weddings}
          description="Preserving the magic, emotion, and beauty of your most important day through both photography and videography."
        />
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