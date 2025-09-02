import Link from 'next/link';
import './styles.css';

const Track = ({ title, date, trackSoundCloudLink, trackSoundCloudId }) => (
  <div className="track">
    <div className="margin-bottom-xs">
      <Link href={trackSoundCloudLink}>
        <strong>{title}</strong>
      </Link>
      <br />
      {date}
    </div>
    <div className="track-container">
      <iframe
        width="500"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackSoundCloudId}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false`}
      ></iframe>
    </div>
  </div>
);

export default Track;
