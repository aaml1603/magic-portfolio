import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_KEY || 'placeholder_key');

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, lastName } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_KEY || process.env.RESEND_KEY === 'placeholder_key') {
      console.log('Newsletter signup attempted but Resend API key not configured:', email);
      return NextResponse.json(
        { message: 'Newsletter signup temporarily unavailable' },
        { status: 200 }
      );
    }

    // Add contact to Resend audience
    const response = await resend.contacts.create({
      email: email,
      firstName: firstName || '',
      lastName: lastName || '',
      unsubscribed: false,
      audienceId: '003415b3-2d9d-4511-a9a5-2948f10e689b',
    });

    if (response.error) {
      console.error('Resend API error:', response.error);
      return NextResponse.json(
        { error: 'Failed to subscribe to newsletter' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter', id: response.data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}