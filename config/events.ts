// Events Configuration
// Using exact content from the current website

export interface Event {
  id: string;
  title: string;
  date: Date;
  time: string;
  location: string;
  description?: string;
  image?: string;
}

// Sort events by date (most recent first)
const sortedEvents: Event[] = [
  {
    id: "1",
    title: "Mombasa Changamwe Celebration",
    date: new Date(2024, 4, 13), // May 13, 2024 (month is 0-indexed)
    time: "12.00 AM",
    location: "Mombasa Kenya",
  },
  {
    id: "2",
    title: "Sun Africa Beach Resort Event",
    date: new Date(2024, 2, 31), // March 31, 2024
    time: "12.00 AM",
    location: "Sun Africa Beach Resort, Mombasa",
  },
].sort((a, b) => b.date.getTime() - a.date.getTime());

export const events: Event[] = sortedEvents;

