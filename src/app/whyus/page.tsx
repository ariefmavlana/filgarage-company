import WhyUsDesc from "../components/whyuspage/WhyUsDesc";
import WhyUsHero from "../components/whyuspage/WhyUsHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mengapa Pilih FIL GARAGE? | Keunggulan Auto Care Bandung",
  description: "Mengapa FIL GARAGE menjadi pilihan terbaik untuk nano coating dan auto care di Bandung? Teknologi terdepan, tim berpengalaman, dan garansi berkualitas untuk hasil maksimal.",
  keywords: "mengapa pilih fil garage, keunggulan nano coating bandung, auto care terbaik bandung, fil garage keunggulan",
  openGraph: {
    title: "Mengapa Pilih FIL GARAGE? | Keunggulan Auto Care Bandung",
    description: "Mengapa FIL GARAGE menjadi pilihan terbaik untuk nano coating dan auto care di Bandung? Teknologi terdepan, tim berpengalaman, dan garansi berkualitas untuk hasil maksimal.",
    url: "https://filgarageautocare.com/whyus",
    siteName: "FIL GARAGE",
    type: "website",
  },
  alternates: {
    canonical: "https://filgarageautocare.com/whyus",
  },
};

export default function Whyus() {
  return (
    <main>
      <WhyUsHero />
      <WhyUsDesc />
    </main>
  );
}
