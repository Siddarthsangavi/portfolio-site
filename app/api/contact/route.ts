import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message } = data;
    
    // Simple validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Here you would typically send an email using a service like SendGrid, Mailgun, etc.
    // For now, we'll just log it and return a success message
    console.log('Form submission:', { name, email, message });

    // TODO: Add actual email sending logic here
    // Example with SendGrid would be:
    // await sendEmail({ name, email, message });

    return NextResponse.json({ success: true, message: "Message received. Thank you!" });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: "Error processing your request" },
      { status: 500 }
    );
  }
} 