import SocialLinks from '../SocialLinks';
import Track from './Track';
import './styles.css';

const tracks = [
  {
    title: 'Raw Techno / Hardgroove Mix @ Studio 29, Geneva',
    date: 'May 2025',
    trackSoundCloudLink:
      'https://soundcloud.com/studio29_gva/s29btr6021-twin-paradox',
    trackSoundCloudId: '2099805354',
  },
  {
    title: 'OUTBREAK',
    date: 'April 2025',
    trackSoundCloudLink: '/music/outbreak',
    trackSoundCloudId: '2070386344',
  },
  {
    title: 'INSIDERS',
    date: 'January 2025',
    trackSoundCloudLink: '/music/insiders',
    trackSoundCloudId: '2017289757',
  },
  {
    title: 'Hypnotic Techno DJ Set at Hama Club',
    date: 'December 2024',
    trackSoundCloudLink:
      'https://soundcloud.com/twin-paradox-musica/dj-set-at-hama-club-mar-del-plata-argentina',
    trackSoundCloudId: '2069654668',
  },
  {
    title: 'Studio Mix (Raw Techno / Hypnogroove / Hardgroove)',
    date: 'December 2024',
    trackSoundCloudLink:
      'https://soundcloud.com/twin-paradox-musica/twin-paradox-dj-set-studio-mix-raw-techno-hypnogroove-hardgroove',
    trackSoundCloudId: '2119622418',
  },
  {
    title: 'Hypnotic Minimal House Studio Mix',
    date: 'July 2024',
    trackSoundCloudLink:
      'https://soundcloud.com/twin-paradox-musica/hypnotic-minimal-house-studio-mix-003-july-2024',
    trackSoundCloudId: '1863839835',
  },
];

const Music = () => (
  <section id="music" className="section">
    <h2>Stream Music</h2>
    <p>Discover our music on streaming platforms</p>
    <SocialLinks onlyMusicIcons />
    <ul className="margin-bottom-sm">
      {tracks.map((track, index) => (
        <li key={index} className="margin-bottom-xs">
          <Track {...track} />
        </li>
      ))}
    </ul>
  </section>
);

export default Music;
