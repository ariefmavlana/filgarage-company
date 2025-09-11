export default function FAQPage() {
  return (
    <main className="font-inter min-h-screen bg-black text-white">
      <section className="py-10 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-archivo-black mb-6">FAQ</h1>
          <div className="space-y-4 sm:space-y-6">
            <details className="bg-white/5 p-4 sm:p-5">
              <summary className="cursor-pointer font-semibold text-base sm:text-lg">Bagaimana cara booking?</summary>
              <p className="text-white/80 mt-2 text-sm sm:text-base">Isi formulir di halaman Booking dan kirim. Chat WhatsApp akan terbuka otomatis.</p>
            </details>
            <details className="bg-white/5 p-4 sm:p-5">
              <summary className="cursor-pointer font-semibold text-base sm:text-lg">Layanan apa yang tersedia?</summary>
              <p className="text-white/80 mt-2 text-sm sm:text-base">Nano Coating Ceramic, Rust Protection/Anti-Rust, PPF, Polishing.</p>
            </details>
            <details className="bg-white/5 p-4 sm:p-5">
              <summary className="cursor-pointer font-semibold text-base sm:text-lg">Bagaimana konfirmasi jadwal?</summary>
              <p className="text-white/80 mt-2 text-sm sm:text-base">Tim kami akan menghubungi Anda melalui WhatsApp untuk konfirmasi.</p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}


