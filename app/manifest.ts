import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SEYA Youth Organization",
    short_name: "SEYA",
    description:
      "Empowering youth economically through sports, art, and film in Mombasa County, Kenya.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/logo1.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}

