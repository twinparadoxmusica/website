import React from 'react';
import PropTypes from 'prop-types';
import SocialLinks from '../SocialLinks/index.js';

const Track = ({ track: { title, soundCloudIframe, platforms } }) => {
  return (
    <section id="releases" className="section-no-padding margin-top-xxs">
      <p className="text-lg mb-6">
        <strong>{title}</strong> by Twin Paradox
      </p>
      <div className="video-container margin-bottom-sm">
        <iframe
          width="300"
          height="300"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={soundCloudIframe}
        ></iframe>
      </div>
      <SocialLinks />

      <div className="platform-links-container">
        {platforms.map((platform) => (
          <div className="platform-link" key={platform.name}>
            <a
              href={platform.url}
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
    </section>
  );
};

Track.propTypes = {
  track: PropTypes.object.isRequired,
};

export default Track;
