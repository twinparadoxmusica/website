import Link from 'next/link';

const Contact = () => (
  <section id="contact" className="section">
    <h2>Contact</h2>
    <p>
      Feel free to drop a message{' '}
      <Link href="/contact">
        <strong>here</strong>
      </Link>
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
        PressKit (Français)
      </a>
    </p>
  </section>
);

export default Contact;
