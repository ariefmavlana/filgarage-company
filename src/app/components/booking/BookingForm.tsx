"use client";

import { useMemo, useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

const SERVICE_OPTIONS = [
  "Nano Coating Ceramic",
  "Rust Protection / Anti-Rust",
  "PPF (Paint Protection Film)",
  "Polishing",
] as const;

export default function BookingForm() {
  const [ownerName, setOwnerName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [brandMake, setBrandMake] = useState("");
  const [yearColor, setYearColor] = useState("");
  const [chassisNumber, setChassisNumber] = useState("");
  const [engineNumber, setEngineNumber] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [preferredDate, setPreferredDate] = useState("");
  const [message, setMessage] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [showSummary, setShowSummary] = useState(false);

  const invalidMsg = useMemo(() => {
    if (!ownerName || !address || !phone || !brandMake || !yearColor) {
      return "Nama, alamat, telepon, merek, dan tahun/warna wajib diisi.";
    }
    if (services.length === 0) {
      return "Pilih minimal satu layanan.";
    }
    return "";
  }, [ownerName, address, phone, brandMake, yearColor, services.length]);

  const toggleService = (s: string) => {
    setServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    const msg = invalidMsg;
    if (msg) {
      setErrorMsg(msg);
      return;
    }

    setSubmitState("submitting");
    try {
      const waNumber = process.env.NEXT_PUBLIC_WHATSAPP || "6287776734038";
      const lines = [
        "Booking Baru Fil Garage",
        `Nama: ${ownerName}`,
        `Telepon: ${phone}`,
        email ? `Email: ${email}` : "",
        `Alamat: ${address}`,
        licensePlate ? `No. Polisi: ${licensePlate}` : "",
        `Merek/Model: ${brandMake}`,
        `Tahun/Warna: ${yearColor}`,
        chassisNumber ? `No. Rangka: ${chassisNumber}` : "",
        engineNumber ? `No. Mesin: ${engineNumber}` : "",
        `Layanan: ${services.join(", ")}`,
        preferredDate ? `Tanggal: ${preferredDate}` : "",
        message ? `Catatan: ${message}` : "",
      ].filter(Boolean);
      const text = encodeURIComponent(lines.join("\n"));
      const waUrl = `https://wa.me/${waNumber}?text=${text}`;
      // Open WhatsApp chat
      window.open(waUrl, "_blank");
      // Analytics tracking
      try { (window as any).gtag && (window as any).gtag('event', 'booking_submit', { method: 'whatsapp' }); } catch {}
      try { (window as any).fbq && (window as any).fbq('trackCustom', 'BookingSubmit', { method: 'whatsapp' }); } catch {}
      setSubmitState("success");
      setShowSummary(true);
    } catch (err) {
      setSubmitState("error");
      setErrorMsg((err as Error).message || "Terjadi kesalahan.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          className="w-full px-4 py-3 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
          placeholder="Nama Pemilik*"
          value={ownerName}
          onChange={(e) => setOwnerName(e.target.value)}
        />
        <input
          className="w-full px-4 py-3 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
          placeholder="No. Telepon*"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          className="w-full px-4 py-3 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full px-4 py-3 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
          placeholder="Alamat*"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          className="w-full px-4 py-3 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
          placeholder="No. Polisi"
          value={licensePlate}
          onChange={(e) => setLicensePlate(e.target.value)}
        />
        <input
          className="w-full px-4 py-3 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
          placeholder="Merek/Model*"
          value={brandMake}
          onChange={(e) => setBrandMake(e.target.value)}
        />
        <input
          className="w-full px-4 py-3 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
          placeholder="Tahun / Warna*"
          value={yearColor}
          onChange={(e) => setYearColor(e.target.value)}
        />
        <input
          className="w-full px-4 py-3 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
          placeholder="No. Rangka"
          value={chassisNumber}
          onChange={(e) => setChassisNumber(e.target.value)}
        />
        <input
          className="w-full px-4 py-3 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
          placeholder="No. Mesin"
          value={engineNumber}
          onChange={(e) => setEngineNumber(e.target.value)}
        />
        <input
          className="w-full px-4 py-3 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
          type="date"
          value={preferredDate}
          onChange={(e) => setPreferredDate(e.target.value)}
        />
      </div>

      <div>
        <p className="mb-2 text-white/80">Pilih Layanan*</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {SERVICE_OPTIONS.map((s) => (
            <label key={s} className="flex items-center gap-3 bg-white text-gray-900 px-4 py-3 cursor-pointer">
              <input
                type="checkbox"
                checked={services.includes(s)}
                onChange={() => toggleService(s)}
              />
              <span>{s}</span>
            </label>
          ))}
        </div>
      </div>

      <textarea
        className="w-full px-4 py-3 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
        placeholder="Catatan tambahan"
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      {errorMsg && <p className="text-red-400 text-sm">{errorMsg}</p>}
      {submitState === "success" && !showSummary && (
        <div className="p-4 bg-green-900/30 border border-green-700 text-green-300 text-sm">
          Terima kasih! Booking Anda sudah kami terima. Kami akan segera menghubungi untuk konfirmasi.
        </div>
      )}
      {submitState === "error" && (
        <p className="text-red-400 text-sm">{errorMsg || "Gagal mengirim booking."}</p>
      )}

      <button
        type="submit"
        className="px-6 py-3 bg-primary text-white font-semibold hover:bg-primary/90 transition-colors disabled:opacity-60"
        disabled={submitState === "submitting"}
      >
        {submitState === "submitting" ? "Mengirim..." : "Kirim Booking"}
      </button>

      {showSummary && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/70" onClick={() => {
            setShowSummary(false);
            setOwnerName("");
            setAddress("");
            setPhone("");
            setEmail("");
            setLicensePlate("");
            setBrandMake("");
            setYearColor("");
            setChassisNumber("");
            setEngineNumber("");
            setServices([]);
            setPreferredDate("");
            setMessage("");
          }} />
          <div className="relative bg-white text-gray-900 w-full max-w-lg mx-4 rounded shadow-lg overflow-hidden">
            <div className="relative h-28 bg-gradient-to-r from-black to-gray-700">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Booking Terkirim</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Booking Terkirim</h3>
              <p className="text-gray-700 mb-4">Berikut ringkasan booking Anda:</p>
              <div className="space-y-2 text-sm">
                <div><b>Nama:</b> {ownerName}</div>
                <div><b>Telepon:</b> {phone}</div>
                {email && <div><b>Email:</b> {email}</div>}
                <div><b>Alamat:</b> {address}</div>
                {licensePlate && <div><b>No. Polisi:</b> {licensePlate}</div>}
                <div><b>Merek/Model:</b> {brandMake}</div>
                <div><b>Tahun/Warna:</b> {yearColor}</div>
                {chassisNumber && <div><b>No. Rangka:</b> {chassisNumber}</div>}
                {engineNumber && <div><b>No. Mesin:</b> {engineNumber}</div>}
                <div><b>Layanan:</b> {services.join(", ")}</div>
                {preferredDate && <div><b>Tanggal:</b> {preferredDate}</div>}
                {message && <div><b>Catatan:</b> {message}</div>}
              </div>
              <div className="mt-6 flex justify-end gap-3">
                <button
                  className="px-4 py-2 border border-gray-300 rounded"
                  onClick={() => {
                    setShowSummary(false);
                  }}
                >
                  Tutup
                </button>
                <button
                  className="px-4 py-2 bg-black text-white rounded"
                  onClick={() => {
                    setShowSummary(false);
                    setOwnerName("");
                    setAddress("");
                    setPhone("");
                    setEmail("");
                    setLicensePlate("");
                    setBrandMake("");
                    setYearColor("");
                    setChassisNumber("");
                    setEngineNumber("");
                    setServices([]);
                    setPreferredDate("");
                    setMessage("");
                  }}
                >
                  Selesai
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}


