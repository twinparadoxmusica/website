import SocialLinks from '../SocialLinks';
import Track from './Track';
import './styles.css';

const tracks = [
  {
    title: 'TECHNOROCK',
    date: 'February 2026',
    trackLink: '/releases/techno-rock',
    trackSoundCloudId: '2017289757',
    artwork: '/assets/twin-paradox-techno-rock-artwork.jpg',
    buttonText: 'Coming Out On Feb 9th, 2026',
  },
  {
    title: 'OUTBREAK',
    date: 'April 2025',
    trackLink: '/releases/outbreak',
    trackSoundCloudId: '2070386344',
    artwork: '/assets/twin-paradox-outbreak-album-cover.jpg',
    buttonText: 'Listen On Streaming Platforms',
  },
  {
    title: 'INSIDERS',
    date: 'January 2025',
    trackLink: '/releases/insiders',
    trackSoundCloudId: '2017289757',
    artwork: '/assets/twin-paradox-insiders-album-cover.jpg',
    buttonText: 'Listen On Streaming Platforms',
  },
];

const Music = () => (
  <section id="music" className="section margin-bottom-40">
    <div className="margin-bottom-40">
      <SocialLinks onlyMusicIcons />
    </div>
    <ul className="tracks-grid margin-bottom-40">
      {tracks.map((track, index) => (
        <li key={index} className="track-item">
          <Track {...track} />
        </li>
      ))}
    </ul>
  </section>
);

export default Music;
