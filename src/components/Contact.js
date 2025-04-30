import React from 'react';

const Contact = () => (
  <section id="contact" className="section">
    <h2>Contact</h2>
    <p>Feel free to reach out at:</p>
    <p>
      <a data-name="mail-text" href="mailto:twinparadoxmusica@gmail.com">
        twinparadoxmusica@gmail.com
      </a>
    </p>
    <p>
      <a
        data-name="presskit-english"
        href="https://www.twinparadox.music/assets/TwinParadoxPressKit-EN.pdf"
      >
        PressKit (English)
      </a>
    </p>
    <p>
      <a
        data-name="presskit-french"
        href="https://www.twinparadox.music/assets/TwinParadoxPressKit-FR.pdf"
      >
        Press Kit (Français)
      </a>
    </p>
  </section>
);

export default Contact;
