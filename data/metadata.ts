import { Metadata } from "next";

export const siteConfig = {
  name: "tmichael3.studio",
  title: "tmichael3.studio | Professional Photography & Videography",
  description:
    "Professional photography and videography services specializing in portraits, weddings, and commercial work. Creating timeless visual narratives that preserve precious moments.",
  url: "https://tmichael3.studio",
  creator: "TJ Michael",
  twitterHandle: "@tmichael3studio",
  keywords: [
    "photography",
    "videography",
    "portraits",
    "weddings",
    "commercial photography",
    "professional photographer",
  ],
};

export const siteMetadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: "%s | tmichael3.studio",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.creator }],
  creator: siteConfig.creator,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Helper for generating page-specific metadata
export function generatePageMetadata(overrides: Partial<Metadata>): Metadata {
  return { ...siteMetadata, ...overrides };
}
