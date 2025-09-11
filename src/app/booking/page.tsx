import BookingForm from "../components/booking/BookingForm";

export default function BookingPage() {
  return (
    <main className="font-inter min-h-screen bg-black text-white">
      <section className="relative py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-archivo-black mb-6">Booking</h1>
          <p className="text-white/70 mb-10">
            Isi formulir di bawah untuk melakukan booking layanan kami. Tim kami akan menghubungi Anda untuk konfirmasi.
          </p>
          <div className="mb-8 rounded border border-white/10 bg-white/5 p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="text-white/80">
                Ingin melihat paket dan harga terlebih dahulu?
              </div>
              <a
                href="/pricelist"
                className="inline-block px-4 py-2 bg-white text-black hover:bg-white/90 font-semibold transition-colors"
              >
                Lihat Price List
              </a>
            </div>
          </div>
          <BookingForm />
        </div>
      </section>
    </main>
  );
}


