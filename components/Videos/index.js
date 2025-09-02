import SocialLinks from '../SocialLinks';
import Video from './Video';
import './styles.css';

const videos = [
  {
    title: 'Insiders (Official Music Video)',
    date: 'January 2025',
    videoUrl: 'https://www.youtube.com/watch?v=GEH6M5wipNk',
    embedUrl:
      'https://www.youtube.com/embed/GEH6M5wipNk?si=KqaSQNbyuCt7Mbnf?enablejsapi=1',
  },
  {
    title: 'Hypnotic Techno DJ Set at Hama Club',
    date: 'January 2025',
    videoUrl: 'https://www.youtube.com/watch?v=P361vVvKCXg',
    embedUrl:
      'https://www.youtube.com/embed/P361vVvKCXg?si=KqaSQNbyuCt7Mbnf?enablejsapi=1',
  },
  {
    title: 'Studio Mix (Raw Techno / Hypnogroove / Hardgroove)',
    date: 'December 2024',
    videoUrl: 'https://www.youtube.com/watch?v=lnWuzf8D5KI',
    embedUrl:
      'https://www.youtube.com/embed/lnWuzf8D5KI?si=KqaSQNbyuCt7Mbnf?enablejsapi=1',
  },
];

const Videos = () => (
  <section id="videos" className="section">
    <h2 className="margin-bottom-sm">Music Videos</h2>
    {videos.map((video, index) => (
      <Video key={index} {...video} />
    ))}
    <SocialLinks />
  </section>
);

export default Videos;
