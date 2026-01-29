/* eslint-disable no-undef */
/* eslint-env node */

function getCookie(req, name) {
  const cookie = req.headers.cookie || '';
  const match = cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

export default async function handler(req, res) {
  const code = req.query.code;
  const state = req.query.state;

  const clientId = process.env.SOUNDCLOUD_CLIENT_ID;
  const clientSecret = process.env.SOUNDCLOUD_CLIENT_SECRET;
  const redirectUri = process.env.SOUNDCLOUD_REDIRECT_URI;
  const artistUserId = process.env.SOUNDCLOUD_ARTIST_USER_ID;
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://twinparadox.music';

  if (!code || !state) {
    return res.redirect(`${siteUrl}/releases?follow=fail`);
  }

  const cookieState = getCookie(req, 'sc_oauth_state');
  if (!cookieState || cookieState !== state) {
    return res.status(400).send('Invalid state');
  }

  if (!clientId || !clientSecret || !redirectUri || !artistUserId) {
    return res.status(500).send('Missing SoundCloud env vars');
  }

  try {
    // 1) Exchange code -> access token
    const tokenRes = await fetch('https://api.soundcloud.com/oauth2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        code: String(code),
      }),
    });

    if (!tokenRes.ok) {
      const txt = await tokenRes.text();
      return res.status(400).send(`Token error: ${txt}`);
    }

    const tokenJson = await tokenRes.json();
    const accessToken = tokenJson.access_token;

    // 2) Follow Twin Paradox (PUT /me/followings/:user_id)
    const followRes = await fetch(
      `https://api.soundcloud.com/me/followings/${artistUserId}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `OAuth ${accessToken}`,
          Accept: 'application/json',
        },
      }
    );

    // Limpia cookie state
    res.setHeader(
      'Set-Cookie',
      'sc_oauth_state=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0'
    );

    if (followRes.ok) {
      return res.redirect(`${siteUrl}/releases/insiders?follow=ok`);
    } else {
      return res.redirect(`${siteUrl}/releases/insiders?follow=fail`);
    }
  } catch (err) {
    return res.redirect(`${siteUrl}/releases/insiders?follow=fail`);
  }
}
