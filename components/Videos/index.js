import SocialLinks from '../SocialLinks';
import Video from './Video';
import './styles.css';

const videos = [
  {
    title: 'Techno Rock Live Set | Salle du Terreau, Geneva',
    date: 'November 2025',
    videoUrl: 'https://www.youtube.com/watch?v=ggS_7tSCqNw',
    embedUrl:
      'https://www.youtube.com/embed/ggS_7tSCqNw?si=ys8P7_7q9trApJox?enablejsapi=1',
  },
  {
    title: 'Insiders (Official Music Video)',
    date: 'January 2025',
    videoUrl: 'https://www.youtube.com/watch?v=GEH6M5wipNk',
    embedUrl:
      'https://www.youtube.com/embed/GEH6M5wipNk?si=KqaSQNbyuCt7Mbnf?enablejsapi=1',
  },
];

const Videos = () => (
  <section id="videos" className="section">
    <h2 className="margin-bottom-40 presentation-title-lg">MUSIC VIDEOS</h2>
    {videos.map((video, index) => (
      <Video key={index} {...video} height={230} />
    ))}
  </section>
);

export default Videos;
