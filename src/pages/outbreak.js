import React from 'react';
import logoSpotify from '../assets/spotify.png';
import logoAppleMusic from '../assets/applemusic.png';
import logoSoundCloud from '../assets/soundcloud.png';
import logoYouTube from '../assets/youtube.png';
import logoDeezer from '../assets/deezer.png';
import logoBandcamp from '../assets/bandcamp.png';

const platforms = [
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/track/your-track-id',
    logo: logoSpotify,
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/your-track-link',
    logo: logoAppleMusic,
  },
  {
    name: 'SoundCloud',
    url: 'https://soundcloud.com/twinparadox/outbreak',
    logo: logoSoundCloud,
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/watch?v=your-video-id',
    logo: logoYouTube,
  },
  {
    name: 'Deezer',
    url: 'https://www.deezer.com/track/your-track-id',
    logo: logoDeezer,
  },
  {
    name: 'Bandcamp',
    url: 'https://twinparadox.bandcamp.com/track/outbreak',
    logo: logoBandcamp,
  },
];

const Outbreak = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-10">
      <section id="releases" className="section-no-padding margin-top-xs">
        <h1 className="text-4xl font-bold mb-4">OUTBREAK</h1>
        <p className="text-lg mb-6">Listen to the new single by Twin Paradox</p>
        <div className="video-container">
          <iframe
            width="300"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2070386344&color=%23ff5500&auto_play=true&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"
          ></iframe>
        </div>
        <div className="platform-links-container">
          {platforms.map((platform) => (
            <div className="platform-link" key={platform.name}>
              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 hover:scale-105 transition-transform py-2"
              >
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="platform-logo"
                  title={platform.name}
                />{' '}
                <span className="platform-text">PLAY</span>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Outbreak;
