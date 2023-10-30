import { transporter } from '@/config/node-mailer-config';
import { mailOptions } from '@/config/node-mailer-config';
import { emailTemplate } from '@/template/email-template';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, name, subject, message } = await request.json();
    const response = await transporter.sendMail({
      ...mailOptions,
      subject,
      text: `
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Message:
      ${message}
      `,
      html: emailTemplate({ name, email, subject, message }),
    });

    if (!response.accepted)
      return NextResponse.json({
        ok: false,
        msg: 'Could not send the mail, try again',
      });

    return NextResponse.json({
      ok: true,
      msg: 'Mail has been sent successfully',
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ ok: false, msg: 'Something went wrong' });
  }
}
