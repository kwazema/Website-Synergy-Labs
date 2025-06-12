import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.company || !formData.challenge) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you would integrate with your n8n webhook
    // Replace with your actual n8n webhook URL
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL || 'https://your-n8n-instance.com/webhook/contact-form';
    
    // Send data to n8n
    const response = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString(),
        source: 'website',
        utm_source: request.headers.get('referer') || 'direct',
      }),
    });

    if (!response.ok) {
      console.error('N8N webhook failed:', response.statusText);
      return NextResponse.json(
        { error: 'Failed to process form submission' },
        { status: 500 }
      );
    }

    // Log the submission (remove in production or use proper logging)
    console.log('Form submission received:', {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      challenge: formData.challenge,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ 
      message: 'Form submitted successfully',
      status: 'success' 
    });

  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}