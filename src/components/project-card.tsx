"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Camera, Video, Play, Layers } from 'lucide-react'
import { type Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  priority?: boolean
  onClick?: (project: Project) => void
}

export function ProjectCard({ project, priority = false, onClick }: ProjectCardProps) {
  // Validate thumbnailUrl and provide fallback
  const thumbnailSrc = project.thumbnailUrl && project.thumbnailUrl.trim() !== '' 
    ? project.thumbnailUrl 
    : '/placeholders/photo-placeholder.svg'

  const handleClick = () => {
    if (onClick) {
      onClick(project)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
        <Image
          src={thumbnailSrc}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority={priority}
        />

        {/* Media type indicator */}
        <div className="absolute top-3 right-3 p-2 bg-black/70 rounded-full text-white">
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
}
