"use client";

import { useEffect, useState } from "react";
import { BiX } from "react-icons/bi";

export default function PromoKemerdekaan() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // SELALU munculkan modal setiap reload
    setShowModal(true);
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white shadow-lg max-w-md w-full relative mx-2">
        {/* Tombol Close di kanan atas */}
        <div className="flex justify-end pb-8 relative">
          <button
            onClick={handleClose}
            className="absolute top-0 right-0 text-primary hover:text-black bg-primary/20 p-1 text-2xl font-bold"
            aria-label="Tutup"
          >
            <BiX />
          </button>
        </div>

        {/* Konten modal */}
        <div className="flex flex-col p-6">
          <h2 className="text-2xl font-bold mb-4">
            🎉 Promo Kemerdekaan 17 Agustus!
          </h2>
          <p className="mb-6">
            Merdeka Belanja! Dapatkan diskon spesial hingga 45% untuk merayakan
            Hari Kemerdekaan Indonesia. Promo hanya berlaku hingga 17 Agustus!
          </p>
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 self-start"
          >
            Klaim Promo Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}
