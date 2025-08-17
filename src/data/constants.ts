export const categoryLabels = {
  photography: 'Photography',
  'video-production': 'Video Production',
  weddings: 'Weddings'
} as const

export const sectionLabels = {
  'family-portraits': 'Family Portraits',
  'senior-yearbook': 'Senior Yearbook',
  'corporate-headshots': 'Corporate Headshots',
  'branded-photoshoots': 'Branded Photoshoots',
  'pet-photos': 'Pet Photos',
  'branded-marketing-video': 'Branded Marketing Video',
  'training-videos': 'Training Videos',
  'podcasts': 'Podcasts',
  'corporate-events': 'Corporate Events',
  'personal-events': 'Personal Events',
  'wedding-photo-video': 'Wedding Photo & Video'
} as const

export const serviceDescriptions = {
  portrait: {
    title: 'Portrait Photography',
    description: 'Professional portrait sessions capturing personality, style, and authentic moments with artistic composition and expert lighting.',
    pricing: 'Starting at $200 per session',
    sections: ['family-portraits', 'senior-yearbook', 'corporate-headshots']
  },
  wedding: {
    title: 'Wedding Photography & Video',
    description: 'Complete wedding documentation combining stunning photography and cinematic videography to preserve your special day.',
    pricing: 'Packages starting at $1,500',
    sections: ['wedding-photo-video']
  },
  commercial: {
    title: 'Commercial Photography',
    description: 'Professional commercial photography for brands, real estate, and businesses to enhance your marketing and visual presence.',
    pricing: 'Custom quotes based on project scope',
    sections: ['branded-photoshoots', 'corporate-events']
  },
  videography: {
    title: 'Video Production',
    description: 'High-quality video production services including branded content, training videos, and event documentation.',
    pricing: 'Starting at $500 per project',
    sections: ['branded-marketing-video', 'training-videos', 'podcasts', 'corporate-events', 'personal-events']
  }
} as const

export const contactInfo = {
  email: 'hello@tmichael3.studio',
  phone: '(555) 123-4567',
  location: 'Available nationwide',
  social: {
    instagram: 'https://instagram.com/tmichael3.studio',
    facebook: 'https://facebook.com/tmichael3studio',
    linkedin: 'https://linkedin.com/in/tmichael3'
  }
} as const

export const aboutInfo = {
  name: 'TJ Michael',
  title: 'Professional Photographer & Videographer',
  bio: 'With over a decade of experience in visual storytelling, I specialize in capturing authentic moments that tell compelling stories. My approach combines technical expertise with artistic vision to create images and videos that resonate with viewers and stand the test of time.',
  experience: '10+ years',
  specialties: ['Portrait Photography', 'Wedding Documentation', 'Commercial Photography', 'Video Production'],
  mission: 'To create timeless visual narratives that preserve precious moments and elevate brands through the power of professional photography and videography.'
} as const

export const weddingFilterCategories = {
  all: 'All',
  photography: 'Photography',
  videography: 'Videography'
} as const

export const portraitFilterCategories = {
  all: 'All',
  'family-portraits': 'Family Portraits',
  'senior-yearbook': 'Senior Photos',
  'pet-photos': 'Pet Photos',
  'personal-events': 'Personal Events',
  'corporate-headshots': 'Portrait Sessions'
} as const

export const commercialFilterCategories = {
  all: 'All',
  'corporate-headshots': 'Corporate Headshots',
  'branded-photoshoots': 'Branded Photoshoots',
  'branded-marketing-video': 'Branded Marketing Video',
  'training-videos': 'Training Videos',
  'corporate-events': 'Corporate Events',
  'real-estate': 'Real Estate',
  'commercial': 'Business Photography'
} as const
