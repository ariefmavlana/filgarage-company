import ProjectsHero from "../components/projectspage/ProjectsHero";
import ProjectsGallery from "../components/projectspage/ProjectsGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Hasil Kerja | FIL GARAGE - Gallery Auto Care Bandung",
  description: "Lihat portfolio dan hasil kerja FIL GARAGE: nano coating, paint protection film, auto detailing, dan modifikasi mobil. Gallery lengkap sebelum dan sesudah perawatan di Bandung.",
  keywords: "portfolio fil garage, gallery nano coating bandung, hasil kerja auto detailing bandung, before after fil garage",
  openGraph: {
    title: "Portfolio & Hasil Kerja | FIL GARAGE - Gallery Auto Care Bandung",
    description: "Lihat portfolio dan hasil kerja FIL GARAGE: nano coating, paint protection film, auto detailing, dan modifikasi mobil. Gallery lengkap sebelum dan sesudah perawatan di Bandung.",
    url: "https://filgarageautocare.com/projects",
    siteName: "FIL GARAGE",
    type: "website",
  },
  alternates: {
    canonical: "https://filgarageautocare.com/projects",
  },
};

export default function Projects() {
  return (
    <main className="font-inter">
      <ProjectsHero />
      <ProjectsGallery />
    </main>
  );
}
