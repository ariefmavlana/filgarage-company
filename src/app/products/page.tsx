import Image from "next/image";
import ProductDetails from "./ProductDetails";

const PRODUCTS = [
  {
    name: "Car Shampoo",
    category: "Car Care",
    description: "pH-neutral shampoo for safe, effective cleaning.",
    image: "/images/services/autodetailing_img.png",
    features: [
      "Safe for coatings and wax",
      "High-foaming rinse",
      "Gentle on paint and trim",
    ],
    usage: "Campurkan 1-2 tutup ke 5L air, cuci dengan wash mitt, bilas dan keringkan.",
  },
  {
    name: "Anti Fungal",
    category: "Protection",
    description: "Interior anti-fungal treatment to keep cabins fresh.",
    image: "/images/services/nanocoating_img.png",
    features: [
      "Menghilangkan jamur interior",
      "Mencegah bau apek",
      "Aman untuk kebanyakan material",
    ],
    usage: "Semprotkan tipis pada area terdampak, diamkan 2-3 menit, lap bersih.",
  },
  {
    name: "Tire Wax",
    category: "Protection",
    description: "Long-lasting tire shine with protective finish.",
    image: "/images/services/paintprotection_img.png",
    features: [
      "Finish hitam satin",
      "Tidak lengket",
      "Tahan lama",
    ],
    usage: "Aplikasikan pada ban yang bersih dan kering menggunakan aplikator busa.",
  },
  {
    name: "Water-Based Body Shine",
    category: "Car Care",
    description: "Quick detailer for fast, glossy body shine.",
    image: "/images/services/filmprotection_img.png",
    features: [
      "Gloss cepat",
      "Aman untuk finishing matte (tipis)",
      "Water-based, mudah diaplikasi",
    ],
    usage: "Semprotkan tipis pada panel, seka dengan microfiber hingga kilap.",
  },
];

export default function ProductsPage() {
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP || "6287776734038";
  const waText = encodeURIComponent("Halo Fil Garage, saya tertarik dengan produk Anda.");
  const waLink = `https://wa.me/${waNumber}?text=${waText}`;
  return (
    <main className="font-inter min-h-screen bg-black text-white">
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-archivo-black mb-6">Products</h1>
          <p className="text-white/70 mb-8">Premium care and protection products to enhance your vehicle.</p>

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
          <p className="text-white/50 text-sm mt-6">Interested? Contact us to learn more.</p>
        </div>
      </section>
    </main>
  );
}

