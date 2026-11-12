
import { NextResponse } from "next/server";

// Email API is disabled.
// TIME KAMU currently uses WhatsApp for project enquiries.

export async function POST() {
  return NextResponse.json(
    {
      success: false,
      message: "Email enquiries are currently disabled. Please contact TIME KAMU through WhatsApp.",
      whatsapp: "https://wa.me/919475140848",
    },
    { status: 410 }
  );
}
