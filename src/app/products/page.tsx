import Image from "next/image";
import ProductDetails from "./ProductDetails";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produk Auto Care Premium | FIL GARAGE - Car Care Products Bandung",
  description: "Produk auto care premium FIL GARAGE: car shampoo, anti fungal, tire wax, dan water-based body shine. Produk berkualitas tinggi untuk perawatan mobil terbaik di Bandung.",
  keywords: "produk auto care bandung, car shampoo bandung, tire wax bandung, anti fungal mobil, fil garage products",
  openGraph: {
    title: "Produk Auto Care Premium | FIL GARAGE - Car Care Products Bandung",
    description: "Produk auto care premium FIL GARAGE: car shampoo, anti fungal, tire wax, dan water-based body shine. Produk berkualitas tinggi untuk perawatan mobil terbaik di Bandung.",
    url: "https://filgarageautocare.com/products",
    siteName: "FIL GARAGE",
    type: "website",
  },
  alternates: {
    canonical: "https://filgarageautocare.com/products",
  },
};

const PRODUCTS = [
  {
    name: "Shampoo Mobil Premium",
    category: "Car Care",
    description: "Shampoo mobil pH-neutral berkualitas tinggi yang aman untuk semua jenis cat dan coating. Formulasi khusus untuk membersihkan kotoran tanpa merusak lapisan pelindung.",
    image: "/images/products/4.png",
    features: [
      "pH-neutral formula aman untuk coating dan wax",
      "High-foaming untuk pembersihan maksimal",
      "Gentle pada cat dan trim mobil",
      "Menghilangkan kotoran membandel tanpa menggores",
      "Meninggalkan lapisan pelindung tipis",
      "Cocok untuk semua jenis kendaraan",
    ],
    usage: "Campurkan 1-2 tutup ke 5L air bersih. Cuci dengan wash mitt atau spons lembut, bilas dengan air mengalir, dan keringkan dengan microfiber. Hindari mencuci di bawah sinar matahari langsung.",
  },
  {
    name: "Anti Fungal Treatment",
    category: "Protection",
    description: "Solusi efektif untuk menghilangkan jamur, bakteri, dan bau apek pada interior mobil. Formulasi khusus yang aman untuk berbagai material interior.",
    image: "/images/products/2.png",
    features: [
      "Menghilangkan jamur dan bakteri interior",
      "Mencegah bau apek dan kelembapan",
      "Aman untuk kulit, plastik, dan material interior",
      "Formula non-abrasif dan tidak merusak",
      "Efektif pada kaca berkabut",
      "Aroma segar dan tahan lama",
    ],
    usage: "Semprotkan tipis pada area terdampak jamur atau bau. Diamkan 2-3 menit, kemudian lap bersih dengan microfiber. Untuk hasil optimal, gunakan di area berventilasi baik.",
  },
  {
    name: "Tire Shine Premium",
    category: "Protection",
    description: "Semir ban berkualitas tinggi yang memberikan kilau hitam satin tahan lama. Formulasi khusus untuk melindungi ban dari sinar UV dan elemen cuaca.",
    image: "/images/products/6.png",
    features: [
      "Finish hitam satin premium",
      "Tidak lengket dan tidak mengumpulkan debu",
      "Tahan lama hingga 2-3 minggu",
      "Melindungi dari sinar UV dan cuaca",
      "Mudah diaplikasi dan tidak berlebihan",
      "Aman untuk semua jenis ban",
    ],
    usage: "Aplikasikan pada ban yang bersih dan kering menggunakan aplikator busa atau sikat ban. Oleskan secara merata, biarkan mengering 10-15 menit. Hindari aplikasi pada tread ban.",
  },
  {
    name: "Water-Based Body Shine",
    category: "Car Care",
    description: "Quick detailer berbasis air untuk memberikan kilau instan pada body mobil. Formula pH-neutral yang aman untuk semua jenis finishing cat.",
    image: "/images/products/1.png",
    features: [
      "Gloss cepat dan kilau instan",
      "Aman untuk finishing matte dan glossy",
      "Water-based formula mudah diaplikasi",
      "Tidak meninggalkan residu lengket",
      "Menghilangkan debu dan sidik jari",
      "Cocok untuk maintenance harian",
    ],
    usage: "Semprotkan tipis pada panel mobil yang bersih. Seka dengan microfiber hingga kilap sempurna. Dapat digunakan pada permukaan kering atau basah. Hindari aplikasi di bawah sinar matahari langsung.",
  },
];

export default function ProductsPage() {
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP || "6281312200142";
  const waText = encodeURIComponent("Halo Fil Garage, saya tertarik dengan produk Anda.");
  const waLink = `https://wa.me/${waNumber}?text=${waText}`;
  return (
    <main className="font-inter min-h-screen bg-black text-white">
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-archivo-black mb-6">Produk Premium</h1>
          <p className="text-white/70 mb-8 text-lg">Produk auto care berkualitas tinggi dari FIL GARAGE untuk perawatan mobil yang sempurna. Formulasi khusus yang aman dan efektif untuk semua jenis kendaraan.</p>

          <div className="mb-8 rounded border border-white/10 bg-white/5 p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="text-white/80">
                Lihat paket layanan dan harga lengkap kami.
              </div>
              <a
                href="/pricelist"
                className="inline-block px-4 py-2 bg-white text-black hover:bg-white/90 font-semibold transition-colors"
              >
                Lihat Price List
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {PRODUCTS.map((p) => (
              <div key={p.name} className="bg-white/95 text-gray-900 rounded-lg overflow-hidden shadow">
                {p.image && (
                  <div className="relative w-full h-52 sm:h-44">
                    <Image src={p.image} alt={p.name} fill className="object-cover" />
                  </div>
                )}
                <div className="p-4 sm:p-5">
                  <h3 className="font-semibold text-base sm:text-lg">{p.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{p.category}</p>
                  <p className="text-sm mt-3 text-gray-700">{p.description}</p>
                  <ProductDetails name={p.name} features={p.features} usage={p.usage} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-white/70 text-lg mb-4">Tertarik dengan produk kami?</p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
            >
              Konsultasi via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

