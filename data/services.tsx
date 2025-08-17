import { Camera, Heart, Users } from "lucide-react";

export const services = [
  {
    title: "Portrait",
    description: "Explore Personal Photography",
    href: "/services/portrait",
    image: "/_Projects/02_Lauren_SP/Lauren+Senior-70.webp",
  },
  {
    title: "Corporate",
    description: "Discover Corporate Solutions",
    href: "/services/commercial",
    image: "/_Projects/06_Alfred_Real_Estate/234Alfred-16.webp",
  },
  {
    title: "Wedding",
    description: "Capture Your Special Day",
    href: "/services/wedding",
    image: "/_Projects/04_Unknown_Wedding/IMG_5586.webp",
  },
];

export const homeServiceCardData = [
  {
    icon: () => <Camera className="h-8 w-8" />,
    title: "Portrait Photography",
    description: "Individual, family, and senior portraits",
    price: "Starting at $200",
    href: "/services/portrait",
  },
  {
    icon: () => <Heart className="h-8 w-8" />,
    title: "Wedding Photography",
    description: "Complete wedding day coverage",
    price: "Starting at $1,500",
    href: "/services/wedding",
  },
  {
    icon: () => <Users className="h-8 w-8" />,
    title: "Commercial Photography",
    description: "Business and real estate photography",
    price: "Starting at $300",
    href: "/services/commercial",
  },
];
