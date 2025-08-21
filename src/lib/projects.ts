// Direct data access - no providers needed for static data
import projectsData from '@/data/projects.json'

export interface Project {
  id: number
  title: string
  description: string
  category: 'photography' | 'video-production' | 'weddings'
  section: 'family-portraits' | 'senior-yearbook' | 'corporate-headshots' | 'branded-photoshoots' | 'pet-photos' | 'branded-marketing-video' | 'training-videos' | 'podcasts' | 'corporate-events' | 'personal-events' | 'wedding-photo-video' | 'real-estate' | 'commercial'
  mediaType: 'photo' | 'video' | 'hybrid'
  thumbnailUrl: string
  mediaUrls?: string[]
  videoUrl?: string
  videoEmbedId?: string
}

export const projects: Project[] = projectsData as Project[]

export function getProjects(): Project[] {
  return projects
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter(project => project.category === category)
}

export function getProjectsBySection(section: Project['section']): Project[] {
  return projects.filter(project => project.section === section)
}

export function getProjectById(id: number): Project | undefined {
  return projects.find(project => project.id === id)
}
