"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ContactForm from "@/components/features/contact/ContactForm";
import ContactInfoCard from "@/components/features/contact/ContactInfoCard";

const contactInfo = [
  {
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    ),
    title: "Phone",
    content: "+254 736 734 138",
    href: "tel:+254736734138",
  },
  {
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
    title: "Email",
    content: "info@seyayouth.org",
    href: "mailto:info@seyayouth.org",
  },
  {
    icon: (
      <svg
        className="h-7 w-7"
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
    ),
    title: "Location",
    content: "Mombasa, Kenya - Mikindani off Amani - kwa mwaniza road.",
    href: undefined,
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg leading-8 text-muted-foreground"
          >
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </motion.p>
        </div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {contactInfo.map((info, index) => (
            <ContactInfoCard key={info.title} {...info} index={index} />
          ))}
        </motion.div>

        {/* Form and Additional Content */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <ContactForm />

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col justify-center space-y-8"
            >
              <div>
                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  Visit Us
                </h3>
                <p className="text-muted-foreground">
                  We're located in the heart of Mombasa, working directly with
                  communities in Jomvu and Changamwe sub counties. Come visit us
                  or reach out through any of the contact methods above.
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  Working Hours
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold text-foreground">
                      8:00 AM - 5:00 PM
                    </span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold text-foreground">
                      9:00 AM - 2:00 PM
                    </span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold text-foreground">Closed</span>
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  Connect With Us
                </h3>
                <div className="flex gap-4">
                  {[
                    {
                      name: "Facebook",
                      href: "#",
                      icon: "/facebook.png",
                    },
                    {
                      name: "Twitter",
                      href: "#",
                      icon: "/twitter.png",
                    },
                    {
                      name: "Instagram",
                      href: "#",
                      icon: "/instagram.png",
                    },
                    {
                      name: "YouTube",
                      href: "#",
                      icon: "/youtube.png",
                    },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-white ring-1 ring-border transition-all hover:scale-110 hover:shadow-lg hover:ring-primary/50"
                      aria-label={social.name}
                    >
                      <Image
                        src={social.icon}
                        alt={social.name}
                        width={24}
                        height={24}
                        className="h-6 w-6"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

