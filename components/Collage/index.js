import './styles.css';

const Collage = () => {
  return (
    <div className="collage-container">
      <div className="collage-vertical">
        <img
          src="/assets/collage/twin-paradox-live-set-castle.jpg"
          alt="Horizontal"
        />
      </div>
      <div className="bio-container">
        <p>
          Twin Paradox was born from the collaboration of two musicians who have
          known each other since childhood, sharing a background rooted in rock,
          electronic music and academic musical training.{' '}
        </p>
        <p>
          After reuniting in Europe in 2020, they developed a project that
          merges both worlds: the physical energy of live performance and the
          architectural approach of electronic sound. Now based in Geneva, Twin
          Paradox produces, rehearses and performs in various formats,
          constantly exploring a distinct identity at the crossroads of techno
          and rock.
        </p>
      </div>
      <div className="collage-vertical">
        <img
          src="/assets/collage/twin-paradox-live-set.jpg"
          alt="Bottom Horizontal"
        />
      </div>
      <div className="bio-container">
        <p>
          Ezequiel, a multi-instrumentalist composer and arranger, began
          learning various instruments at age 12 and played in rock bands before
          moving to Switzerland in 2015. He studied at the Conservatoire
          Populaire de Musique, Danse et Théâtre of Geneva and earned Bachelor’s
          and Master’s degrees in contemporary music composition from the
          Hochschule der Künste Bern. He has been involved in various musical
          projects spanning contemporary, classical, tango, symphonic rock,
          bossa-nova, jazz, Sephardic music, cumbia, and Hindustani classical
          music.
        </p>
        <p>
          Mirko, a software engineer, also started his musical journey at age 12
          in the same workshop as Ezequiel. He has been DJing and producing
          electronic music since 2017, playing in his hometown and other cities
          in Argentina, and later continued in Barcelona, where he completed a
          sound technician course and a Master’s degree in architectural
          acoustics.
        </p>
      </div>
      See more photos on our{' '}
      <a target="_blank" href="https://www.instagram.com/_twinparadox/">
        instagram page
      </a>
      !
    </div>
  );
};

export default Collage;
