"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate form submission - Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form data:", data);
      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="rounded-2xl bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-8 ring-1 ring-border backdrop-blur-sm">
        <h2 className="mb-6 text-2xl font-bold text-foreground">
          Send us a Message
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <div className="relative">
            <input
              {...register("name")}
              type="text"
              placeholder=" "
              className="peer w-full rounded-lg border-2 border-border bg-background px-4 pt-6 pb-2 text-foreground transition-all focus:border-primary focus:outline-none"
            />
            <label
              className={`absolute left-4 top-2 text-sm font-medium text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary ${
                errors.name ? "text-destructive" : ""
              }`}
            >
              Your Name
            </label>
            {errors.name && (
              <p className="mt-1 text-sm text-destructive">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              {...register("email")}
              type="email"
              placeholder=" "
              className="peer w-full rounded-lg border-2 border-border bg-background px-4 pt-6 pb-2 text-foreground transition-all focus:border-primary focus:outline-none"
            />
            <label
              className={`absolute left-4 top-2 text-sm font-medium text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary ${
                errors.email ? "text-destructive" : ""
              }`}
            >
              Email Address
            </label>
            {errors.email && (
              <p className="mt-1 text-sm text-destructive">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Subject Field */}
          <div className="relative">
            <input
              {...register("subject")}
              type="text"
              placeholder=" "
              className="peer w-full rounded-lg border-2 border-border bg-background px-4 pt-6 pb-2 text-foreground transition-all focus:border-primary focus:outline-none"
            />
            <label
              className={`absolute left-4 top-2 text-sm font-medium text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary ${
                errors.subject ? "text-destructive" : ""
              }`}
            >
              Subject
            </label>
            {errors.subject && (
              <p className="mt-1 text-sm text-destructive">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              {...register("message")}
              placeholder=" "
              rows={6}
              className="peer w-full resize-none rounded-lg border-2 border-border bg-background px-4 pt-6 pb-2 text-foreground transition-all focus:border-primary focus:outline-none"
            />
            <label
              className={`absolute left-4 top-2 text-sm font-medium text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary ${
                errors.message ? "text-destructive" : ""
              }`}
            >
              Your Message
            </label>
            {errors.message && (
              <p className="mt-1 text-sm text-destructive">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-gradient-to-r from-primary to-secondary px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="mr-2 h-5 w-5 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-lg bg-success/10 p-4 text-sm text-success"
            >
              Message sent successfully! We'll get back to you soon.
            </motion.div>
          )}
          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-lg bg-destructive/10 p-4 text-sm text-destructive"
            >
              Something went wrong. Please try again.
            </motion.div>
          )}
        </form>
      </div>
    </motion.div>
  );
}

