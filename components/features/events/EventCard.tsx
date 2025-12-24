"use client";

import { motion } from "framer-motion";
import { format } from "date-fns";
import type { Event } from "@/config/events";

interface EventCardProps {
  event: Event;
  index: number;
}

export default function EventCard({ event, index }: EventCardProps) {
  const day = format(event.date, "d");
  const month = format(event.date, "MMM");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl bg-background shadow-lg ring-1 ring-border transition-all duration-300 hover:shadow-2xl hover:ring-primary/50 hover:-translate-y-1"
    >
      {/* Vibrant Glow Effect on Hover */}
      <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-75" />

      <div className="relative flex flex-col sm:flex-row">
        {/* Date Section with Vibrant Gradient */}
        <div className="relative flex-shrink-0 overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary p-6 text-white sm:w-32">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          
          <div className="relative z-10 flex flex-col items-center justify-center">
            <div className="text-4xl font-bold drop-shadow-lg">{day}</div>
            <div className="mt-1 text-sm font-semibold uppercase tracking-wider drop-shadow-md">
              {month}
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="relative z-10 flex flex-1 flex-col p-6">
          <h3 className="text-xl font-bold text-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary">
            {event.title}
          </h3>
          <div className="mt-4 space-y-2">
            <div className="flex items-center text-sm text-muted-foreground">
              <svg
                className="mr-2 h-5 w-5 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{event.time}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <svg
                className="mr-2 h-5 w-5 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <span>{event.location}</span>
            </div>
          </div>
          {event.description && (
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              {event.description}
            </p>
          )}
        </div>
      </div>

      {/* Hover Effect Border with Glow */}
      <div className="absolute inset-0 rounded-xl ring-2 ring-transparent transition-all duration-300 group-hover:ring-primary/50 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]" />
    </motion.div>
  );
}

