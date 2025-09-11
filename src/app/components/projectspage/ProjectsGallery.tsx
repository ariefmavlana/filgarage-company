"use client";

import Image from "next/image";

export default function GallerySection() {
  return (
    <section className="w-full px-4 md:px-12 lg:px-32 py-16 bg-gray-50">
      <h2 className="text-xl md:text-4xl font-bebas text-center mb-12 text-primary font-orbitron uppercase font-semibold">
        Galeri Kami
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div
            key={num}
            className="relative w-full aspect-[4/3] overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image */}
            <Image
              src={`/images/gallery/${num}.png`}
              alt={`Gallery ${num}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-primary bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <button
                onClick={() =>
                  window.open(`/images/gallery/${num}.png`, "_blank")
                }
                className="bg-white text-primary px-8 py-3 uppercase font-semibold hover:bg-gray-100 transition-colors border-2 border-white"
              >
                View Image
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button className="bg-primary text-white px-12 py-4 uppercase font-semibold hover:bg-primary/90 transition-colors border-2 border-primary hover:border-primary/90">
          Lihat Semua
        </button>
      </div>
    </section>
  );
}
