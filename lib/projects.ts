import { projects, type Project } from '@/data/projects'

// Re-export projects for direct access
export { projects, type Project }

// Basic utility functions
export function getProjectById(id: number): Project | undefined {
  return projects.find(project => project.id === id)
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter(project => project.category === category)
}

export function getProjectsBySection(section: Project['section']): Project[] {
  return projects.filter(project => project.section === section)
}

// Specific helper functions based on current page usage patterns

// Home page: Get 8 recent projects using deterministic selection
export function getRecentProjects(): Project[] {
  // Use a deterministic approach - take every nth project to get variety
  const step = Math.max(1, Math.floor(projects.length / 8))
  const selected: Project[] = []
  
  for (let i = 0; i < projects.length && selected.length < 8; i += step) {
    selected.push(projects[i])
  }
  
  // If we need more projects, fill from the beginning
  while (selected.length < 8 && selected.length < projects.length) {
    const remaining = projects.filter(p => !selected.find(s => s.id === p.id))
    if (remaining.length > 0) {
      selected.push(remaining[0])
    } else {
      break
    }
  }
  
  return selected
}

// Commercial page: Get commercial-related projects (photography + video production)
export function getCommercialProjects(): Project[] {
  return projects.filter(project => 
    (project.category === 'photography' && 
     ['real-estate', 'commercial', 'corporate-headshots', 'branded-photoshoots', 'corporate-events'].includes(project.section)) ||
    (project.category === 'video-production' && 
     ['branded-marketing-video', 'training-videos', 'corporate-events'].includes(project.section))
  )
}

// Portrait page: Get portrait-related projects (photography only)
export function getPortraitProjects(): Project[] {
  return projects.filter(project => 
    project.category === 'photography' && 
    ['family-portraits', 'senior-yearbook', 'corporate-headshots', 'pet-photos', 'personal-events'].includes(project.section)
  )
}

// Wedding page: Get wedding-related projects (weddings category + wedding section)
export function getWeddingProjects(): Project[] {
  return projects.filter(project => 
    project.category === 'weddings' || 
    (project.category === 'photography' && project.section === 'wedding-photo-video')
  )
}

// Hero component: Get background images for a service based on filter categories
export function getHeroBackgroundImages(filterCategories: string[]): string[] {
  const categoryProjects = projects.filter(project => 
    filterCategories.some((category: string) => 
      project.section === category || project.category === category
    )
  )
  
  // Extract thumbnail URLs, filter out placeholder URLs for better visuals
  const images = categoryProjects
    .map(project => project.thumbnailUrl)
    .filter(url => url && !url.includes('placeholder'))
  
  // If no real images, fall back to a default or use placeholders
  return images.length > 0 ? images : ['/placeholders/photo-placeholder.svg']
}