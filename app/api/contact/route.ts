import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Configure your email transport
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Change this if you're using another email provider
      auth: {
        user: process.env.MY_EMAIL, // Your email
        pass: process.env.MY_PASSWORD, // App password or actual password
      },
    });

    // Email options
    const mailOptions = {
      from: email,
      to: process.env.MY_EMAIL, // Your email where you receive messages
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Error sending email', error }, { status: 500 });
  }
}
