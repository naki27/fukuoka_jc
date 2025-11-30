import getRawBody from 'raw-body';
import { put } from '@vercel/blob';
import { Readable } from 'stream';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end('Method not allowed');

  const filename = req.query.filename;
  if (!filename) return res.status(400).send('filename query required');

  try {
    const buf = await getRawBody(req);
    const bodyBuffer = Buffer.from(buf);

    // Use Readable stream for Vercel Blob SDK
    const bodyStream = Readable.from(bodyBuffer);

    let blob;
    if (process.env.NODE_ENV === 'development') {
      // Mock for local development with delay
      console.log('Mocking upload for development');
      await new Promise(resolve => setTimeout(resolve, 2000)); // 2 second delay
      blob = { url: `https://mock-url.com/${filename}` };
    } else {
      // Use Vercel Blob SDK to upload
      blob = await put(filename, bodyStream, { access: 'public', contentLength: bodyBuffer.length, allowOverwrite: true });
    }

    return res.status(200).json({ url: blob.url });
  } catch (err) {
    console.error('uploadResult error', err);
    return res.status(500).json({ error: 'upload failed' });
  }
}
