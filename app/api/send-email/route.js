import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        // 1. Validate on server side as well
        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing Required Fields' }, { status: 400 });
        }

        // 2. Configure Nodemailer Transporter
        // IMPORTANT: User needs to set these env variables for this to work
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST || 'smtp.gmail.com', // Default fallback
            port: Number(process.env.EMAIL_PORT) || 587,
            secure: Boolean(process.env.EMAIL_SECURE) || false, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // 3. Send Email
        await transporter.sendMail({
            from: process.env.EMAIL_USER, // Sender address
            to: 'info@codexea.com', // Receiver address (codexea)
            replyTo: email, // Allow replying directly to the user
            subject: `New Contact Form Submission from ${name}`,
            text: `
Name: ${name}
Email: ${email}

Message:
${message}
            `,
            html: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
            `,
        });

        return NextResponse.json({ message: 'Email Sent Successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
