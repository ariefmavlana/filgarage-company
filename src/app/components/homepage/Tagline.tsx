"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Tagline() {
  return (
    <section className="w-full">
      {/* TAGLINE PARALLAX */}
      <div className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* BG Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/images/home/tagline/tagline_bg.jpeg')",
          }}
        ></div>

        {/* Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/40"></div>

        {/* Geometric Elements */}
        <div className="absolute top-20 left-20 w-24 h-24 border-2 border-white opacity-20"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-primary opacity-30"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-32 bg-white opacity-40"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center px-4 max-w-4xl"
        >
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl text-white mb-4 font-bebas tracking-wider">
            PLATINUM
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-primary mb-6 font-bebas">
            CARE
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 uppercase tracking-widest font-medium">
            Untuk Mobil Premium Anda
          </p>
        </motion.div>
      </div>

      {/* ABOUT US SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="w-full bg-white"
      >
        {/* SLOGAN SECTION */}
        <div className="bg-primary py-20 px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="max-w-6xl mx-auto text-center"
          >
            <div className="w-16 h-1 bg-white mx-auto mb-8"></div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-bebas leading-tight uppercase mb-8">
              mobil bagus,
              <br />
              perawatan <span className="text-gray-200">bagus</span>
            </h1>
            <p className="text-gray-200 text-lg lg:text-xl max-w-2xl mx-auto">
              Keunggulan dalam perawatan otomotif melalui keahlian profesional
              dan kualitas layanan premium
            </p>
          </motion.div>
        </div>

        {/* CONTENT SECTION */}
        <div className="py-20 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Kiri: Gambar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="w-full lg:w-3/5 relative"
            >
              <div className="relative overflow-hidden">
                <Image
                  src="/images/home/tagline/tagline_img.png"
                  alt="Professional Car Care"
                  width={600}
                  height={400}
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute top-0 right-0 bg-primary p-4">
                  <div className="w-8 h-1 bg-white mb-2"></div>
                  <p className="text-white text-sm font-bold uppercase">
                    Premium Service
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Kanan: Teks */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
              className="w-full lg:w-2/5"
            >
              <div className="space-y-8">
                <div className="w-12 h-1 bg-primary mb-6"></div>

                <div className="text-gray-800 text-base lg:text-lg leading-relaxed space-y-6">
                  <p className="font-semibold text-gray-900">
                    Memiliki mobil yang baik berarti juga harus memberikan
                    perhatian khusus pada perawatan eksteriornya.
                  </p>

                  <p>
                    Perawatan eksterior yang tepat tidak hanya meningkatkan
                    penampilan mobil Anda tetapi juga melindungi nilai
                    investasinya. Rutin mencuci mobil untuk menghilangkan
                    kotoran, debu, dan Stone Chip adalah langkah dasar yang
                    penting.
                  </p>

                  <p>
                    Penggunaan produk pembersih yang tepat dan teknik pencucian
                    yang benar akan mencegah goresan pada cat. Selain itu,
                    coating secara berkala akan memberikan lapisan pelindung
                    tambahan terhadap sinar UV, hujan asam, dan elemen lainnya.
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <div className="w-8 h-8 bg-primary flex items-center justify-center">
                    <div className="w-3 h-3 bg-white"></div>
                  </div>
                  <p className="text-primary font-bold uppercase text-sm">
                    Standar Perawatan Profesional
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
