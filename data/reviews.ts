export interface Review {
  id: number
  text: string
  name: string
  image: string
  service: string
}

export const reviews: Review[] = [
  {
    id: 1,
    text: "Absolutely stunning work! The attention to detail and artistic vision exceeded all our expectations.",
    name: "Sarah Johnson",
    image: "/placeholders/portrait-placeholder.svg",
    service: "Wedding"
  },
  {
    id: 2,
    text: "Professional, creative, and incredibly talented. Our corporate headshots look amazing!",
    name: "Michael Chen",
    image: "/placeholders/portrait-placeholder.svg",
    service: "Corporate"
  },
  {
    id: 3,
    text: "The portrait session was comfortable and fun. The final photos captured our family perfectly.",
    name: "Emma Davis",
    image: "/placeholders/portrait-placeholder.svg",
    service: "Portrait"
  },
  {
    id: 4,
    text: "Incredible eye for composition and lighting. Every shot tells a beautiful story.",
    name: "James Wilson",
    image: "/placeholders/portrait-placeholder.svg",
    service: "Wedding"
  }
]