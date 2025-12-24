"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import EventCard from "@/components/features/events/EventCard";
import { events } from "@/config/events";

export default function EventsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Our Events Info
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg leading-8 text-muted-foreground"
          >
            Join us for our upcoming events and activities
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-16 max-w-4xl space-y-6"
        >
          {events.length > 0 ? (
            events.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))
          ) : (
            <div className="rounded-xl bg-muted p-12 text-center">
              <p className="text-lg text-muted-foreground">
                No upcoming events at the moment. Check back soon!
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

