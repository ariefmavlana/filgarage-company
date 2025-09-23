import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Pertanyaan Umum | FIL GARAGE Auto Care Bandung",
  description: "Pertanyaan umum seputar layanan nano coating, auto detailing, paint protection film, dan booking di FIL GARAGE Bandung. Temukan jawaban lengkap untuk pertanyaan Anda.",
  keywords: "faq fil garage, pertanyaan nano coating bandung, tanya jawab auto care bandung, booking fil garage",
  openGraph: {
    title: "FAQ - Pertanyaan Umum | FIL GARAGE Auto Care Bandung",
    description: "Pertanyaan umum seputar layanan nano coating, auto detailing, paint protection film, dan booking di FIL GARAGE Bandung. Temukan jawaban lengkap untuk pertanyaan Anda.",
    url: "https://filgarageautocare.com/faq",
    siteName: "FIL GARAGE",
    type: "website",
  },
  alternates: {
    canonical: "https://filgarageautocare.com/faq",
  },
};

export default function FAQPage() {
  return (
    <main className="font-inter min-h-screen bg-black text-white">
      <section className="py-10 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-archivo-black mb-6">FAQ</h1>
          <p className="text-white/70 mb-8 text-lg">Pertanyaan Umum Seputar Layanan FIL GARAGE</p>
          
          <div className="space-y-4 sm:space-y-6">
            {/* Booking & Appointment */}
            <details className="bg-white/5 p-4 sm:p-5 rounded-lg">
              <summary className="cursor-pointer font-semibold text-base sm:text-lg hover:text-primary transition-colors">Bagaimana cara booking layanan di FIL GARAGE?</summary>
              <div className="text-white/80 mt-3 text-sm sm:text-base space-y-2">
                <p>1. Isi formulir lengkap di halaman Booking dengan data kendaraan dan layanan yang diinginkan</p>
                <p>2. Pilih tanggal yang diinginkan (opsional)</p>
                <p>3. Klik "Kirim Booking" - chat WhatsApp akan terbuka otomatis</p>
                <p>4. Tim kami akan menghubungi untuk konfirmasi jadwal dan estimasi biaya</p>
              </div>
            </details>

            <details className="bg-white/5 p-4 sm:p-5 rounded-lg">
              <summary className="cursor-pointer font-semibold text-base sm:text-lg hover:text-primary transition-colors">Berapa lama proses konfirmasi booking?</summary>
              <p className="text-white/80 mt-2 text-sm sm:text-base">Tim kami akan menghubungi Anda dalam 1-2 jam kerja untuk konfirmasi jadwal dan memberikan estimasi biaya yang detail.</p>
            </details>

            {/* Services */}
            <details className="bg-white/5 p-4 sm:p-5 rounded-lg">
              <summary className="cursor-pointer font-semibold text-base sm:text-lg hover:text-primary transition-colors">Layanan apa saja yang tersedia di FIL GARAGE?</summary>
              <div className="text-white/80 mt-3 text-sm sm:text-base space-y-2">
                <p><strong>Layanan Utama:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Nano Coating Ceramic (Reguler, Premium, Luxury)</li>
                  <li>Paint Protection Film (PPF) 7.5 mil & 8.5 mil</li>
                  <li>Rust Protection / Anti Karat</li>
                  <li>Auto Detailing</li>
                  <li>Paint Protection</li>
                  <li>Poles & Reaglos Nano</li>
                  <li>Peredam Suara (Sound Proof)</li>
                </ul>
                <p><strong>Layanan Tambahan:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Velg New & Second</li>
                  <li>Oli Mobil</li>
                  <li>Cat Velg, Poles, Brush Diamond</li>
                  <li>Audio System (Subwoofer, Head Unit, Custom Full Setup)</li>
                  <li>Lampu Custom Bi-LED</li>
                </ul>
              </div>
            </details>

            <details className="bg-white/5 p-4 sm:p-5 rounded-lg">
              <summary className="cursor-pointer font-semibold text-base sm:text-lg hover:text-primary transition-colors">Apa perbedaan Nano Coating Reguler, Premium, dan Luxury?</summary>
              <div className="text-white/80 mt-3 text-sm sm:text-base space-y-2">
                <p><strong>Nano Coating Reguler:</strong> Perlindungan dasar dengan ketahanan 1-2 tahun</p>
                <p><strong>Nano Coating Premium:</strong> Perlindungan lebih kuat dengan ketahanan 2-3 tahun dan kilau lebih dalam</p>
                <p><strong>Nano Coating Luxury:</strong> Perlindungan maksimal dengan ketahanan hingga 5 tahun, kilau premium, dan teknologi terdepan</p>
                <p>Semua menggunakan teknologi nano ceramic coating dengan standar profesional tinggi.</p>
              </div>
            </details>

            <details className="bg-white/5 p-4 sm:p-5 rounded-lg">
              <summary className="cursor-pointer font-semibold text-base sm:text-lg hover:text-primary transition-colors">Apa itu Paint Protection Film (PPF) dan kapan diperlukan?</summary>
              <div className="text-white/80 mt-3 text-sm sm:text-base space-y-2">
                <p>PPF adalah lapisan pelindung transparan yang melindungi cat mobil dari:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Goresan dan serpihan batu</li>
                  <li>Kerusakan akibat cuaca dan sinar UV</li>
                  <li>Noda dan kontaminan</li>
                </ul>
                <p><strong>Kami menyediakan:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>PPF 7.5 mil - untuk perlindungan standar</li>
                  <li>PPF 8.5 mil - untuk perlindungan maksimal</li>
                </ul>
                <p>PPF sangat direkomendasikan untuk mobil baru atau yang ingin dijaga kondisi catnya.</p>
              </div>
            </details>

            {/* Pricing */}
            <details className="bg-white/5 p-4 sm:p-5 rounded-lg">
              <summary className="cursor-pointer font-semibold text-base sm:text-lg hover:text-primary transition-colors">Bagaimana sistem harga di FIL GARAGE?</summary>
              <div className="text-white/80 mt-3 text-sm sm:text-base space-y-2">
                <p>Harga ditentukan berdasarkan ukuran kendaraan:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>Small:</strong> Rp 1.200.000 - Rp 5.500.000</li>
                  <li><strong>Medium:</strong> Rp 1.300.000 - Rp 6.000.000</li>
                  <li><strong>Large:</strong> Rp 1.400.000 - Rp 6.500.000</li>
                  <li><strong>Extra Large:</strong> Rp 1.500.000 - Rp 7.000.000</li>
                </ul>
                <p>PPF memiliki harga khusus mulai dari Rp 30.000.000 - Rp 45.000.000 tergantung ukuran dan ketebalan film.</p>
                <p>Untuk motor: Small (Rp 2.000.000), Medium (Rp 2.500.000), Large (Rp 3.500.000), PPF Motor (Rp 5.000.000)</p>
              </div>
            </details>

            <details className="bg-white/5 p-4 sm:p-5 rounded-lg">
              <summary className="cursor-pointer font-semibold text-base sm:text-lg hover:text-primary transition-colors">Apakah ada paket khusus atau diskon?</summary>
              <p className="text-white/80 mt-2 text-sm sm:text-base">Kami menyediakan paket kombinasi layanan dengan harga khusus. Hubungi kami melalui WhatsApp untuk konsultasi paket yang sesuai dengan kebutuhan dan budget Anda.</p>
            </details>

            {/* Process & Duration */}
            <details className="bg-white/5 p-4 sm:p-5 rounded-lg">
              <summary className="cursor-pointer font-semibold text-base sm:text-lg hover:text-primary transition-colors">Berapa lama proses pengerjaan layanan?</summary>
              <div className="text-white/80 mt-3 text-sm sm:text-base space-y-2">
                <p><strong>Nano Coating:</strong> 1-2 hari (tergantung kondisi kendaraan)</p>
                <p><strong>PPF:</strong> 2-3 hari</p>
                <p><strong>Auto Detailing:</strong> 4-6 jam</p>
                <p><strong>Rust Protection:</strong> 1 hari</p>
                <p><strong>Paint Protection:</strong> 4-6 jam</p>
                <p>Durasi dapat bervariasi tergantung kondisi kendaraan dan kompleksitas pekerjaan.</p>
              </div>
            </details>

            <details className="bg-white/5 p-4 sm:p-5 rounded-lg">
              <summary className="cursor-pointer font-semibold text-base sm:text-lg hover:text-primary transition-colors">Apa yang perlu dipersiapkan sebelum membawa kendaraan?</summary>
              <div className="text-white/80 mt-3 text-sm sm:text-base space-y-2">
                <p>1. <strong>Kendaraan dalam kondisi bersih</strong> - cuci terlebih dahulu jika sangat kotor</p>
                <p>2. <strong>Kosongkan interior</strong> - keluarkan barang-barang pribadi</p>
                <p>3. <strong>Bawa dokumen kendaraan</strong> - STNK, KTP pemilik</p>
                <p>4. <strong>Informasikan kondisi khusus</strong> - goresan, kerusakan, atau area yang perlu perhatian khusus</p>
                <p>5. <strong>Diskusikan preferensi</strong> - hasil yang diinginkan dan budget</p>
              </div>
            </details>

            {/* Warranty & After Sales */}
            <details className="bg-white/5 p-4 sm:p-5 rounded-lg">
              <summary className="cursor-pointer font-semibold text-base sm:text-lg hover:text-primary transition-colors">Apakah ada garansi untuk layanan yang diberikan?</summary>
              <div className="text-white/80 mt-3 text-sm sm:text-base space-y-2">
                <p><strong>Nano Coating:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Reguler: Garansi 1 tahun</li>
                  <li>Premium: Garansi 2 tahun</li>
                  <li>Luxury: Garansi 3 tahun</li>
                </ul>
                <p><strong>PPF:</strong> Garansi 5 tahun untuk kualitas film dan aplikasi</p>
                <p><strong>Rust Protection:</strong> Garansi 2 tahun</p>
                <p>Garansi berlaku dengan syarat perawatan yang benar sesuai panduan yang diberikan.</p>
              </div>
            </details>

            <details className="bg-white/5 p-4 sm:p-5 rounded-lg">
              <summary className="cursor-pointer font-semibold text-base sm:text-lg hover:text-primary transition-colors">Bagaimana cara merawat kendaraan setelah treatment?</summary>
              <div className="text-white/80 mt-3 text-sm sm:text-base space-y-2">
                <p><strong>Untuk Nano Coating & PPF:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Hindari mencuci mobil dalam 48 jam pertama</li>
                  <li>Gunakan sabun khusus untuk coated vehicle</li>
                  <li>Hindari wax atau polish yang mengandung abrasif</li>
                  <li>Lakukan maintenance coating setiap 6-12 bulan</li>
                </ul>
                <p><strong>Untuk Rust Protection:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Hindari mencuci bagian bawah mobil dalam 24 jam</li>
                  <li>Periksa secara berkala setiap 6 bulan</li>
                </ul>
                <p>Kami akan memberikan panduan lengkap setelah treatment selesai.</p>
              </div>
            </details>

            {/* Location & Contact */}
            <details className="bg-white/5 p-4 sm:p-5 rounded-lg">
              <summary className="cursor-pointer font-semibold text-base sm:text-lg hover:text-primary transition-colors">Dimana lokasi FIL GARAGE dan jam operasional?</summary>
              <div className="text-white/80 mt-3 text-sm sm:text-base space-y-2">
                <p><strong>Lokasi:</strong> Bandung, Jawa Barat</p>
                <p><strong>Jam Operasional:</strong> Senin - Jum'at, 08:30 - 16:30 WIB | Sabtu, 08:30 - 14:00 WIB</p>
                <p><strong>Kontak:</strong> WhatsApp 0813-1220-0142</p>
                <p>Kami melayani area Bandung dan sekitarnya. Untuk konsultasi atau informasi lebih lanjut, silakan hubungi kami melalui WhatsApp.</p>
              </div>
            </details>

            <details className="bg-white/5 p-4 sm:p-5 rounded-lg">
              <summary className="cursor-pointer font-semibold text-base sm:text-lg hover:text-primary transition-colors">Mengapa memilih FIL GARAGE?</summary>
              <div className="text-white/80 mt-3 text-sm sm:text-base space-y-2">
                <p><strong>Keunggulan FIL GARAGE:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Teknisi profesional berpengalaman</li>
                  <li>Menggunakan material dan produk berkualitas tinggi</li>
                  <li>Teknologi 4.0 dengan nano coating terdepan</li>
                  <li>Komitmen terhadap kepuasan pelanggan</li>
                  <li>Layanan purna jual yang baik</li>
                  <li>Banyak ulasan positif dari pelanggan</li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}


