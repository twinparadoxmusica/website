'use client';

import PropTypes from 'prop-types';
import SocialLinks from '../SocialLinks';
import Bio from '../MusicBio';
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
      className="twin-paradox-logo fade-in margin-bottom-10"
    ></img>
    {displayVideo && (
      <>
        <div className="margin-bottom-20">
          <p className="bio-text">
            &ldquo;TWISTING ANCIENT DESIRES
            <br />
            SHALL GIVE NO MERCY&rdquo;
          </p>
        </div>
        <Video {...liveSetVideo} width={800} height={200} />

        <p className="presentation-title margin-bottom-5">
          HYBRID LIVE PERFORMANCE
        </p>
        <p className="presentation-subtitle margin-bottom-30">
          Geneva, Switzerland
        </p>
      </>
    )}
  </section>
);

About.propTypes = {
  hideText: PropTypes.bool,
};

export default About;
