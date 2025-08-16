export interface Project {
  id: number
  title: string
  description: string
  serviceType: 'family-portraits' | 'branded-marketing-videos' | 'weddings'
  mediaType: 'photo' | 'video'
  thumbnailUrl: string
  mediaUrls?: string[] // For photo galleries
  videoUrl?: string // For videos (YouTube/Vimeo)
  videoEmbedId?: string // For embedding
}

export const projects: Project[] = [
  // Family Portraits (Photos only) - All use photo placeholder
  {
    id: 1,
    title: "The Johnson Family",
    description: "A beautiful outdoor family session capturing three generations in their favorite park setting.",
    serviceType: 'family-portraits',
    mediaType: 'photo',
    thumbnailUrl: "/placeholders/photo-placeholder.svg",
    mediaUrls: [
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg"
    ]
  },
  {
    id: 2,
    title: "Miller Family Holiday",
    description: "Cozy indoor session showcasing the warmth and love of the Miller family during the holiday season.",
    serviceType: 'family-portraits',
    mediaType: 'photo',
    thumbnailUrl: "/placeholders/photo-placeholder.svg",
    mediaUrls: [
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg"
    ]
  },
  {
    id: 3,
    title: "Beach Day Adventures",
    description: "Capturing the joy and spontaneity of childhood during a fun-filled family beach day.",
    serviceType: 'family-portraits',
    mediaType: 'photo',
    thumbnailUrl: "/placeholders/photo-placeholder.svg",
    mediaUrls: [
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg"
    ]
  },
  {
    id: 4,
    title: "Urban Family Session",
    description: "Modern family portraits set against the backdrop of downtown architecture and city life.",
    serviceType: 'family-portraits',
    mediaType: 'photo',
    thumbnailUrl: "/placeholders/photo-placeholder.svg",
    mediaUrls: [
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg"
    ]
  },

  // Branded Marketing Videos - All use video placeholder
  {
    id: 5,
    title: "Tech Startup Launch",
    description: "Dynamic promotional video showcasing innovative technology solutions and company culture.",
    serviceType: 'branded-marketing-videos',
    mediaType: 'video',
    thumbnailUrl: "/placeholders/video-placeholder.svg",
    videoUrl: "https://vimeo.com/76979871",
    videoEmbedId: "76979871"
  },
  {
    id: 6,
    title: "Restaurant Brand Story",
    description: "Cinematic brand film capturing the passion and artistry behind a local culinary experience.",
    serviceType: 'branded-marketing-videos',
    mediaType: 'video',
    thumbnailUrl: "/placeholders/video-placeholder.svg",
    videoUrl: "https://vimeo.com/148751763",
    videoEmbedId: "148751763"
  },
  {
    id: 7,
    title: "Fitness Brand Campaign",
    description: "High-energy promotional video highlighting personal transformation and community spirit.",
    serviceType: 'branded-marketing-videos',
    mediaType: 'video',
    thumbnailUrl: "/placeholders/video-placeholder.svg",
    videoUrl: "https://vimeo.com/125095515",
    videoEmbedId: "125095515"
  },
  {
    id: 8,
    title: "Architecture Firm Showcase",
    description: "Professional video highlighting architectural excellence and design philosophy.",
    serviceType: 'branded-marketing-videos',
    mediaType: 'video',
    thumbnailUrl: "/placeholders/video-placeholder.svg",
    videoUrl: "https://vimeo.com/115098447",
    videoEmbedId: "115098447"
  },

  // Weddings (Mixed) - Use appropriate placeholder per type
  {
    id: 9,
    title: "Sarah & Michael's Garden Wedding",
    description: "Romantic outdoor ceremony celebrating love surrounded by blooming gardens and natural beauty.",
    serviceType: 'weddings',
    mediaType: 'photo',
    thumbnailUrl: "/placeholders/photo-placeholder.svg",
    mediaUrls: [
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg"
    ]
  },
  {
    id: 10,
    title: "Emma & David's Wedding Film",
    description: "Cinematic wedding video capturing every emotional moment of their perfect day.",
    serviceType: 'weddings',
    mediaType: 'video',
    thumbnailUrl: "/placeholders/video-placeholder.svg",
    videoUrl: "https://vimeo.com/107545567",
    videoEmbedId: "107545567"
  },
  {
    id: 11,
    title: "Alex & Jamie's Beach Ceremony",
    description: "Intimate beachside wedding celebration with stunning ocean views and golden hour lighting.",
    serviceType: 'weddings',
    mediaType: 'photo',
    thumbnailUrl: "/placeholders/photo-placeholder.svg",
    mediaUrls: [
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg"
    ]
  },
  {
    id: 12,
    title: "Classic Church Wedding",
    description: "Traditional wedding videography showcasing timeless elegance and sacred moments.",
    serviceType: 'weddings',
    mediaType: 'video',
    thumbnailUrl: "/placeholders/video-placeholder.svg",
    videoUrl: "https://vimeo.com/99804639",
    videoEmbedId: "99804639"
  }
]