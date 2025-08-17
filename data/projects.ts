import projectsData from './projects.json'

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
