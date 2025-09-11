"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Loader from "./Loader";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [loading, setLoading] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Deteksi route change kalau klik Link
  useEffect(() => {
    setLoading(false); // disable loader pas pertama load
  }, [pathname]);

  const handleLinkClick = (href: string) => {
    setLoading(true);
    router.push(href);
  };

  return (
    <nav
      className={`w-full transition-all duration-300 border-b border-white/5 ${
        isScrolled ? "bg-black shadow" : "bg-black"
      }`}
    >
      {loading && <Loader />}

      <div className="max-w-full px-4 sm:px-12 lg:px-16 flex items-center justify-between h-14 md:h-16">
        {/* Logo */}
        <div className="flex-shrink-0 w-24 sm:w-28 md:w-32">
          <Link href="/" onClick={() => handleLinkClick("/")}>
            <Image
              src="/images/logo/main_logo_notext.png"
              alt="My Logo"
              width={200}
              height={60}
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden h-full md:flex items-center gap-8 text-white text-base md:text-lg uppercase">
          {[
            { href: "/", label: "Home" },
            { href: "/services", label: "Services" },
            { href: "/pricelist", label: "Price List" },
            { href: "/projects", label: "Projects" },
            { href: "/workshop", label: "Workshop" },
            { href: "/whyus", label: "Why Us" },
            { href: "/products", label: "Products" },
            { href: "/faq", label: "FAQ" },
            { href: "/booking", label: "Booking" },
          ].map(({ href, label }) => (
            <button
              key={href}
              onClick={() => handleLinkClick(href)}
              className={`uppercase transition-all duration-300 px-2 md:px-3 tracking-wide ${
                pathname === href ? "text-white font-bold" : "text-white/50"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-8 h-8 flex items-center justify-center md:w-10 md:h-10 p-2 bg-transparent hover:text-primary transition-colors duration-300"
            aria-label="Menu"
          >
            <motion.div
              initial={false}
              animate={{ opacity: isOpen ? 0 : 1, rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute"
            >
              <FaBars className="w-4 h-4 md:w-6 md:h-6 text-current text-white" />
            </motion.div>

            <motion.div
              initial={false}
              animate={{ opacity: isOpen ? 1 : 0, rotate: isOpen ? 0 : -90 }}
              transition={{ duration: 0.3 }}
              className="absolute"
            >
              <FaTimes className="w-4 h-4 md:w-6 md:h-6 text-current text-white" />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden min-h-full pb-3 uppercase text-white bg-black border-t border-white/20"
          >
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/pricelist", label: "Price List" },
              { href: "/projects", label: "Projects" },
              { href: "/workshop", label: "Workshop" },
              { href: "/whyus", label: "Why Us" },
              { href: "/products", label: "Products" },
              { href: "/faq", label: "FAQ" },
              { href: "/booking", label: "Booking" },
            ].map(({ href, label }) => (
              <button
                key={href}
                onClick={() => {
                  handleLinkClick(href);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-4 transition-all duration-300 ${
                  pathname === href
                    ? "text-white font-bold bg-primary"
                    : "text-white bg-black"
                }`}
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
