"use client";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Kiri: Logo + Desc */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/logo/main_logo_notext.png"
                alt="Fil Garage"
                width={200}
                height={60}
                className="object-contain"
              />
            </div>
            <p className="text-white/80 leading-relaxed">
              FIL GARAGE berkomitmen untuk menyediakan layanan perawatan mobil
              premium dengan presisi dan semangat untuk membuat mobil Anda
              selalu terlihat terbaik.
            </p>
          </div>

          {/* Connect */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">
              Tetap Terhubung
            </h3>
            <p className="text-white/80">
              Dapatkan berita terbaru dan penawaran eksklusif. Hubungi kami:
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || "6287776734038"}`}
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoWhatsapp /> WhatsApp
              </a>
              <a
                href="mailto:filgarage105@gmail.com"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white underline"
              >
                Email
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt
                  className="text-white mt-1 flex-shrink-0"
                  size={18}
                />
                <p className="text-white/80 leading-relaxed">
                  JLN. PASIRLUYU SELATAN NO.25D REGOL, BANDUNG
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <IoLogoWhatsapp
                  className="text-white flex-shrink-0"
                  size={18}
                />
                <a
                  href="https://wa.me/6287776734038"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  +62 877-7673-4038{" "}
                  <span className="font-bold">ADMIN (Arief Maulana)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <a href="/booking" className="underline text-white/90 hover:text-white">Booking</a>
              <a href="/faq" className="underline text-white/90 hover:text-white">FAQ</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/70">
            © {new Date().getFullYear()} FIL GARAGE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
