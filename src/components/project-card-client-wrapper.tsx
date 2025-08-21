"use client"

import { type Project } from '@/lib/projects'

interface ProjectCardClientWrapperProps {
  children: React.ReactNode
  project: Project
  onClick?: (project: Project) => void
}

export function ProjectCardClientWrapper({ 
  children, 
  project, 
  onClick 
}: ProjectCardClientWrapperProps) {
  const handleClick = () => {
    if (onClick) {
      onClick(project)
    }
  }

  return (
    <div onClick={handleClick} className="cursor-pointer">
      {children}
    </div>
  )
}
