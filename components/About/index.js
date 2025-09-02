'use client';

import PropTypes from 'prop-types';
import SocialLinks from '../SocialLinks';
import Bio from './Bio';
import './styles.css';

const About = ({ hideText }) => (
  <section id="about" className="section">
    <img
      src="/assets/twin-paradox-typography.png"
      alt="Twin Paradox Logo"
      className={`twin-paradox-logo fade-in ${hideText ? '' : 'margin-bottom-lg'}`}
    ></img>
    {hideText ? null : (
      <div className="margin-bottom-xs">
        <p className="margin-bottom-sm">
          <Bio />
        </p>
        <SocialLinks />
      </div>
    )}
  </section>
);

About.propTypes = {
  hideText: PropTypes.bool,
};

export default About;
