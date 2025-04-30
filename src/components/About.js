import React from 'react';
import SocialLinks from './SocialLinks.js';
import logo from '../assets/twin-paradox-typography.png';

const About = () => (
  <section id="about" className="section">
    <img
      src={logo}
      alt="Twin Paradox Logo"
      className="twin-paradox-logo fade-in margin-bottom-lg"
    ></img>
    <p>
      Twin Paradox, an Argentinian electronic music duo based in Geneva, was
      formed in 2023 by Mirko Hrubik and Ezequiel Cappellano. They create
      hypnotic and energetic <b>Techno</b> with <b>Rock/Metal</b> influences,
      using analog and digital hardware with instruments like guitar, voice and
      synthesizers, performing both <b>Live Sets</b> and <b>DJ formats</b>.
    </p>
    <p className="margin-bottom-sm">
      Read full bio at{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        data-name="resident-advisor"
        href="https://ra.co/dj/twinparadox/biography"
      >
        Resident Advisor
      </a>
    </p>
    <SocialLinks />
  </section>
);

export default About;
