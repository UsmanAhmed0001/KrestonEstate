import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json());

  // ─── Contact Form Email Endpoint ────────────────────────────────────────
  app.post("/api/contact", async (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;

    if (!firstName || !email || !message) {
      return res.status(400).json({ success: false, error: "Missing required fields" });
    }

    const smtpPass = process.env.SMTP_PASS;
    const smtpUser = process.env.SMTP_USER || "info@krestonestates.com";
    const smtpHost = process.env.SMTP_HOST || "smtp.hostinger.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 465;

    if (!smtpPass) {
      console.error("❌  SMTP_PASS is not set in .env — cannot send email.");
      console.error("    Create a .env file with: SMTP_PASS=your_email_password");
      return res.status(500).json({ success: false, error: "Email not configured" });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: true,
      auth: { user: smtpUser, pass: smtpPass },
    });

    try {
      await transporter.sendMail({
        from: `"Kreston Estates Website" <${smtpUser}>`,
        to: "info@krestonestates.com",
        replyTo: email,
        subject: `New enquiry from ${firstName} ${lastName}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e0e0e0;border-radius:8px;overflow:hidden;">
            <div style="background:#04055e;padding:24px 32px;">
              <h2 style="color:white;margin:0;font-size:20px;">New Website Enquiry</h2>
            </div>
            <div style="padding:32px;">
              <table style="width:100%;border-collapse:collapse;font-size:15px;">
                <tr>
                  <td style="padding:10px 0;font-weight:bold;color:#1B4D5C;width:120px;vertical-align:top;">Name</td>
                  <td style="padding:10px 0;color:#333;">${firstName} ${lastName}</td>
                </tr>
                <tr style="border-top:1px solid #f0f0f0;">
                  <td style="padding:10px 0;font-weight:bold;color:#1B4D5C;vertical-align:top;">Email</td>
                  <td style="padding:10px 0;"><a href="mailto:${email}" style="color:#04055e;">${email}</a></td>
                </tr>
                <tr style="border-top:1px solid #f0f0f0;">
                  <td style="padding:10px 0;font-weight:bold;color:#1B4D5C;vertical-align:top;">Phone</td>
                  <td style="padding:10px 0;color:#333;">${phone || "Not provided"}</td>
                </tr>
                <tr style="border-top:1px solid #f0f0f0;">
                  <td style="padding:10px 0;font-weight:bold;color:#1B4D5C;vertical-align:top;">Message</td>
                  <td style="padding:10px 0;color:#333;white-space:pre-wrap;">${message}</td>
                </tr>
              </table>
            </div>
            <div style="background:#f9f9f9;padding:16px 32px;border-top:1px solid #e0e0e0;">
              <p style="color:#999;font-size:12px;margin:0;">Sent from krestonestates.com</p>
            </div>
          </div>
        `,
      });

      console.log(`✅  Email sent — enquiry from ${firstName} ${lastName} (${email})`);
      return res.json({ success: true });

    } catch (err: any) {
      console.error("❌  Failed to send email:", err.message);
      return res.status(500).json({ success: false, error: err.message });
    }
  });

  // ─── Static Files ────────────────────────────────────────────────────────
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`🚀  Server running on http://localhost:${port}/`);
    if (!process.env.SMTP_PASS) {
      console.warn("⚠️   SMTP_PASS not set — contact form emails will not send.");
      console.warn("    Add SMTP_PASS=your_password to your .env file.");
    }
  });
}

startServer().catch(console.error);
