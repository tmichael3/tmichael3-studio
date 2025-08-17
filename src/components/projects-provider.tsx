"use client"

import React, { createContext, useContext, useMemo } from 'react'
import { projects, type Project } from '@/data/projects'

interface ProjectsContextType {
  projects: Project[]
  getProjectsByCategory: (category: Project['category']) => Project[]
  getProjectsBySection: (section: Project['section']) => Project[]
  getProjectById: (id: number) => Project | undefined
}

const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined)

export function ProjectsProvider({ children }: { children: React.ReactNode }) {
  const contextValue = useMemo(() => ({
    projects,
    getProjectsByCategory: (category: Project['category']) => 
      projects.filter(project => project.category === category),
    getProjectsBySection: (section: Project['section']) => 
      projects.filter(project => project.section === section),
    getProjectById: (id: number) => 
      projects.find(project => project.id === id)
  }), [])

  return (
    <ProjectsContext.Provider value={contextValue}>
      {children}
    </ProjectsContext.Provider>
  )
}

export function useProjects() {
  const context = useContext(ProjectsContext)
  if (context === undefined) {
    throw new Error('useProjects must be used within a ProjectsProvider')
  }
  return context
}
