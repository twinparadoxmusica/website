import React from 'react';
import SocialLinks from '../SocialLinks';

import './styles.css';

const ContactForm = () => (
  <div className="contact-wrapper section margin-top-10">
    <div className="margin-bottom-30">
      <p className="margin-bottom-10 font-size-sm font-color-light-purple">
        BOOKING - PRESS - COLLABORATIONS
      </p>
      <p className="font-size-md">
        <a href="mailto:twinparadoxmusica@gmail.com">
          twinparadoxmusica@gmail.com
        </a>
      </p>
    </div>
    <div className="image-container margin-bottom-40">
      <img
        src="/assets/collage/twin-paradox-live-set.jpg"
        alt="Twin Paradox Live Set"
      />
    </div>
    <div className="margin-bottom-none">
      <SocialLinks />
    </div>
  </div>
);

export default ContactForm;
