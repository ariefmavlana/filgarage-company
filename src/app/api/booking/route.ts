import { NextRequest, NextResponse } from "next/server";

// Types kept for documentation/future use
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

type DeliveryResult = { 
  channel: "whatsapp"; 
  status: "sent" | "skipped" | "failed"; 
  reason?: string 
};

export async function POST(_req: NextRequest) {
  return NextResponse.json(
    { error: "Disabled. WhatsApp-only frontend flow in use." }, 
    { status: 410 }
  );
}