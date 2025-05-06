import logoSpotify from '../assets/spotify.png';
import logoAppleMusic from '../assets/applemusic.png';
import logoSoundCloud from '../assets/soundcloud.png';
import logoYouTube from '../assets/youtube.png';
import logoDeezer from '../assets/deezer.png';
import logoBandcamp from '../assets/bandcamp.png';

const platforms = [
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/track/5SdWEDGpzt3IhXcMtuAvjc?si=690d5de4124c426a',
    logo: logoSpotify,
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/us/song/insiders/1790806876',
    logo: logoAppleMusic,
  },
  {
    name: 'SoundCloud',
    url: 'https://soundcloud.com/twin-paradox-musica/twin-paradox-insiders',
    logo: logoSoundCloud,
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/watch?v=2VTmfk0gP8Q',
    logo: logoYouTube,
  },
  {
    name: 'Deezer',
    url: 'https://dzr.page.link/tBg86ipCYZd2A7Qy6',
    logo: logoDeezer,
  },
  {
    name: 'Bandcamp',
    url: 'https://twinparadoxmusica.bandcamp.com/album/insiders',
    logo: logoBandcamp,
  },
];

const insiders = {
  title: 'INSIDERS',
  soundCloudIframe:
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2017289757&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true',
  platforms,
};

export default insiders;
