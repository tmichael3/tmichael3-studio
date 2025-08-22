import React from 'react'
import Image from 'next/image'
import { Camera, Video, Play, Layers } from 'lucide-react'
import { type Project } from '@/lib/projects'

interface ProjectCardProps {
  project: Project
  priority?: boolean
  disableAnimation?: boolean
  className?: string
}

const ProjectCard = React.memo(function ProjectCard({ 
  project, 
  priority = false, 
  disableAnimation = false,
  className = ""
}: ProjectCardProps) {
  // Validate thumbnailUrl and provide fallback
  const thumbnailSrc = project.thumbnailUrl && project.thumbnailUrl.trim() !== '' 
    ? project.thumbnailUrl 
    : '/placeholders/photo-placeholder.svg'

  return (
    <div
      className={`group ${
        disableAnimation ? '' : 'animate-fade-in-up'
      } ${className}`}
    >
      <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
        <Image
          src={thumbnailSrc}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority={priority}
          loading={priority ? undefined : "lazy"}
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

        {/* Hover overlay - only show play icon for video content */}
        {(project.mediaType === 'video' || project.mediaType === 'hybrid') && (
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Play className="h-12 w-12 text-white" />
          </div>
        )}
      </div>

      {/* Project info */}
      <div className="mt-3 text-center">
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
          {project.description}
        </p>
      </div>
    </div>
  )
})

export { ProjectCard }
