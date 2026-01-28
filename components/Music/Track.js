import Link from 'next/link';
import Image from 'next/image';

import './styles.css';

const Track = ({ title, date, trackSoundCloudLink, artwork }) => (
  <div className="track">
    <div className="margin-bottom-20">
      <Link className="font-color-light-purple" href={trackSoundCloudLink}>
        <strong>{title}</strong>
      </Link>
      <br />
      {date}
    </div>
    <div className="track-container">
      <Image
        src={artwork}
        alt={`${title} artwork`}
        width={250}
        height={250}
        priority
      />
    </div>
  </div>
);

export default Track;
