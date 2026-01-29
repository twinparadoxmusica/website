/* eslint-disable no-undef */
/* eslint-env node */
import crypto from 'crypto';

export default function handler(req, res) {
  const clientId = process.env.SOUNDCLOUD_CLIENT_ID;
  const redirectUri = process.env.SOUNDCLOUD_REDIRECT_URI;

  if (!clientId || !redirectUri) {
    return res.status(500).send('Missing SoundCloud env vars');
  }

  // CSRF protection
  const state = crypto.randomBytes(16).toString('hex');

  const authUrl = new URL('https://soundcloud.com/connect');
  authUrl.searchParams.set('client_id', clientId);
  authUrl.searchParams.set('redirect_uri', redirectUri);
  authUrl.searchParams.set('response_type', 'code');
  authUrl.searchParams.set('state', state);

  // Guardamos state en cookie httpOnly
  res.setHeader('Set-Cookie', [
    `sc_oauth_state=${state}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=600`,
  ]);

  res.redirect(authUrl.toString());
}
