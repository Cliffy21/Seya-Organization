// Hero Slideshow Configuration
// Replace these URLs with actual images from your website or upload images to /public/images/hero/

export interface HeroSlide {
  id: number;
  image: string;
  alt: string;
}

// Option 1: Using external URLs (Unsplash - for demonstration only)
export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop",
    alt: "Youth community gathering",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&h=1080&fit=crop",
    alt: "Youth empowerment and education",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1920&h=1080&fit=crop",
    alt: "Community development activities",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&h=1080&fit=crop",
    alt: "Youth sports and recreation",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop",
    alt: "Teamwork and collaboration",
  },
];

// Option 2: Using local images (recommended for production)
// To use local images:
// 1. Upload images to /public/images/hero/
// 2. Uncomment and update the array below
// 3. Comment out the external URLs array above

// export const heroSlides: HeroSlide[] = [
//   {
//     id: 1,
//     image: "/images/hero/community-gathering.jpg",
//     alt: "Youth community gathering",
//   },
//   {
//     id: 2,
//     image: "/images/hero/youth-education.jpg",
//     alt: "Youth empowerment and education",
//   },
//   {
//     id: 3,
//     image: "/images/hero/community-development.jpg",
//     alt: "Community development activities",
//   },
//   {
//     id: 4,
//     image: "/images/hero/youth-sports.jpg",
//     alt: "Youth sports and recreation",
//   },
//   {
//     id: 5,
//     image: "/images/hero/teamwork.jpg",
//     alt: "Teamwork and collaboration",
//   },
// ];

