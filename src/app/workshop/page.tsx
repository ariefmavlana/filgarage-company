import WorkshopHero from "../components/workshoppage/WorkshopHero";
import WorkshopMap from "../components/workshoppage/WorkshopMap";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshop & Lokasi | FIL GARAGE - Auto Care Bandung",
  description: "Kunjungi workshop FIL GARAGE di Bandung untuk layanan nano coating, auto detailing, dan paint protection film. Lokasi strategis dengan fasilitas lengkap dan tim profesional.",
  keywords: "workshop fil garage bandung, lokasi auto care bandung, bengkel nano coating bandung, alamat fil garage",
  openGraph: {
    title: "Workshop & Lokasi | FIL GARAGE - Auto Care Bandung",
    description: "Kunjungi workshop FIL GARAGE di Bandung untuk layanan nano coating, auto detailing, dan paint protection film. Lokasi strategis dengan fasilitas lengkap dan tim profesional.",
    url: "https://filgarageautocare.com/workshop",
    siteName: "FIL GARAGE",
    type: "website",
  },
  alternates: {
    canonical: "https://filgarageautocare.com/workshop",
  },
};

export default function Workshop() {
  return (
    <main>
      <WorkshopHero />
      <WorkshopMap />
    </main>
  );
}
