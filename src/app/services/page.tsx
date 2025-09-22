import OurServicesHero from "../components/servicespage/OurServicesHero";
import OurServicesDesc from "../components/servicespage/OurServicesDesc";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan Auto Care & Nano Coating | FIL GARAGE Bandung",
  description: "Layanan lengkap nano coating ceramic, paint protection film (PPF), rust protection, dan auto detailing di FIL GARAGE Bandung. Teknologi terdepan untuk perawatan mobil premium.",
  keywords: "nano coating bandung, paint protection film bandung, auto detailing bandung, rust protection bandung, fil garage services",
  openGraph: {
    title: "Layanan Auto Care & Nano Coating | FIL GARAGE Bandung",
    description: "Layanan lengkap nano coating ceramic, paint protection film (PPF), rust protection, dan auto detailing di FIL GARAGE Bandung. Teknologi terdepan untuk perawatan mobil premium.",
    url: "https://filgarageautocare.com/services",
    siteName: "FIL GARAGE",
    type: "website",
  },
  alternates: {
    canonical: "https://filgarageautocare.com/services",
  },
};

export default function Services() {
  return (
    <main className="font-inter">
      <OurServicesHero />
      <OurServicesDesc />
    </main>
  );
}
