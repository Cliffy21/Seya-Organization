// Blog Posts Configuration
// Using exact content from the current website

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: Date;
  category: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Mental health and well-being",
    excerpt:
      "Understanding the importance of mental health in youth development and community well-being.",
    content: `Mental health is a crucial aspect of overall well-being, especially for young people navigating the challenges of adolescence and early adulthood. At SEYA, we recognize the importance of providing support, resources, and safe spaces for youth to express themselves and seek help when needed.

Through our programs, we aim to raise awareness about mental health issues and reduce the stigma associated with seeking help. We provide educational resources, counseling support, and community-based activities that promote positive mental health.`,
    author: "seya",
    date: new Date(2026, 4, 11), // May 11, 2026
    category: "Education",
    slug: "mental-health-and-well-being",
  },
  {
    id: "2",
    title: "Youth Empowerment",
    excerpt:
      "Empowering the next generation through education, mentorship, and opportunities for growth.",
    content: `Youth empowerment is at the core of SEYA's mission. We believe that every young person has the potential to make a positive impact in their community when given the right tools, support, and opportunities.

Our youth empowerment programs focus on developing leadership skills, providing educational support, and creating pathways for economic independence. Through sports, arts, and film programs, we help youth discover their talents and build confidence.`,
    author: "seya",
    date: new Date(2026, 5, 11), // May 11, 2020
    category: "Education",
    slug: "youth-empowerment",
  },
  {
    id: "3",
    title:
      "The importance of community service and volunteerism in improving society",
    excerpt:
      "How community service and volunteerism create positive change and strengthen communities.",
    content: `Community service and volunteerism play a vital role in building stronger, more connected communities. When individuals come together to serve their community, they not only address immediate needs but also create lasting bonds and a sense of shared responsibility.

At SEYA, we encourage and facilitate community service activities that allow youth to contribute meaningfully to their communities. These experiences help young people develop empathy, leadership skills, and a deeper understanding of the challenges facing their communities.

Through volunteerism, youth learn the value of giving back and become active citizens committed to positive change. Our volunteer programs provide opportunities for youth to engage in meaningful service while developing valuable skills and connections.`,
    author: "seya",
    date: new Date(2026, 8, 8), // May 11, 2022 (corrected from 0202)
    category: "Family",
    slug: "importance-of-community-service-and-volunteerism",
  },
];

// Sort by date (newest first)
export const sortedBlogPosts = blogPosts.sort(
  (a, b) => b.date.getTime() - a.date.getTime()
);


