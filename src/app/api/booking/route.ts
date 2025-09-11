import { NextRequest, NextResponse } from "next/server";

type BookingPayload = {
  ownerName: string;
  address: string;
  phone: string;
  email?: string;
  licensePlate?: string;
  brandMake: string;
  yearColor: string;
  chassisNumber?: string;
  engineNumber?: string;
  services: string[];
  preferredDate?: string;
  message?: string;
};

type DeliveryResult = { channel: "whatsapp"; status: "sent" | "skipped" | "failed"; reason?: string };

async function sendWhatsApp(payload: BookingPayload, bookingId: string): Promise<DeliveryResult> {
  const token = process.env.WHATSAPP_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const rawTo = process.env.BOOKING_WHATSAPP_TO; // e.g. 62812xxxxxxx,62813xxxxxxx
  if (!token || !phoneNumberId || !rawTo) return { channel: "whatsapp", status: "skipped", reason: "Missing env (token/phoneNumberId/to)" };
  const toNumbers = rawTo
    .split(",")
    .map((n) => n.trim())
    .filter(Boolean);

  const text =
    `Booking Baru (ID: ${bookingId})\n` +
    `Nama: ${payload.ownerName}\n` +
    `Telepon: ${payload.phone}\n` +
    (payload.email ? `Email: ${payload.email}\n` : "") +
    `Alamat: ${payload.address}\n` +
    (payload.licensePlate ? `No. Polisi: ${payload.licensePlate}\n` : "") +
    `Merek/Model: ${payload.brandMake}\n` +
    `Tahun/Warna: ${payload.yearColor}\n` +
    (payload.chassisNumber ? `No. Rangka: ${payload.chassisNumber}\n` : "") +
    (payload.engineNumber ? `No. Mesin: ${payload.engineNumber}\n` : "") +
    `Layanan: ${payload.services.join(", ")}\n` +
    (payload.preferredDate ? `Tanggal: ${payload.preferredDate}\n` : "") +
    (payload.message ? `Catatan: ${payload.message}\n` : "") +
    `Dikirim: ${new Date().toLocaleString()}`;

  try {
    const results = await Promise.all(
      toNumbers.map((toNumber) =>
        fetch(`https://graph.facebook.com/v21.0/${phoneNumberId}/messages`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messaging_product: "whatsapp",
            to: toNumber,
            type: "text",
            text: { body: text },
          }),
        })
      )
    );

    const anyFailed = await (async () => {
      for (const r of results) {
        if (!r.ok) return `HTTP ${r.status} ${await r.text().catch(() => "")}`;
      }
      return null;
    })();

    if (anyFailed) return { channel: "whatsapp", status: "failed", reason: anyFailed };
    return { channel: "whatsapp", status: "sent" };
  } catch (e) {
    return { channel: "whatsapp", status: "failed", reason: (e as Error).message };
  }
}

export async function POST(req: NextRequest) {
  return NextResponse.json({ error: "Disabled. WhatsApp-only frontend flow in use." }, { status: 410 });
}


