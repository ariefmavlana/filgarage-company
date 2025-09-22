"use client";

export default function WhatsAppFAB() {
  const wa = process.env.NEXT_PUBLIC_WHATSAPP || "6281312200142";
  const text = encodeURIComponent("Halo Fil Garage, saya ingin bertanya.");
  const href = `https://wa.me/${wa}?text=${text}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-5 left-5 md:bottom-8 md:left-8 bg-green-600 hover:bg-green-500 text-white px-4 py-3 rounded-full shadow-lg"
      aria-label="Chat WhatsApp"
    >
      WhatsApp
    </a>
  );
}


