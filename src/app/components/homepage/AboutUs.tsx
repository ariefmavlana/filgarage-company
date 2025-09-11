"use client";

import Image from "next/image";
import { FaTools } from "react-icons/fa";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="w-full min-h-screen lg:mt-12 bg-white">
      <div className="flex flex-col gap-2 lg:gap-32">
        <div className="flex flex-col gap-12 lg:gap-20">
          {/* About Us */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-7xl mx-auto bg-primary overflow-hidden flex flex-col lg:flex-row relative"
          >
            {/* Kiri: Gambar dengan Overlay */}
            <div className="w-full lg:w-3/5 h-96 lg:h-96 relative">
              <Image
                src="/images/home/hero/gallery_hero/white_left.jpeg"
                alt="About Us"
                width={800}
                height={500}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary bg-opacity-10"></div>
              <div className="absolute bottom-6 left-6">
                <div className="w-20 h-1 bg-white mb-2"></div>
                <h3 className="text-white text-xl font-bold">
                  LAYANAN BERKUALITAS
                </h3>
              </div>
            </div>

            {/* Kanan: Konten */}
            <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center bg-white relative">
              <div className="absolute top-0 left-0 w-2 h-16 bg-primary"></div>
              <h2 className="text-5xl lg:text-6xl font-bebas text-primary mb-6 leading-tight uppercase">
                Tentang
                <br />
                Kami
              </h2>
              <div className="w-12 h-1 bg-primary mb-6"></div>
              <p className="text-gray-800 text-base lg:text-lg leading-relaxed text-justify md:text-start mb-6">
                FIL GARAGE adalah pilihan terbaik untuk Anda yang ingin
                memberikan sentuhan eksklusif pada kendaraan. Kami tidak hanya
                fokus pada tampilan, tetapi juga menghadirkan performa dan
                kenyamanan melalui layanan unggulan. Mulai dari
                <span className="font-semibold">
                  {" "}
                  velg new & SEC, oli mobil, cat velg, poles, brush diamond,
                  hingga
                </span>
                <span className="font-semibold">
                  {" "}
                  audio system (subwoofer, head unit, custom full setup)
                </span>
                <span className="font-semibold"> dan lampu custom Bi-LED</span>,
                semuanya tersedia di satu tempat.
              </p>

              <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                Setiap detail dikerjakan oleh tim profesional untuk memastikan
                mobil Anda tampil menawan, berkualitas tinggi, dan siap melaju
                dengan percaya diri.
              </p>
            </div>
          </motion.div>

          {/* Professional Detailer */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="max-w-7xl mx-auto bg-white overflow-hidden flex flex-col lg:flex-row relative"
          >
            {/* Kiri: Konten */}
            <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center bg-primary relative order-2 lg:order-1">
              <div className="absolute top-0 right-0 w-2 h-16 bg-white"></div>
              <h2 className="text-5xl lg:text-6xl font-bebas text-white mb-6 leading-tight">
                PROFESSIONAL
                <br />
                DETAILER
              </h2>
              <div className="w-12 h-1 bg-white mb-6"></div>
              <p className="text-white text-base lg:text-lg leading-relaxed text-justify mb-6">
                Percayakan mobil Anda kepada detailer profesional kami di SR
                Point untuk mendapatkan perlakuan istimewa yang membuatnya
                tampak seperti baru. Dengan keahlian mendalam dalam coating,
                detailing, dan perlindungan mobil, tim kami siap memberikan
                kualitas terbaik dan hasil yang memuaskan setiap kunjungan.
              </p>
              <p className="text-gray-200 text-sm lg:text-base leading-relaxed">
                Rasakan perbedaan dengan layanan detailer berdedikasi hanya di
                Fil Garage.
              </p>
            </div>

            {/* Kanan: Icon Section dengan Background Pattern */}
            <div className="w-full lg:w-3/5 h-80 lg:h-96 order-1 lg:order-2 flex items-center justify-center bg-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gray-50"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-5 transform rotate-45"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary opacity-5 transform -rotate-45"></div>
              <div className="relative z-10 text-center">
                <div className="bg-primary p-8 inline-block mb-4">
                  <FaTools className="text-white w-16 h-16 lg:w-20 lg:h-20" />
                </div>
                <div className="w-16 h-1 bg-primary mx-auto mb-2"></div>
                <h3 className="text-primary text-xl lg:text-2xl font-bold">
                  EXPERT TOOLS
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Peralatan Profesional
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="w-full bg-primary py-16"
        >
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-12">
              <div className="flex flex-col">
                <div className="w-16 h-1 bg-white mb-4"></div>
                <h2 className="text-5xl lg:text-8xl font-bebas text-white leading-tight uppercase">
                  Proses
                </h2>
                <p className="text-gray-200 text-lg mt-4 max-w-md">
                  Dari konsultasi hingga sentuhan akhir, saksikan alur kerja
                  profesional kami
                </p>
              </div>
              <div className="mt-8 lg:mt-0">
                <a
                  href="/projects"
                  className="bg-white text-primary inline-flex justify-center items-center gap-2 lg:gap-4 px-6 lg:px-10 py-3 lg:py-5 text-sm lg:text-lg uppercase font-bold hover:bg-gray-100 transition-colors"
                >
                  Lihat Project Kami
                  <LiaLongArrowAltRightSolid className="w-6 h-6 lg:w-8 lg:h-8" />
                </a>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <div className="relative group overflow-hidden">
                <Image
                  src="/images/home/about/about_gallery1.png"
                  alt="Gallery 1"
                  width={400}
                  height={400}
                  className="w-full h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-8 h-1 bg-white mb-2"></div>
                  <h3 className="text-white text-xl font-bold">STEP 01</h3>
                  <p className="text-gray-200 text-sm">
                    Konsultasi & Penilaian
                  </p>
                </div>
              </div>

              <div className="relative group overflow-hidden">
                <Image
                  src="/images/home/about/about_gallery2.png"
                  alt="Gallery 2"
                  width={400}
                  height={400}
                  className="w-full h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-8 h-1 bg-white mb-2"></div>
                  <h3 className="text-white text-xl font-bold">STEP 02</h3>
                  <p className="text-gray-200 text-sm">Perawatan Profesional</p>
                </div>
              </div>

              <div className="relative group overflow-hidden">
                <Image
                  src="/images/home/about/about_gallery3.png"
                  alt="Gallery 3"
                  width={400}
                  height={400}
                  className="w-full h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-8 h-1 bg-white mb-2"></div>
                  <h3 className="text-white text-xl font-bold">STEP 03</h3>
                  <p className="text-gray-200 text-sm">Inspeksi Kualitas</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
