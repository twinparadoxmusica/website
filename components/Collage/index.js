import './styles.css';

const Collage = () => {
  return (
    <div className="collage-container">
      <p className="presentation-title">
        Twisting ancient musical forms
        <br />
        through a modern sonic narrative
      </p>
      <div className="music-bio">
        <p>
          Twin Paradox embodies the intersection of raw rock energy, theatrical
          progressions and hypnotic techno precision, shaping music as a
          performative experience.
        </p>
      </div>
      <div className="collage-vertical">
        <img
          src="/assets/collage/twin-paradox-live-set-castle.jpg"
          alt="Horizontal"
        />
      </div>
      <div className="music-bio">
        <p>
          Their music fuses guitars and drums with synths and machines,
          unfolding through narrative, dramatic arcs that build and release
          tension like a live show.
        </p>
        <p>
          They develop a language they call &ldquo;TechnoRock&rdquo; — a hybrid
          aesthetic where riffs, distorted textures, rock music elements and
          club-driven sound design merge into hypnot ic, physical tracks built
          for movement and impact.
        </p>
      </div>
      <div className="collage-vertical">
        <img
          src="/assets/twin-paradox-playing-live-set-castle.jpg"
          alt="Horizontal"
        />
      </div>
      <div className="music-bio">
        <p>
          The duo was born from the collaboration of two musicians who have
          known each other since childhood, sharing a background rooted in rock,
          electronic music and academic musical training. After reuniting in
          Europe in 2023, they began developing a common project that merges
          both worlds: the raw energy of live performance and the structured,
          machine-driven language of electronic sound.
        </p>
      </div>
      <div className="music-bio">
        <p>
          Their performances are built in real time, where machines and
          instruments are played live, driving bodies, tension and repetition
          into a shared ritual.
        </p>
      </div>
      <div className="collage-vertical">
        <img
          src="/assets/twin-paradox-profile-picture-castle.jpg"
          alt="Horizontal"
        />
      </div>
    </div>
  );
};

export default Collage;
