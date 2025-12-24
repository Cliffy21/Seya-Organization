import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campaigns",
  description:
    "Explore SEYA Youth Organization campaigns and initiatives for youth empowerment in Mombasa County, Kenya.",
};

export default function CampaignsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Our Campaigns
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Learn about our ongoing campaigns and initiatives to empower youth in
          Mombasa County.
        </p>
      </div>

      <div className="mt-16">
        <div className="rounded-xl bg-muted p-12 text-center">
          <p className="text-lg text-muted-foreground">
            Campaign information coming soon. Check back later for updates on
            our youth empowerment campaigns.
          </p>
        </div>
      </div>
    </div>
  );
}


