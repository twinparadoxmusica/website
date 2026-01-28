import SocialLinks from '../SocialLinks';
import Track from './Track';
import './styles.css';

const tracks = [
  {
    title: 'TECHNOROCK',
    date: 'February 2026',
    trackSoundCloudLink: '/releases/techno-rock',
    trackSoundCloudId: '2017289757',
    artwork: '/assets/twin-paradox-techno-rock-artwork.jpg',
  },
  {
    title: 'OUTBREAK',
    date: 'April 2025',
    trackSoundCloudLink: '/releases/outbreak',
    trackSoundCloudId: '2070386344',
    artwork: '/assets/twin-paradox-outbreak-album-cover.jpg',
  },
  {
    title: 'INSIDERS',
    date: 'January 2025',
    trackSoundCloudLink: '/releases/insiders',
    trackSoundCloudId: '2017289757',
    artwork: '/assets/twin-paradox-insiders-album-cover.jpg',
  },
];

const Music = () => (
  <section id="music" className="section">
    <SocialLinks onlyMusicIcons />
    <ul className="margin-bottom-40">
      {tracks.map((track, index) => (
        <li key={index} className="margin-bottom-20">
          <Track {...track} />
        </li>
      ))}
    </ul>
  </section>
);

export default Music;
