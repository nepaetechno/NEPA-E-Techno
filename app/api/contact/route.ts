import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, projectType, budget, deadline, description, service, message } = body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        // Construct email content based on which form was submitted
        let subject = 'New Contact Form Submission';
        let htmlContent = '';

        if (projectType) {
            // Project Inquiry Form
            subject = `New Project Inquiry from ${name}`;
            htmlContent = `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Deadline:</strong> ${deadline || 'Not provided'}</p>
        <p><strong>Description:</strong></p>
        <p>${description}</p>
      `;
        } else {
            // General Contact Form
            subject = `New Contact Message from ${name}`;
            htmlContent = `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service Interest:</strong> ${service || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `;
        }

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: 'nepaetechno@gmail.com',
            subject: subject,
            html: htmlContent,
            replyTo: email,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
