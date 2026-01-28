import Link from 'next/link';
import Image from 'next/image';

import './styles.css';

const Track = ({ title, date, trackLink, artwork, buttonText }) => (
  <div className="track">
    <div className="track-container margin-bottom-10">
      <Link className="font-color-light-purple" href={trackLink}>
        <strong>{title}</strong>
      </Link>
      <p className="track-date">{date}</p>
      <Link href={trackLink}>
        <Image
          src={artwork}
          alt={`${title} artwork`}
          width={250}
          height={250}
          priority
        />
      </Link>
    </div>
    <Link href={trackLink} className="track-cta">
      {buttonText}
    </Link>
  </div>
);

export default Track;
