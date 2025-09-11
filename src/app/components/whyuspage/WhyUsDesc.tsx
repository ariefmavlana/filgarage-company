"use client";

import {
  FaCheckCircle,
  FaStar,
  FaShieldAlt,
  FaUsers,
  FaAward,
} from "react-icons/fa";

export default function WhyUsDesc() {
  const reasons = [
    {
      title: "Komitmen terhadap Kepuasan Pelanggan",
      desc: "Fil Garage memiliki kebijakan layanan purna jual yang baik, siap membantu dan menyelesaikan masalah jika ada ketidakpuasan terhadap hasil layanan.",
      icon: <FaUsers className="w-8 h-8" />,
    },
    {
      title: "Ulasan Positif dari Pelanggan",
      desc: "Banyak pelanggan yang memberikan ulasan positif tentang Fil Garage, menunjukkan tingkat kepuasan yang tinggi dan kepercayaan terhadap layanan yang diberikan.",
      icon: <FaStar className="w-8 h-8" />,
    },
    {
      title: "Profesionalisme dan Keahlian",
      desc: "Fil Garage memiliki teknisi yang berpengalaman dan terlatih dalam berbagai jenis treatment mobil, memastikan setiap layanan dilakukan dengan standar profesional tinggi.",
      icon: <FaShieldAlt className="w-8 h-8" />,
    },
    {
      title: "Material dan Produk Berkualitas",
      desc: "Fil Garage menggunakan bahan dan produk berkualitas tinggi dalam setiap treatment, menjamin hasil yang tahan lama dan memuaskan.",
      icon: <FaAward className="w-8 h-8" />,
    },
  ];

  return (
    <section className="w-full py-20 px-4 md:px-12 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements - no rounded corners */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 text-sm font-medium mb-6 shadow-lg border-2 border-primary">
          <FaCheckCircle className="w-4 h-4" />
          Mengapa Memilih Kami
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight font-bebas">
          Keunggulan FIL GARAGE
        </h2>

        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Alasan kenapa pelanggan mempercayai kami sebagai partner terbaik untuk
          perawatan kendaraan Anda
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 relative z-10">
        {reasons.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary hover:border-l-8 hover:-translate-y-2"
          >
            {/* Gradient background on hover */}
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
              {/* Icon with primary background - no rounded corners */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors uppercase">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                {item.desc}
              </p>
            </div>

            {/* Decorative corner - no rounded corners */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 opacity-50"></div>
          </div>
        ))}
      </div>

      {/* Bottom CTA section - no rounded corners */}
      <div className="max-w-7xl mx-auto text-center mt-16 relative z-10">
        <div className="bg-primary p-12 shadow-2xl text-white border-4 border-primary/80">
          <h3 className="text-2xl md:text-4xl font-bold mb-6 font-bebas">
            Siap Memberikan Layanan Terbaik untuk Kendaraan Anda
          </h3>
          <p className="text-white/90 mb-8 text-lg md:text-xl leading-relaxed">
            Bergabunglah dengan ribuan pelanggan yang telah merasakan kepuasan
            layanan Fil Garage
          </p>
          <a
            href="https://wa.me/6287776734038?text=Halo%2C%20saya%20ingin%20booking%20layanan%20di%20FIL%20GARAGE.%20Boleh%20dibantu%3F"
            target="_blank"
            className="bg-white text-primary px-12 py-4 font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl uppercase text-lg border-2 border-white hover:border-gray-100"
          >
            Hubungi Kami Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
