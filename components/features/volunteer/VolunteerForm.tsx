"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";

const volunteerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().optional(),
  wantToVolunteer: z.boolean().refine((val) => val === true, {
    message: "Please confirm that you want to volunteer",
  }),
});

type VolunteerFormData = z.infer<typeof volunteerSchema>;

export default function VolunteerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<VolunteerFormData>({
    resolver: zodResolver(volunteerSchema),
    defaultValues: {
      wantToVolunteer: false,
    },
  });

  const onSubmit = async (data: VolunteerFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create email content
      const emailSubject = encodeURIComponent("New Volunteer Application");
      const emailBody = encodeURIComponent(
        `New Volunteer Application\n\n` +
          `Name: ${data.name}\n` +
          `Email: ${data.email}\n` +
          `Phone: ${data.phone}\n` +
          `Want to Volunteer: Yes\n` +
          `${data.message ? `Message: ${data.message}\n` : ""}`
      );

      // Open email client with pre-filled information
      window.location.href = `mailto:info@seyayouth.org?subject=${emailSubject}&body=${emailBody}`;

      // For better UX, also show success message
      setSubmitStatus("success");
      reset();
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-2xl"
    >
      <div className="rounded-2xl bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-8 ring-1 ring-border backdrop-blur-sm">
        <h2 className="mb-6 text-2xl font-bold text-foreground">
          Volunteer Application
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
              Full Name *
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
              Email Address *
            </label>
            {errors.email && (
              <p className="mt-1 text-sm text-destructive">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone Field */}
          <div className="relative">
            <input
              {...register("phone")}
              type="tel"
              placeholder=" "
              className="peer w-full rounded-lg border-2 border-border bg-background px-4 pt-6 pb-2 text-foreground transition-all focus:border-primary focus:outline-none"
            />
            <label
              className={`absolute left-4 top-2 text-sm font-medium text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary ${
                errors.phone ? "text-destructive" : ""
              }`}
            >
              Phone Number *
            </label>
            {errors.phone && (
              <p className="mt-1 text-sm text-destructive">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Message Field (Optional) */}
          <div className="relative">
            <textarea
              {...register("message")}
              placeholder=" "
              rows={4}
              className="peer w-full resize-none rounded-lg border-2 border-border bg-background px-4 pt-6 pb-2 text-foreground transition-all focus:border-primary focus:outline-none"
            />
            <label className="absolute left-4 top-2 text-sm font-medium text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary">
              Additional Message (Optional)
            </label>
          </div>

          {/* Checkbox */}
          <div className="flex items-start">
            <div className="flex h-5 items-center">
              <input
                {...register("wantToVolunteer")}
                type="checkbox"
                id="wantToVolunteer"
                className="h-4 w-4 rounded border-border text-primary focus:ring-primary focus:ring-offset-0"
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="wantToVolunteer"
                className={`font-medium ${
                  errors.wantToVolunteer ? "text-destructive" : "text-foreground"
                }`}
              >
                I want to be a volunteer *
              </label>
              {errors.wantToVolunteer && (
                <p className="mt-1 text-sm text-destructive">
                  {errors.wantToVolunteer.message}
                </p>
              )}
            </div>
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
                Submitting...
              </span>
            ) : (
              "Submit Application"
            )}
          </button>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-lg bg-success/10 p-4 text-sm text-success"
            >
              Thank you for your interest! Your email client should open with
              the pre-filled application. If it doesn't, please email us at
              info@seyayouth.org with your details.
            </motion.div>
          )}
          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-lg bg-destructive/10 p-4 text-sm text-destructive"
            >
              Something went wrong. Please email us directly at
              info@seyayouth.org.
            </motion.div>
          )}
        </form>
      </div>
    </motion.div>
  );
}


