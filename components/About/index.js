'use client';

import PropTypes from 'prop-types';
import SocialLinks from '../SocialLinks';
import Bio from '../Bio';
import Video from '../Videos/Video';
import './styles.css';

const liveSetVideo = {
  videoUrl: 'https://www.youtube.com/watch?v=GEH6M5wipNk',
  embedUrl: 'https://www.youtube.com/embed/ggS_7tSCqNw?si=xyIBN3O8sKbkHwh6',
};

const About = ({ displayVideo = true }) => (
  <section id="about" className="section">
    <img
      src="/assets/twin-paradox-logo-purple.png"
      alt="Twin Paradox Logo"
      className="twin-paradox-logo fade-in margin-bottom-xs"
    ></img>
    {displayVideo && (
      <>
        <p className="presentation-title margin-bottom-none">
          <b>TECHNO ROCK</b> LIVE SET
        </p>
        <p className="presentation-subtitle margin-bottom-xs">
          Geneva, Switzerland
        </p>
        <Video {...liveSetVideo} width={800} height={230} />
        <div className="margin-bottom-xl">
          <p className="bio-text">
            "TWISTING ANCIENT DESIRES SHALL GIVE NO MERCY"
          </p>
        </div>
      </>
    )}
  </section>
);

About.propTypes = {
  hideText: PropTypes.bool,
};

export default About;
