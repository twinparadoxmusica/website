import PropTypes from 'prop-types';
import Image from 'next/image';
import SocialLinks from '../SocialLinks';
import './styles.css';

const Track = ({
  track: { title, subtitle, soundCloudIframe, platforms, artwork },
}) => {
  return (
    <section id="track" className="section-no-padding margin-top-10">
      <p className="release-header text-lg mb-6">
        <strong>{title}</strong> by Twin Paradox
      </p>
      <a
        className="btn-follow-sc track-cta margin-bottom-20"
        href="/api/soundcloud/login"
      >
        Follow on SoundCloud
      </a>
      {subtitle && <p className="release-subtitle text-sm mb-6">{subtitle}</p>}
      {artwork && (
        <div className="artwork-container margin-bottom-60">
          <Image
            src={artwork}
            alt={`${title} artwork`}
            width={300}
            height={300}
            priority
          />
        </div>
      )}
      {soundCloudIframe && (
        <div className="video-container">
          <iframe
            width="300"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={soundCloudIframe}
          ></iframe>
        </div>
      )}
      {platforms?.length ? (
        <div className="platform-links-container">
          {platforms.map((platform) => (
            <div
              className="platform-link"
              key={platform.name}
              data-platform={platform.name}
            >
              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="platform-button flex items-center justify-center gap-2 hover:scale-105 transition-transform py-2"
              >
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="platform-logo"
                  title={platform.name}
                />{' '}
                <span className="platform-text">PLAY</span>
              </a>
            </div>
          ))}
        </div>
      ) : null}
      <SocialLinks />
    </section>
  );
};

Track.propTypes = {
  track: PropTypes.object.isRequired,
};

export default Track;
