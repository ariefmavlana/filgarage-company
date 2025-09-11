"use client";

import { motion } from "framer-motion";

export default function WorkshopHero() {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/workshop/workshop_bg.jpeg')" }}
      />

      {/* Primary color overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Animated Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center text-white"
      >
        {/* Title with primary accent box */}
        <div className="relative inline-block mb-8">
          <h1 className="text-2xl md:text-4xl font-bebas px-8 py-4 bg-white text-primary relative z-10 font-orbitron uppercase font-bold">
            Workshop
          </h1>
          {/* Accent borders */}
          <div className="absolute -top-2 -left-2 w-full h-full border-4 border-white"></div>
          <div className="absolute -bottom-2 -right-2 w-full h-full border-4 border-white"></div>
        </div>

        {/* Breadcrumb with enhanced styling */}
        <div className="relative">
          <div className="inline-block px-8 py-3">
            <p className="text-lg md:text-xl font-thin uppercase tracking-wider">
              Home / <span className="font-bold text-white">Workshop</span>
            </p>
          </div>
          {/* Side accents */}
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-1 bg-white"></div>
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-1 bg-white"></div>
        </div>
      </motion.div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-white"></div>
    </section>
  );
}
