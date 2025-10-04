import crypto from 'crypto'

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const key = process.env.PAYU_KEY
  const salt = process.env.PAYU_SALT

  // 1. Validate that server environment variables are set
  if (!key || !salt) {
    console.error('PayU key or salt is not configured in environment variables.');
    return res.status(500).json({ error: 'Payment gateway is not configured.' });
  }

  const { txnid, amount, productinfo, firstname, email } = req.body

  // 2. Validate that all required fields are present in the request body
  const requiredFields = { txnid, amount, productinfo, firstname, email };
  for (const [fieldName, fieldValue] of Object.entries(requiredFields)) {
    if (!fieldValue) {
      return res.status(400).json({ error: `Missing required field: ${fieldName}` });
    }
  }

  // Hash string format: key|txnid|amount|productinfo|firstname|email|||||||||||salt
  const hashString = `${key}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|||||||||||${salt}`
  const hash = crypto.createHash('sha512').update(hashString).digest('hex')

  res.status(200).json({ hash, key })
}