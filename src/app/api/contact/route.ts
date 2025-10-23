import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const name = String(form.get('name') || '');
  const email = String(form.get('email') || '');
  const message = String(form.get('message') || '');

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 });
  }

  // For now, just log to server; integrate Resend/SMTP later if desired.
  console.log('CONTACT_FORM', { name, email, message });
  return NextResponse.json({ ok: true });
}

