import React from 'react';

const links = [
  {
    url: 'mailto:twinparadoxmusica@gmail.com',
    name: 'mail-icon',
    icon: () => (
      <img
        src="https://img.icons8.com/?size=100&id=86885&format=png&color=FFFFFF"
        alt="Mail"
        className="w-6 h-6"
      />
    ),
  },
  {
    url: 'https://www.youtube.com/@_twinparadox',
    name: 'youtube',
    icon: () => (
      <img
        src="https://img.icons8.com/?size=100&id=62852&format=png&color=FFFFFF"
        alt="YouTube"
        className="w-6 h-6"
      />
    ),
  },
  {
    url: 'https://www.instagram.com/_twinparadox/',
    name: 'instagram',
    icon: () => (
      <img
        src="https://img.icons8.com/?size=100&id=RhYNENh5cxlS&format=png&color=FFFFFF"
        alt="Instagram"
        className="w-6 h-6 invert"
      />
    ),
  },
  {
    name: 'spotify',
    url: 'https://open.spotify.com/artist/1yhioOAuZ2fk2Qip3eMWgx',
    icon: () => (
      <img
        src="https://img.icons8.com/?size=100&id=11116&format=png&color=FFFFFF"
        alt="Spotify"
        className="w-6 h-6 invert"
      />
    ),
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/us/artist/twin-paradox/1738057737',
    icon: () => (
      <img
        src="https://img.icons8.com/?size=100&id=mpeojql23sni&format=png&color=FFFFFF"
        alt="Apple Music"
        className="w-6 h-6 invert"
      />
    ),
  },
  {
    name: 'bandcamp',
    url: 'https://twinparadoxmusica.bandcamp.com/album/insiders',
    icon: () => (
      <img
        src="https://img.icons8.com/?size=100&id=rK25y5HOfE7E&format=png&color=FFFFFF"
        alt="Bandcamp"
        className="w-6 h-6"
      />
    ),
  },
  {
    name: 'soundcloud',
    url: 'https://soundcloud.com/twin-paradox-musica',
    icon: () => (
      <img
        src="https://img.icons8.com/?size=100&id=12499&format=png&color=FFFFFF"
        alt="SoundCloud"
        className="w-6 h-6"
      />
    ),
  },
];
const SocialLinks = () => (
  <div className="social-links">
    {links.map(({ icon: Icon, url, name }) => (
      <a
        key={name}
        data-name={name}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={name}
        className="hover:text-blue-500 transition-colors"
      >
        <Icon className="w-6 h-6" />
      </a>
    ))}
  </div>
);

export default SocialLinks;
