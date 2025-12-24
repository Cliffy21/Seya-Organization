# Hero Slideshow - Documentation

## Overview
The Hero section now features a beautiful image slideshow with smooth animations using Framer Motion.

## Features
- ✅ **Auto-rotating slideshow** - Changes every 5 seconds
- ✅ **Smooth transitions** - Framer Motion animations (fade + slide)
- ✅ **Navigation arrows** - Previous/Next buttons
- ✅ **Slide indicators** - Dots showing current slide
- ✅ **Pause on hover** - Slideshow pauses when user hovers
- ✅ **Slide counter** - Shows current slide number
- ✅ **Dark overlay** - Ensures text readability over images
- ✅ **Fully responsive** - Works on all devices
- ✅ **Optimized images** - Uses Next.js Image component

## Current Images
The slideshow currently uses sample images from Unsplash (for demonstration):
1. Youth community gathering
2. Youth empowerment and education
3. Community development activities
4. Youth sports and recreation
5. Teamwork and collaboration

## Replacing Images

### Option 1: Use Local Images (Recommended for Production)
1. Upload your images to `/public/images/hero/`
2. Edit `/config/hero-slides.ts`
3. Comment out the external URLs array
4. Uncomment and update the local images array:

```typescript
export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "/images/hero/your-image-1.jpg",
    alt: "Description of image 1",
  },
  // ... more images
];
```

### Option 2: Use External URLs
1. Edit `/config/hero-slides.ts`
2. Update the `heroSlides` array with your image URLs
3. Make sure to add the domain to `next.config.ts` in the `images.remotePatterns` array

### Image Recommendations
- **Resolution**: 1920x1080px or higher (16:9 aspect ratio works best)
- **File Format**: JPG or WebP
- **File Size**: Optimize images before uploading (< 500KB recommended)
- **Content**: Images should be relevant to SEYA's mission (youth, community, empowerment)

## Configuration
- **Auto-advance interval**: 5 seconds (can be changed in `Hero.tsx` line ~28)
- **Transition duration**: 0.8 seconds
- **Number of slides**: Currently 5 (can be modified in `config/hero-slides.ts`)

## Customization
To customize the slideshow behavior, edit `/components/sections/Hero.tsx`:
- Change auto-advance interval: Modify the interval duration (currently 5000ms)
- Adjust transition speed: Modify the transition duration (currently 0.8s)
- Change animation style: Modify the `initial`, `animate`, and `exit` props in the motion.div

