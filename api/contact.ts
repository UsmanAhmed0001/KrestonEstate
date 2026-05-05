import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, lastName, email, phone, message } = req.body;

  if (!firstName || !email || !message) {
    return res.status(400).json({ success: false, error: 'Missing required fields' });
  }

  const smtpPass = process.env.SMTP_PASS;
  if (!smtpPass) {
    return res.status(500).json({ success: false, error: 'Email not configured' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.hostinger.com',
    port: Number(process.env.SMTP_PORT) || 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER || 'info@krestonestates.com',
      pass: smtpPass,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Kreston Estates Website" <${process.env.SMTP_USER || 'info@krestonestates.com'}>`,
      to: 'info@krestonestates.com',
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
                <td style="padding:10px 0;font-weight:bold;color:#1B4D5C;width:120px;">Name</td>
                <td style="padding:10px 0;">${firstName} ${lastName}</td>
              </tr>
              <tr style="border-top:1px solid #f0f0f0;">
                <td style="padding:10px 0;font-weight:bold;color:#1B4D5C;">Email</td>
                <td style="padding:10px 0;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr style="border-top:1px solid #f0f0f0;">
                <td style="padding:10px 0;font-weight:bold;color:#1B4D5C;">Phone</td>
                <td style="padding:10px 0;">${phone || 'Not provided'}</td>
              </tr>
              <tr style="border-top:1px solid #f0f0f0;">
                <td style="padding:10px 0;font-weight:bold;color:#1B4D5C;vertical-align:top;">Message</td>
                <td style="padding:10px 0;white-space:pre-wrap;">${message}</td>
              </tr>
            </table>
          </div>
          <div style="background:#f9f9f9;padding:16px 32px;border-top:1px solid #e0e0e0;">
            <p style="color:#999;font-size:12px;margin:0;">Sent from krestonestates.com</p>
          </div>
        </div>
      `,
    });

    return res.json({ success: true });
  } catch (err: any) {
    console.error('Email error:', err.message);
    return res.status(500).json({ success: false, error: err.message });
  }
}
