import React from 'react'
import { Plus } from 'lucide-react'

interface ViewMoreCardProps {
  className?: string
}

export const ViewMoreCard = React.memo(function ViewMoreCard({
  className = ""
}: ViewMoreCardProps) {
  return (
    <div
      className={`group animate-fade-in-up ${className}`}
    >
      {/* Image container matching ProjectCard dimensions */}
      <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
        <div className="absolute inset-0 border-2 border-dashed border-muted-foreground/30 rounded-lg group-hover:border-primary/50 transition-colors duration-300">
          <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground group-hover:text-primary transition-colors duration-300">
            <div
              className="mb-3 transition-transform duration-200 group-hover:scale-110"
            >
              <Plus size={48} strokeWidth={1.5} />
            </div>
            <div className="text-center px-4">
              <p className="text-lg font-semibold mb-1">View More</p>
              <p className="text-sm opacity-70">Load more projects</p>
            </div>
          </div>
        </div>

        {/* Hover scale effect matching ProjectCard */}
        <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-105" />
      </div>

      {/* Project info section matching ProjectCard spacing */}
      <div className="mt-3">
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
          Load More Projects
        </h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
          Click to view additional projects in this category
        </p>
      </div>
    </div>
  )
})
