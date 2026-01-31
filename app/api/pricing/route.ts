import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const TO_EMAIL = "yash.khandelwal@finrep.ai";

interface PricingRequestBody {
  email?: string;
  phone?: string;
  company?: string;
  role?: string;
  subscribe?: boolean;
}

function validateBody(body: unknown): body is PricingRequestBody {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.email === "string" &&
    b.email.trim().length > 0 &&
    typeof b.phone === "string" &&
    b.phone.trim().length > 0 &&
    typeof b.company === "string" &&
    b.company.trim().length > 0 &&
    typeof b.subscribe === "boolean" &&
    b.subscribe === true
  );
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!validateBody(body)) {
      return NextResponse.json(
        { error: "Missing or invalid required fields: email, phone, company, and subscribe are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, FROM_EMAIL } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      console.error("Pricing API: Missing SMTP config (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS)");
      return NextResponse.json(
        { error: "Email is not configured. Please try again later." },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: SMTP_SECURE === "true",
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const from = FROM_EMAIL || SMTP_USER;
    const roleLabel = (body.role as string) || "(not selected)";
    const text = [
      "New pricing form submission",
      "",
      `Email: ${(body.email as string).trim()}`,
      `Phone: ${(body.phone as string).trim()}`,
      `Company: ${(body.company as string).trim()}`,
      `Role: ${roleLabel}`,
      `Subscribe to updates: ${body.subscribe ? "Yes" : "No"}`,
    ].join("\n");

    await transporter.sendMail({
      from: `"Finrep Pricing" <${from}>`,
      to: TO_EMAIL,
      subject: `Pricing request from ${(body.company as string).trim()}`,
      text,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Pricing API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
