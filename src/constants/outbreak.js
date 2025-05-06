import logoSpotify from '../assets/spotify.png';
import logoAppleMusic from '../assets/applemusic.png';
import logoSoundCloud from '../assets/soundcloud.png';
import logoYouTube from '../assets/youtube.png';
import logoDeezer from '../assets/deezer.png';
import logoBandcamp from '../assets/bandcamp.png';

const platforms = [
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/track/1lV4wtYEsYLkIlBvQOeb4f?si=14d1e3e07128492d',
    logo: logoSpotify,
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/us/song/outbreak/1807299058',
    logo: logoAppleMusic,
  },
  {
    name: 'SoundCloud',
    url: 'https://soundcloud.com/twin-paradox-musica/twin-paradox-outbreak',
    logo: logoSoundCloud,
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/watch?v=t3NHdVsFl2c',
    logo: logoYouTube,
  },
  {
    name: 'Deezer',
    url: 'https://dzr.page.link/BBj4LriMeYPoq6YS7',
    logo: logoDeezer,
  },
  {
    name: 'Bandcamp',
    url: 'https://twinparadoxmusica.bandcamp.com/track/outbreak',
    logo: logoBandcamp,
  },
];

const outbreak = {
  title: 'OUTBREAK',
  soundCloudIframe:
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2070386344&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true',
  platforms,
};

export default outbreak;
