"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]"
    >
      <div className="mb-2">
        <Image
          src="/images/logo/main_logo_notext.png"
          alt="Loading Logo"
          width={208} // atau sesuai ukuran logo asli
          height={80} // sesuaikan rasio asli
          priority
        />
      </div>

      <motion.p
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
        className="text-white text-xs lg:text-sm uppercase tracking-widest mt-6"
      >
        Sedang Memuat...
      </motion.p>
    </motion.div>
  );
}
