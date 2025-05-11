import PropTypes from 'prop-types';
import SocialLinks from '../SocialLinks';
import './styles.css';

const Track = ({ track: { title, soundCloudIframe, platforms } }) => {
  return (
    <section id="track" className="section-no-padding margin-top-xxs">
      <p className="release-header text-lg mb-6">
        <strong>{title}</strong> by Twin Paradox
      </p>
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
      <div className="platform-links-container">
        {platforms.map((platform) => (
          <div className="platform-link" key={platform.name}>
            <a
              href={platform.url}
              data-platform={platform.name}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 hover:scale-105 transition-transform py-2"
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
      <SocialLinks />
    </section>
  );
};

Track.propTypes = {
  track: PropTypes.object.isRequired,
};

export default Track;
