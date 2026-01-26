import SocialLinks from '../SocialLinks';
import Track from './Track';
import './styles.css';

const tracks = [
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
];

const Music = () => (
  <section id="music" className="section">
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
