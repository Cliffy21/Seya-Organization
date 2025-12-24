"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutMission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              About SEYA
            </h2>
            <h3 className="mt-4 text-2xl font-semibold text-primary">
              Empowered Youth for a Healthy Society
            </h3>
            <div className="mt-6 space-y-4 text-lg leading-8 text-muted-foreground">
              <p>
                SEYA Youth Organization is a youth-led Community-Based
                Organization, which was started on 3rd January 2017 as a youth
                club, with the aim of empowering youth economically through;
                sports, art and film.
              </p>
              <p>
                This was a way of preventing and combating runaway crime and
                gang-groups among youth residing in Jomvu and Changamwe sub
                counties, Mombasa County
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

