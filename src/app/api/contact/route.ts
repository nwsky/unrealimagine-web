import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, inquiryType, summary } = body;

    if (!name || !email || !inquiryType || !summary) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // TODO: 集成 Resend 或类似邮件服务
    // await resend.emails.send({ from, to, subject, html })

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
