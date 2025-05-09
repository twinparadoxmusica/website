import PropTypes from 'prop-types';
import Script from 'next/script';

import './global.css'; // optional, create if needed

export const metadata = {
  title: 'Twin Paradox',
  description:
    'Twin Paradox is a Geneva-based Argentinian electronic music duo that creates hypnotic and energetic Techno with Rock/Metal influences.',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager (GTM) */}
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WG5WZF7R');
            `,
          }}
        />
        <base href="/" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        {/* Preload Images */}
        <link
          rel="preload"
          href="/assets/twin-paradox-typography.png"
          as="image"
        />
        <link
          rel="preload"
          href="/assets/collage/twin-paradox-dj-set.jpg"
          as="image"
        />
        <link
          rel="preload"
          href="/assets/collage/twin-paradox-ezequiel-guitar.jpg"
          as="image"
        />
        <link
          rel="preload"
          href="/assets/collage/twin-paradox-mirko-synthesizer.jpg"
          as="image"
        />
        <link
          rel="preload"
          href="/assets/collage/twin-paradox-live-set.jpg"
          as="image"
        />

        {/* SEO Meta Tags */}
        <meta
          name="title"
          content="Twin Paradox — Energetic Techno with Rock/Metal influences"
        />
        <meta
          name="description"
          content="Twin Paradox is a Geneva-based Argentinian electronic music duo that creates hypnotic and energetic Techno with Rock/Metal influences. Formed by Mirko Hrubik and Ezequiel Cappellano, they perform live and DJ sets using analog gear, guitars, synths and vocals."
        />
        <meta
          name="keywords"
          content="Twin Paradox, techno, raw techno, hypnotic techno, minimal techno, minimal house, techno rock, techno metal, technorock, technometal, electronic music duo, Argentinian musicians, Geneva techno, hybrid live set, techno with guitar, techno live act, electronic rock, analog techno, modular synth, hypnotic techno, Mirko Hrubik, Ezequiel Cappellano, Atahualpa Studio, DJ set Geneva, electronic duo 2023, techno band, rock influences, guitar, singer, techno live performance"
        />
        <meta name="author" content="Twin Paradox" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph & Twitter Cards */}
        <meta property="og:type" content="music.group" />
        <meta property="og:url" content="https://www.twinparadox.music/" />
        <meta
          property="og:title"
          content="Twin Paradox — Energetic Techno with Rock/Metal influences"
        />
        <meta
          property="og:description"
          content="Twin Paradox is a Geneva-based Argentinian electronic music duo that creates hypnotic and energetic Techno with Rock/Metal influences."
        />
        <meta
          property="og:image"
          content="https://www.twinparadox.music/assets/logo.svg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.twinparadox.music/" />
        <meta
          name="twitter:title"
          content="Twin Paradox — Energetic Techno with Rock/Metal influences"
        />
        <meta
          name="twitter:description"
          content="Twin Paradox is a Geneva-based Argentinian electronic music duo that creates hypnotic and energetic Techno with Rock/Metal influences."
        />
        <meta
          name="twitter:image"
          content="https://www.twinparadox.music/assets/logo.svg"
        />

        {/* Music Metadata */}
        <meta
          property="og:music:album"
          content="https://open.spotify.com/album/0LvvK9gqFoouRTrUw7O9uL"
        />
        <meta
          property="og:music:album"
          content="https://open.spotify.com/album/2XkFjPTNnAHBpzixivqazZ"
        />
        <meta
          property="og:music:musician"
          content="https://open.spotify.com/artist/1yhioOAuZ2fk2Qip3eMWgx"
        />
        <meta
          property="og:music:song"
          content="https://open.spotify.com/track/1lV4wtYEsYLkIlBvQOeb4f?si=f41f8961ea0b4d66"
        />
        <meta property="og:music:release_date" content="2025-04-28" />

        {/* JSON-LD Structured Data */}
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MusicGroup',
              name: 'Twin Paradox',
              genre: 'Techno, TechnoRock, TechnoMetal',
              foundingDate: '2023',
              founders: [
                { '@type': 'Person', name: 'Mirko Hrubik' },
                { '@type': 'Person', name: 'Ezequiel Cappellano' },
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Geneva',
                addressCountry: 'Switzerland',
              },
              url: 'https://www.twinparadox.music/',
              description:
                'Argentinian electronic music duo based in Geneva blending hypnotic techno with rock/metal influences. Live and DJ sets with analog gear, guitars and synths.',
              sameAs: [
                'https://www.youtube.com/@_twinparadox',
                'https://www.instagram.com/_twinparadox',
                'https://soundcloud.com/twin-paradox-musica',
                'https://open.spotify.com/artist/1yhioOAuZ2fk2Qip3eMWgx',
                'https://open.spotify.com/album/0LvvK9gqFoouRTrUw7O9uL',
                'https://open.spotify.com/album/2XkFjPTNnAHBpzixivqazZ',
                'https://twinparadoxmusica.bandcamp.com',
                'https://music.apple.com/us/artist/twin-paradox/1738057737',
                'https://ra.co/dj/twinparadox',
              ],
              musicAlbum: [
                {
                  '@type': 'MusicAlbum',
                  name: 'Insiders',
                  url: 'https://open.spotify.com/album/0LvvK9gqFoouRTrUw7O9uL',
                  image:
                    'https://www.twinparadox.music/assets/twin-paradox-insiders-album-cover.jpg',
                  byArtist: { '@type': 'MusicGroup', name: 'Twin Paradox' },
                  datePublished: '2025-28-01',
                  inLanguage: 'en',
                  sameAs: [
                    'https://open.spotify.com/album/0LvvK9gqFoouRTrUw7O9uL',
                    'https://twinparadoxmusica.bandcamp.com/album/insiders',
                    'https://music.apple.com/us/album/insiders-single/1790806875',
                    'https://www.youtube.com/watch?v=2VTmfk0gP8Q',
                    'https://soundcloud.com/twin-paradox-musica/twin-paradox-insiders',
                  ],
                },
                {
                  '@type': 'MusicAlbum',
                  name: 'Outbreak',
                  url: 'https://open.spotify.com/album/2XkFjPTNnAHBpzixivqazZ',
                  image:
                    'https://www.twinparadox.music/assets/twin-paradox-outbreak-album-cover.jpg',
                  byArtist: { '@type': 'MusicGroup', name: 'Twin Paradox' },
                  datePublished: '2025-28-04',
                  inLanguage: 'en',
                  sameAs: [
                    'https://open.spotify.com/album/2XkFjPTNnAHBpzixivqazZ',
                    'https://twinparadoxmusica.bandcamp.com/track/outbreak',
                    'https://music.apple.com/us/album/outbreak-single/1807299057',
                    'https://www.youtube.com/watch?v=t3NHdVsFl2c',
                    'https://soundcloud.com/twin-paradox-musica/twin-paradox-outbreak',
                  ],
                },
              ],
            }),
          }}
        />

        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* Google Tag Manager noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WG5WZF7R"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <title>Twin Paradox Official Website</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

RootLayout.propTypes = {
  children: PropTypes.node, // Corrected PropTypes type
};

export default RootLayout;
