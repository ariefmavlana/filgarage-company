import PriceListDesc from "../components/pricelistpage/PriceListDesc";
import PriceListHero from "../components/pricelistpage/PriceListHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harga & Paket Layanan | FIL GARAGE - Nano Coating Bandung",
  description: "Lihat harga dan paket lengkap layanan nano coating, paint protection film, auto detailing, dan rust protection di FIL GARAGE Bandung. Harga transparan dan kompetitif.",
  keywords: "harga nano coating bandung, harga paint protection film bandung, paket auto detailing bandung, harga fil garage",
  openGraph: {
    title: "Harga & Paket Layanan | FIL GARAGE - Nano Coating Bandung",
    description: "Lihat harga dan paket lengkap layanan nano coating, paint protection film, auto detailing, dan rust protection di FIL GARAGE Bandung. Harga transparan dan kompetitif.",
    url: "https://filgarageautocare.com/pricelist",
    siteName: "FIL GARAGE",
    type: "website",
  },
  alternates: {
    canonical: "https://filgarageautocare.com/pricelist",
  },
};

export default function Pricelist() {
  return (
    <>
      <PriceListHero />
      <PriceListDesc />
    </>
  );
}
