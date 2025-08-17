export interface Project {
  id: number
  title: string
  description: string
  category: 'photography' | 'video-production' | 'weddings'
  section: 'family-portraits' | 'senior-yearbook' | 'corporate-headshots' | 'branded-photoshoots' | 'pet-photos' | 'branded-marketing-video' | 'training-videos' | 'podcasts' | 'corporate-events' | 'personal-events' | 'wedding-photo-video'
  mediaType: 'photo' | 'video' | 'hybrid' // Added hybrid type
  thumbnailUrl: string
  mediaUrls?: string[] // For photo galleries
  videoUrl?: string // For videos (YouTube/Vimeo)
  videoEmbedId?: string // For embedding
}

export const projects: Project[] = [
  // PHOTOGRAPHY CATEGORY - Family Portraits
  {
    id: 1,
    title: "Kiki's Portrait Session",
    description: "A beautiful portrait session capturing personality and style with professional lighting and artistic composition.",
    category: 'photography',
    section: 'family-portraits',
    mediaType: 'photo',
    thumbnailUrl: "/_Projects/05_Kiki_Portrait/IMG_1136.webp",
    mediaUrls: [
      "/_Projects/05_Kiki_Portrait/IMG_1136.webp",
      "/_Projects/05_Kiki_Portrait/IMG_1157.webp",
      "/_Projects/05_Kiki_Portrait/IMG_1395.webp",
      "/_Projects/05_Kiki_Portrait/IMG_1434.webp",
      "/_Projects/05_Kiki_Portrait/IMG_1446-Edit.webp"
    ]
  },
  {
    id: 2,
    title: "Miller Family Holiday",
    description: "Cozy indoor session showcasing the warmth and love of the Miller family during the holiday season.",
    category: 'photography',
    section: 'family-portraits',
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
    category: 'photography',
    section: 'family-portraits',
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
    category: 'photography',
    section: 'family-portraits',
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
    id: 5,
    title: "Autumn Portrait Session",
    description: "Golden hour family photos amidst the beautiful fall foliage and seasonal colors.",
    category: 'photography',
    section: 'family-portraits',
    mediaType: 'photo',
    thumbnailUrl: "/placeholders/photo-placeholder.svg",
    mediaUrls: [
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg"
    ]
  },

  // PHOTOGRAPHY CATEGORY - Senior/Yearbook Photos
  {
    id: 6,
    title: "Kiki's Senior Session",
    description: "Capturing the confidence and personality of a graduating senior in multiple locations with beautiful natural lighting.",
    category: 'photography',
    section: 'senior-yearbook',
    mediaType: 'photo',
    thumbnailUrl: "/_Projects/01_Kiki_SP/KikiSeniorPhoto-11.webp",
    mediaUrls: [
      "/_Projects/01_Kiki_SP/KikiSeniorPhoto-11.webp",
      "/_Projects/01_Kiki_SP/KikiSeniorPhoto-44.webp",
      "/_Projects/01_Kiki_SP/KikiSeniorPhoto-49.webp",
      "/_Projects/01_Kiki_SP/KikiSeniorPhoto-62.webp"
    ]
  },
  {
    id: 7,
    title: "Lauren's Senior Portraits",
    description: "Professional senior photography session featuring diverse backgrounds and lighting setups showcasing personality and style.",
    category: 'photography',
    section: 'senior-yearbook',
    mediaType: 'photo',
    thumbnailUrl: "/_Projects/02_Lauren_SP/Lauren+Senior-50.webp",
    mediaUrls: [
      "/_Projects/02_Lauren_SP/Lauren+Senior-50.webp",
      "/_Projects/02_Lauren_SP/Lauren+Senior-52.webp",
      "/_Projects/02_Lauren_SP/Lauren+Senior-64.webp",
      "/_Projects/02_Lauren_SP/Lauren+Senior-70.webp"
    ]
  },
  {
    id: 8,
    title: "Graduate Portfolio Shoot",
    description: "Professional headshots and lifestyle photos for college applications and social media.",
    category: 'photography',
    section: 'senior-yearbook',
    mediaType: 'photo',
    thumbnailUrl: "/placeholders/photo-placeholder.svg",
    mediaUrls: [
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg"
    ]
  },

  // PHOTOGRAPHY CATEGORY - Corporate Headshots
  {
    id: 9,
    title: "Executive Leadership Team",
    description: "Professional corporate headshots for C-suite executives with consistent lighting and backgrounds.",
    category: 'photography',
    section: 'corporate-headshots',
    mediaType: 'photo',
    thumbnailUrl: "/placeholders/portrait-placeholder.svg",
    mediaUrls: [
      "/placeholders/portrait-placeholder.svg",
      "/placeholders/portrait-placeholder.svg",
      "/placeholders/portrait-placeholder.svg",
      "/placeholders/portrait-placeholder.svg"
    ]
  },
  {
    id: 10,
    title: "Law Firm Partners",
    description: "Distinguished professional portraits for legal practice marketing and website use.",
    category: 'photography',
    section: 'corporate-headshots',
    mediaType: 'photo',
    thumbnailUrl: "/placeholders/portrait-placeholder.svg",
    mediaUrls: [
      "/placeholders/portrait-placeholder.svg",
      "/placeholders/portrait-placeholder.svg",
      "/placeholders/portrait-placeholder.svg",
      "/placeholders/portrait-placeholder.svg"
    ]
  },
  {
    id: 11,
    title: "Medical Practice Team",
    description: "Approachable yet professional headshots for healthcare professionals and staff.",
    category: 'photography',
    section: 'corporate-headshots',
    mediaType: 'photo',
    thumbnailUrl: "/placeholders/portrait-placeholder.svg",
    mediaUrls: [
      "/placeholders/portrait-placeholder.svg",
      "/placeholders/portrait-placeholder.svg",
      "/placeholders/portrait-placeholder.svg",
      "/placeholders/portrait-placeholder.svg"
    ]
  },

  // PHOTOGRAPHY CATEGORY - Branded Photoshoots
  {
    id: 12,
    title: "Alfred Real Estate Photography",
    description: "Professional real estate photography showcasing property features and architectural details with optimal lighting.",
    category: 'photography',
    section: 'branded-photoshoots',
    mediaType: 'photo',
    thumbnailUrl: "/_Projects/06_Alfred_Real_Estate/234Alfred-15.webp",
    mediaUrls: [
      "/_Projects/06_Alfred_Real_Estate/234Alfred-15.webp",
      "/_Projects/06_Alfred_Real_Estate/234Alfred-16.webp"
    ]
  },
  {
    id: 13,
    title: "Fashion Brand Campaign",
    description: "Editorial-style brand photography featuring the latest collection in urban settings.",
    category: 'photography',
    section: 'branded-photoshoots',
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
    id: 14,
    title: "Restaurant Menu Photography",
    description: "Mouth-watering food photography showcasing culinary artistry and restaurant ambiance.",
    category: 'photography',
    section: 'branded-photoshoots',
    mediaType: 'photo',
    thumbnailUrl: "/placeholders/photo-placeholder.svg",
    mediaUrls: [
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg"
    ]
  },

  // PHOTOGRAPHY CATEGORY - Pet Photos
  {
    id: 15,
    title: "Golden Retriever Family",
    description: "Playful outdoor session capturing the personality and bond between pets and their family.",
    category: 'photography',
    section: 'pet-photos',
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
    id: 16,
    title: "Studio Pet Portraits",
    description: "Professional studio portraits showcasing the unique character of beloved family pets.",
    category: 'photography',
    section: 'pet-photos',
    mediaType: 'photo',
    thumbnailUrl: "/placeholders/photo-placeholder.svg",
    mediaUrls: [
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg"
    ]
  },

  // VIDEO PRODUCTION CATEGORY - Branded Marketing Video
  {
    id: 17,
    title: "Tech Startup Launch",
    description: "Dynamic promotional video showcasing innovative technology solutions and company culture.",
    category: 'video-production',
    section: 'branded-marketing-video',
    mediaType: 'hybrid',
    thumbnailUrl: "/placeholders/video-placeholder.svg",
    videoUrl: "https://vimeo.com/655932397",
    videoEmbedId: "655932397",
    mediaUrls: [
      "/placeholders/video-placeholder.svg",
      "/placeholders/video-placeholder.svg",
      "/placeholders/video-placeholder.svg",
      "/placeholders/video-placeholder.svg"
    ]
  },
  {
    id: 18,
    title: "Restaurant Brand Story",
    description: "Cinematic brand film capturing the passion and artistry behind a local culinary experience.",
    category: 'video-production',
    section: 'branded-marketing-video',
    mediaType: 'video',
    thumbnailUrl: "/placeholders/video-placeholder.svg",
    videoUrl: "https://vimeo.com/655932397",
    videoEmbedId: "655932397"
  },
  {
    id: 19,
    title: "Fitness Brand Campaign",
    description: "High-energy promotional video highlighting personal transformation and community spirit.",
    category: 'video-production',
    section: 'branded-marketing-video',
    mediaType: 'video',
    thumbnailUrl: "/placeholders/video-placeholder.svg",
    videoUrl: "https://vimeo.com/655932397",
    videoEmbedId: "655932397"
  },
  {
    id: 20,
    title: "Architecture Firm Showcase",
    description: "Professional video highlighting architectural excellence and design philosophy.",
    category: 'video-production',
    section: 'branded-marketing-video',
    mediaType: 'video',
    thumbnailUrl: "/placeholders/video-placeholder.svg",
    videoUrl: "https://vimeo.com/655932397",
    videoEmbedId: "655932397"
  },

  // VIDEO PRODUCTION CATEGORY - Training Videos
  {
    id: 21,
    title: "Software Onboarding Series",
    description: "Comprehensive training video series for new employee orientation and software adoption.",
    category: 'video-production',
    section: 'training-videos',
    mediaType: 'video',
    thumbnailUrl: "/placeholders/video-placeholder.svg",
    videoUrl: "https://vimeo.com/655932397",
    videoEmbedId: "655932397"
  },
  {
    id: 22,
    title: "Safety Protocol Training",
    description: "Essential workplace safety training videos with clear demonstrations and procedures.",
    category: 'video-production',
    section: 'training-videos',
    mediaType: 'video',
    thumbnailUrl: "/placeholders/video-placeholder.svg",
    videoUrl: "https://vimeo.com/655932397",
    videoEmbedId: "655932397"
  },
  {
    id: 23,
    title: "Product Tutorial Series",
    description: "Step-by-step instructional videos for product setup, usage, and troubleshooting.",
    category: 'video-production',
    section: 'training-videos',
    mediaType: 'video',
    thumbnailUrl: "/placeholders/video-placeholder.svg",
    videoUrl: "https://vimeo.com/655932397",
    videoEmbedId: "655932397"
  },

  // VIDEO PRODUCTION CATEGORY - Podcasts
  {
    id: 24,
    title: "Business Leadership Podcast",
    description: "Multi-camera podcast production featuring industry leaders and thought-provoking discussions.",
    category: 'video-production',
    section: 'podcasts',
    mediaType: 'video',
    thumbnailUrl: "/placeholders/video-placeholder.svg",
    videoUrl: "https://vimeo.com/655932397",
    videoEmbedId: "655932397"
  },
  {
    id: 25,
    title: "Creative Arts Interview Series",
    description: "Intimate podcast sessions with local artists, musicians, and creative professionals.",
    category: 'video-production',
    section: 'podcasts',
    mediaType: 'video',
    thumbnailUrl: "/placeholders/video-placeholder.svg",
    videoUrl: "https://vimeo.com/655932397",
    videoEmbedId: "655932397"
  },

  // VIDEO PRODUCTION CATEGORY - Corporate Events
  {
    id: 26,
    title: "Annual Company Conference",
    description: "Multi-day corporate event documentation with keynote speeches and networking highlights.",
    category: 'video-production',
    section: 'corporate-events',
    mediaType: 'video',
    thumbnailUrl: "/placeholders/video-placeholder.svg",
    videoUrl: "https://vimeo.com/655932397",
    videoEmbedId: "655932397"
  },
  {
    id: 27,
    title: "Product Launch Event",
    description: "Dynamic coverage of new product unveiling with executive presentations and live demos.",
    category: 'video-production',
    section: 'corporate-events',
    mediaType: 'video',
    thumbnailUrl: "/placeholders/video-placeholder.svg",
    videoUrl: "https://vimeo.com/655932397",
    videoEmbedId: "655932397"
  },
  {
    id: 28,
    title: "Industry Awards Ceremony",
    description: "Elegant documentation of recognition ceremony with speeches and celebration moments.",
    category: 'video-production',
    section: 'corporate-events',
    mediaType: 'video',
    thumbnailUrl: "/placeholders/video-placeholder.svg",
    videoUrl: "https://vimeo.com/655932397",
    videoEmbedId: "655932397"
  },

  // VIDEO PRODUCTION CATEGORY - Personal Events
  {
    id: 29,
    title: "50th Anniversary Celebration",
    description: "Heartwarming documentation of golden anniversary party with family tributes and memories.",
    category: 'video-production',
    section: 'personal-events',
    mediaType: 'video',
    thumbnailUrl: "/placeholders/video-placeholder.svg",
    videoUrl: "https://vimeo.com/655932397",
    videoEmbedId: "655932397"
  },
  {
    id: 30,
    title: "Graduation Party Highlights",
    description: "Celebratory video capturing the joy and achievement of educational milestone.",
    category: 'video-production',
    section: 'personal-events',
    mediaType: 'video',
    thumbnailUrl: "/placeholders/video-placeholder.svg",
    videoUrl: "https://vimeo.com/655932397",
    videoEmbedId: "655932397"
  },
  {
    id: 31,
    title: "Birthday Milestone Video",
    description: "Special birthday celebration documentation with friends, family, and memorable moments.",
    category: 'video-production',
    section: 'personal-events',
    mediaType: 'video',
    thumbnailUrl: "/placeholders/video-placeholder.svg",
    videoUrl: "https://vimeo.com/655932397",
    videoEmbedId: "655932397"
  },

  // WEDDINGS CATEGORY - Mix of photo, video, and hybrid
  {
    id: 32,
    title: "Aaron & Raiven's Wedding",
    description: "Romantic ceremony celebrating love with beautiful moments captured in elegant settings and natural lighting.",
    category: 'weddings',
    section: 'wedding-photo-video',
    mediaType: 'photo',
    thumbnailUrl: "/_Projects/03_ Aaron_Raiven_Wedding/3I1A0575.webp",
    mediaUrls: [
      "/_Projects/03_ Aaron_Raiven_Wedding/3I1A0575.webp",
      "/_Projects/03_ Aaron_Raiven_Wedding/3I1A0577.webp",
      "/_Projects/03_ Aaron_Raiven_Wedding/P1171951.webp"
    ]
  },
  {
    id: 33,
    title: "Emma & David's Wedding Film",
    description: "Cinematic wedding video capturing every emotional moment of their perfect day.",
    category: 'weddings',
    section: 'wedding-photo-video',
    mediaType: 'video',
    thumbnailUrl: "/placeholders/video-placeholder.svg",
    videoUrl: "https://vimeo.com/655932397",
    videoEmbedId: "655932397"
  },
  {
    id: 34,
    title: "Elegant Wedding Ceremony",
    description: "Beautiful wedding celebration with intimate moments and stunning photography capturing the joy of the special day.",
    category: 'weddings',
    section: 'wedding-photo-video',
    mediaType: 'photo',
    thumbnailUrl: "/_Projects/04_Unknown_Wedding/IMG_5586.webp",
    mediaUrls: [
      "/_Projects/04_Unknown_Wedding/IMG_5586.webp",
      "/_Projects/04_Unknown_Wedding/IMG_5613.webp"
    ]
  },
  {
    id: 35,
    title: "Classic Church Wedding Complete",
    description: "Full wedding documentation including ceremony photos, reception video, and highlight reel.",
    category: 'weddings',
    section: 'wedding-photo-video',
    mediaType: 'hybrid',
    thumbnailUrl: "/placeholders/photo-placeholder.svg",
    mediaUrls: [
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg"
    ],
    videoUrl: "https://vimeo.com/655932397",
    videoEmbedId: "655932397"
  },
  {
    id: 36,
    title: "Mountain Top Elopement",
    description: "Adventurous couple's intimate ceremony with breathtaking mountain vistas and natural lighting.",
    category: 'weddings',
    section: 'wedding-photo-video',
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
    id: 37,
    title: "Vintage Barn Wedding Complete",
    description: "Rustic celebration with vintage charm - complete photo and video documentation package.",
    category: 'weddings',
    section: 'wedding-photo-video',
    mediaType: 'hybrid',
    thumbnailUrl: "/placeholders/photo-placeholder.svg",
    mediaUrls: [
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg"
    ],
    videoUrl: "https://vimeo.com/655932397",
    videoEmbedId: "655932397"
  },
  {
    id: 38,
    title: "Destination Wedding Video",
    description: "Exotic destination wedding film capturing the romance and adventure of overseas celebration.",
    category: 'weddings',
    section: 'wedding-photo-video',
    mediaType: 'video',
    thumbnailUrl: "/placeholders/video-placeholder.svg",
    videoUrl: "https://vimeo.com/655932397",
    videoEmbedId: "655932397"
  },
  {
    id: 39,
    title: "City Hall Intimate Wedding",
    description: "Small, intimate ceremony documentation with emotional moments and urban backdrop.",
    category: 'weddings',
    section: 'wedding-photo-video',
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
    id: 40,
    title: "Grand Ballroom Wedding Complete",
    description: "Elegant ballroom celebration with full photo and cinematic video documentation.",
    category: 'weddings',
    section: 'wedding-photo-video',
    mediaType: 'hybrid',
    thumbnailUrl: "/placeholders/photo-placeholder.svg",
    mediaUrls: [
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg",
      "/placeholders/photo-placeholder.svg"
    ],
    videoUrl: "https://vimeo.com/655932397",
    videoEmbedId: "655932397"
  },
  {
    id: 41,
    title: "Backyard Wedding Celebration",
    description: "Charming home wedding with personal touches and intimate family gathering.",
    category: 'weddings',
    section: 'wedding-photo-video',
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
    id: 42,
    title: "Winery Wedding Video",
    description: "Romantic vineyard wedding film showcasing the natural beauty and elegant atmosphere.",
    category: 'weddings',
    section: 'wedding-photo-video',
    mediaType: 'video',
    thumbnailUrl: "/placeholders/video-placeholder.svg",
    videoUrl: "https://vimeo.com/655932397",
    videoEmbedId: "655932397"
  }
]