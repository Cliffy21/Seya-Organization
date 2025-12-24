"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Objective {
  title: string;
  description: string;
  icon: React.ReactNode;
  ctaText: string;
  ctaLink: string;
}

const objectives: Objective[] = [
  {
    title: "Empower youth",
    description:
      "Empower youth aged 9-24years for a healthy lifestyle through access to health information and services.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
        />
      </svg>
    ),
    ctaText: "Campaigns",
    ctaLink: "/campaigns",
  },
  {
    title: "Support youth",
    description:
      "Support youth to establish business and startups, to enable their economic sustainability when transiting to adult youth.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75m15.75 0v.75c0 .414-.336.75-.75.75h-.75m-1.5-1.5H18m0 0h.375c.621 0 1.125-.504 1.125-1.125V15m-1.5 1.5v-.75a.75.75 0 00-.75-.75H18m0 0h-.375c-.621 0-1.125.504-1.125 1.125v9.75c0 .621.504 1.125 1.125 1.125h.375M18 21v-3.375c0-.621-.504-1.125-1.125-1.125H15.75a.75.75 0 01-.75-.75v-.75m0 0h.375c.621 0 1.125-.504 1.125-1.125V15m-1.5 1.5H3.75m0 0h.375c.621 0 1.125-.504 1.125-1.125V15m1.5 1.5H3.75"
        />
      </svg>
    ),
    ctaText: "Volunteer",
    ctaLink: "/volunteer",
  },
];

export default function AboutObjectives() {
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
            Our Objectives
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg leading-8 text-muted-foreground"
          >
            Our Objectives are the driving force behind our organization. We are
            committed to achieving our goals of making a positive impact in the
            world through various initiatives and activities.
          </motion.p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {objectives.map((objective, index) => (
            <motion.div
              key={objective.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="flex flex-col justify-between rounded-xl bg-muted p-8 shadow-sm ring-1 ring-border transition-all hover:shadow-md"
            >
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {objective.icon}
                </div>
                <h3 className="text-xl font-semibold leading-8 text-foreground">
                  {objective.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  {objective.description}
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href={objective.ctaLink}
                  className="text-base font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  {objective.ctaText} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

