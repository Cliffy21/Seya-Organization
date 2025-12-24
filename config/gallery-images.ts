// Gallery Images Configuration
// Replace these with actual images from your gallery

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  category?: string;
}

// Sample gallery images - Replace with actual images
// Using Unsplash images relevant to youth empowerment, community, and activities
export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
    alt: "Youth community gathering",
    title: "Community Gathering",
    category: "Events",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop",
    alt: "Youth education session",
    title: "Education Session",
    category: "Education",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop",
    alt: "Community development activity",
    title: "Community Development",
    category: "Activities",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
    alt: "Youth sports event",
    title: "Sports Event",
    category: "Sports",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    alt: "Teamwork and collaboration",
    title: "Team Collaboration",
    category: "Activities",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
    alt: "Youth art workshop",
    title: "Art Workshop",
    category: "Arts",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    alt: "Youth leadership training",
    title: "Leadership Training",
    category: "Education",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
    alt: "Community celebration",
    title: "Community Celebration",
    category: "Events",
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
    alt: "Youth film project",
    title: "Film Project",
    category: "Arts",
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
    alt: "Outdoor community activity",
    title: "Outdoor Activity",
    category: "Activities",
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1528607929212-2636ec44253e?w=800&h=600&fit=crop",
    alt: "Youth meeting discussion",
    title: "Youth Meeting",
    category: "Events",
  },
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
    alt: "Community service project",
    title: "Community Service",
    category: "Activities",
  },
];

