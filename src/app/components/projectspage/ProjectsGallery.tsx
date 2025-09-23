"use client";

import Image from "next/image";
import { useState } from "react";

export default function GallerySection() {
  const [showAll, setShowAll] = useState(false);

  // All gallery images
  const allImages = [
    // PNG files
    { src: "/images/gallery/1.png", alt: "Hasil Kerja FIL GARAGE 1" },
    { src: "/images/gallery/2.png", alt: "Hasil Kerja FIL GARAGE 2" },
    { src: "/images/gallery/3.png", alt: "Hasil Kerja FIL GARAGE 3" },
    { src: "/images/gallery/4.png", alt: "Hasil Kerja FIL GARAGE 4" },
    { src: "/images/gallery/5.png", alt: "Hasil Kerja FIL GARAGE 5" },
    { src: "/images/gallery/6.png", alt: "Hasil Kerja FIL GARAGE 6" },
    
    // JPG files from WhatsApp
    { src: "/images/gallery/IMG-20250715-WA0020.jpg", alt: "Portfolio Nano Coating FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0023.jpg", alt: "Hasil Auto Detailing FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0027.jpg", alt: "Paint Protection Film FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0028.jpg", alt: "Rust Protection FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0029.jpg", alt: "Before After FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0030.jpg", alt: "Nano Coating Ceramic FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0031.jpg", alt: "Auto Care FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0032.jpg", alt: "Paint Protection FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0033.jpg", alt: "Car Detailing FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0034.jpg", alt: "Vehicle Care FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0035.jpg", alt: "Ceramic Coating FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0036.jpg", alt: "Car Protection FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0037.jpg", alt: "Auto Detailing FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0038.jpg", alt: "Nano Coating FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0039.jpg", alt: "Paint Care FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0040.jpg", alt: "Vehicle Detailing FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0041.jpg", alt: "Car Care FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0042.jpg", alt: "Auto Protection FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0043.jpg", alt: "Paint Protection FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0044.jpg", alt: "Nano Coating FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0045.jpg", alt: "Car Detailing FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0046.jpg", alt: "Auto Care FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0047.jpg", alt: "Vehicle Care FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0048.jpg", alt: "Ceramic Coating FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0049.jpg", alt: "Paint Protection FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0050.jpg", alt: "Auto Detailing FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0051.jpg", alt: "Nano Coating FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0052.jpg", alt: "Car Care FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0053.jpg", alt: "Vehicle Detailing FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0054.jpg", alt: "Paint Care FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0055.jpg", alt: "Auto Protection FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0056.jpg", alt: "Ceramic Coating FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0057.jpg", alt: "Nano Coating FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0058.jpg", alt: "Car Detailing FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0059.jpg", alt: "Auto Care FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0090.jpg", alt: "Vehicle Care FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0091.jpg", alt: "Paint Protection FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0092.jpg", alt: "Nano Coating FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0093.jpg", alt: "Auto Detailing FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0094.jpg", alt: "Car Care FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0095.jpg", alt: "Vehicle Detailing FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0096.jpg", alt: "Paint Care FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0097.jpg", alt: "Auto Protection FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0098.jpg", alt: "Ceramic Coating FIL GARAGE" },
    { src: "/images/gallery/IMG-20250715-WA0099.jpg", alt: "Nano Coating FIL GARAGE" },
  ];

  const displayedImages = showAll ? allImages : allImages.slice(0, 12);

  return (
    <section className="w-full px-4 md:px-12 lg:px-32 py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-xl md:text-4xl font-bebas text-primary font-orbitron uppercase font-semibold mb-4">
          Galeri Portfolio Kami
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Lihat hasil kerja terbaik FIL GARAGE dalam nano coating, paint protection film, auto detailing, dan berbagai layanan auto care premium lainnya.
        </p>
        <div className="mt-4 text-sm text-gray-500">
          Menampilkan {displayedImages.length} dari {allImages.length} foto
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {displayedImages.map((image, index) => (
          <div
            key={index}
            className="relative w-full aspect-square overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
          >
            {/* Image */}
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={() => window.open(image.src, "_blank")}
                className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
              >
                Lihat Detail
              </button>
            </div>

            {/* Image number badge */}
            <div className="absolute top-2 right-2 bg-white bg-opacity-90 text-black text-xs px-2 py-1 rounded-full font-semibold">
              {index + 1}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button 
          onClick={() => setShowAll(!showAll)}
          className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors border-2 border-primary hover:border-primary/90"
        >
          {showAll ? "Tampilkan Sedikit" : `Lihat Semua ${allImages.length} Foto`}
        </button>
      </div>

      {showAll && (
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Semua foto di atas adalah hasil kerja nyata FIL GARAGE
          </p>
          <div className="flex justify-center gap-4 text-sm text-gray-500">
            <span>📸 {allImages.length} Foto Portfolio</span>
            <span>✨ Hasil Profesional</span>
            <span>🏆 Kualitas Terjamin</span>
          </div>
        </div>
      )}
    </section>
  );
}
