import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { first, last, email, company, revenue, type, challenge } = body;

    if (!first || !last || !email || !company) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "74 East Advisory <onboarding@resend.dev>",
      to: "karansingh55@live.com",
      replyTo: email,
      subject: `New scope call request — ${first} ${last} at ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #0a0e1a;">
          <div style="background: #0a1628; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #ffffff; font-size: 18px; margin: 0; font-weight: 600;">
              New scope call request
            </h1>
            <p style="color: rgba(255,255,255,0.5); font-size: 13px; margin: 4px 0 0;">
              74 East Advisory — Contact Form
            </p>
          </div>

          <div style="background: #ffffff; padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; width: 40%;">
                  <span style="font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.08em;">Name</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
                  <span style="font-size: 15px; color: #0a0e1a;">${first} ${last}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
                  <span style="font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.08em;">Email</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
                  <a href="mailto:${email}" style="font-size: 15px; color: #1e3a8a;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
                  <span style="font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.08em;">Company</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
                  <span style="font-size: 15px; color: #0a0e1a;">${company}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
                  <span style="font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.08em;">Annual Revenue</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
                  <span style="font-size: 15px; color: #0a0e1a;">${revenue || "Not specified"}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
                  <span style="font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.08em;">Revenue Type</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
                  <span style="font-size: 15px; color: #0a0e1a;">${type || "Not specified"}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0;" colspan="2">
                  <span style="font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 8px;">Biggest Challenge</span>
                  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 14px 16px; font-size: 14px; color: #334155; line-height: 1.6; white-space: pre-wrap;">${challenge || "Not provided"}</div>
                </td>
              </tr>
            </table>

            <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #f1f5f9;">
              <a href="mailto:${email}?subject=Re: Your 74 East Advisory scope call request"
                 style="display: inline-block; background: #0a1628; color: #ffffff; padding: 12px 24px; border-radius: 8px; font-size: 14px; font-weight: 600; text-decoration: none;">
                Reply to ${first}
              </a>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
