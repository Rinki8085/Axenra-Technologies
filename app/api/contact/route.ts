import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number, timestamp: number }>();
const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5; // 5 requests per minute

export async function POST(request: Request) {
  try {
    // 1. Rate Limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    const rateLimitInfo = rateLimitMap.get(ip);

    if (rateLimitInfo) {
      if (now - rateLimitInfo.timestamp < WINDOW_MS) {
        if (rateLimitInfo.count >= MAX_REQUESTS) {
          return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
        }
        rateLimitInfo.count++;
      } else {
        rateLimitMap.set(ip, { count: 1, timestamp: now });
      }
    } else {
      rateLimitMap.set(ip, { count: 1, timestamp: now });
    }

    // Clean up old entries periodically
    if (rateLimitMap.size > 1000) {
        rateLimitMap.clear();
    }

    // 2. Parse body
    const body = await request.json();
    
    // Support both generic 'name, email, subject, description' and specific form fields
    const { 
      name, 
      firstName, 
      lastName, 
      email, 
      subject, 
      description,
      phone,
      website,
      goal,
      challenges
    } = body;

    // Resolve fields from different forms
    const finalName = name || (firstName && lastName ? `${firstName} ${lastName}` : firstName || 'Unknown');
    const finalEmail = email;
    const finalSubject = subject || goal || 'New Contact Form Submission';
    const finalDescription = description || challenges || `Phone: ${phone || 'N/A'}\nWebsite: ${website || 'N/A'}\nGoal: ${goal || 'N/A'}`;

    if (!finalEmail) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    if (!process.env.SMTP_EMAIL || !process.env.SMTP_PASSWORD) {
      console.error('SMTP credentials are not configured in environment variables');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // 3. Setup Nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // 4. Send Email
    const mailOptions = {
      from: `"${finalName}" <${finalEmail}>`,
      to: process.env.SMTP_EMAIL, // Send to yourself
      replyTo: finalEmail,
      subject: `Website Lead: ${finalSubject}`,
      text: `
Name: ${finalName}
Email: ${finalEmail}
Phone: ${phone || 'N/A'}
Website: ${website || 'N/A'}
Goal/Subject: ${finalSubject}

Message/Challenges:
${finalDescription}
      `,
      html: `
        <h3>New Lead from Website</h3>
        <p><strong>Name:</strong> ${finalName}</p>
        <p><strong>Email:</strong> ${finalEmail}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Website:</strong> ${website || 'N/A'}</p>
        <p><strong>Goal/Subject:</strong> ${finalSubject}</p>
        <p><strong>Message/Challenges:</strong></p>
        <p>${(finalDescription || '').replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send message', details: error.message }, { status: 500 });
  }
}
