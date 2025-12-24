import type { Metadata } from "next";
import VolunteerForm from "@/components/features/volunteer/VolunteerForm";

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Join SEYA Youth Organization as a volunteer and help create positive change in your community. Apply now to become a volunteer.",
};

export default function VolunteerPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Become A Volunteer
            </h1>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Join us in making a difference. Become a volunteer today and help
              create positive change in your community and beyond.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <VolunteerForm />
          </div>
        </div>
      </section>
    </div>
  );
}
