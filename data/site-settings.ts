/**
 * Site Settings Configuration
 * 
 * This file centralizes all customizable site settings including:
 * - Service page hero sections (title, description, pricing, button text, background images)
 * - Animation timings and durations
 * - Future customization controls can be added here
 * 
 * Background images are automatically pulled from project thumbnails
 * matching the specified filter categories for each service page.
 */

export interface ServicePageHeroData {
  title: string
  description: string
  pricing: string
  buttonText: string
  filterCategories: string[] // Categories to pull background images from
}

export interface SiteSettings {
  servicePageHeros: {
    portrait: ServicePageHeroData
    wedding: ServicePageHeroData
    commercial: ServicePageHeroData
    portfolio: ServicePageHeroData
  }
  // Future customization settings can be added here
  animations: {
    heroImageTransitionDuration: number // milliseconds
    heroImageDisplayDuration: number // milliseconds
  }
}

export const siteSettings: SiteSettings = {
  servicePageHeros: {
    portrait: {
      title: 'Portrait Photography',
      description: 'Professional portrait sessions capturing personality, style, and authentic moments with artistic composition and expert lighting.',
      pricing: 'Starting at $200 per session',
      buttonText: 'Book Your Session',
      filterCategories: ['family-portraits', 'senior-yearbook', 'corporate-headshots', 'pet-photos', 'personal-events']
    },
    wedding: {
      title: 'Wedding Photography & Video',
      description: 'Complete wedding documentation combining stunning photography and cinematic videography to preserve your special day.',
      pricing: 'Packages starting at $1,500',
      buttonText: 'View Packages',
      filterCategories: ['weddings', 'wedding-photo-video']
    },
    commercial: {
      title: 'Commercial Photography & Video',
      description: 'Professional commercial photography and videography services for brands, real estate, and businesses to enhance your marketing and visual presence.',
      pricing: 'Custom quotes based on project scope',
      buttonText: 'Discuss Your Project',
      filterCategories: ['real-estate', 'commercial', 'corporate-headshots', 'branded-photoshoots', 'corporate-events', 'branded-marketing-video', 'training-videos']
    },
    portfolio: {
      title: 'Portfolio',
      description: 'Explore our complete collection of photography and videography work across all specialties.',
      pricing: 'View our full range of services',
      buttonText: 'Contact Us',
      filterCategories: ['photography', 'video-production', 'weddings'] // All main categories
    }
  },
  animations: {
    heroImageTransitionDuration: 1000, // 1 second transition between images
    heroImageDisplayDuration: 4000 // 4 seconds each image is displayed
  }
}
