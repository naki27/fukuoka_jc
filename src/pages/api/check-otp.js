export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end('Method not allowed');

  try {
    const { otp } = req.body || {};
    const configured = process.env.UPLOAD_OTP || process.env.RESULT_UPLOAD_OTP;

    if (!configured) {
      console.error('UPLOAD_OTP not set in environment');
      return res.status(500).json({ ok: false, error: 'Server not configured' });
    }

    if (!otp) return res.status(400).json({ ok: false, error: 'otp required' });

    if (String(otp) === String(configured)) {
      return res.status(200).json({ ok: true });
    }

    return res.status(401).json({ ok: false });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false });
  }
}
