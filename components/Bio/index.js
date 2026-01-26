'use client';

import React, { useState } from 'react';

// A self-contained React component that shows a short bio and a "Read More" link
// Clicking the link expands to reveal the full bio. No external UI libs required.
// Tailwind classes are used for styling, but it also looks fine without Tailwind.

const Bio = () => {
  const [expanded, setExpanded] = useState(false);

  const shortBio = (
    <>
      Twin Paradox, an Argentinian electronic music duo based in Geneva, was
      formed in 2023 by Mirko Hrubik and Ezequiel Cappellano. They create
      hypnotic and energetic <b>Techno</b> with <b>Rock/Metal</b> influences,
      using analog and digital hardware with instruments like guitar, voice and
      synthesizers, performing both <b>Live Sets</b> and <b>DJ formats</b>. They
      have played in venues across Switzerland, France, Ibiza and Argentina
      {!expanded ? (
        <>
          {'... '}
          <button
            className="text-sm underline underline-offset-4 hover:no-underline focus:outline-none"
            onClick={() => setExpanded(true)}
            aria-expanded={expanded}
            aria-controls="full-bio"
          >
            <b>continue reading</b>
          </button>
        </>
      ) : null}
    </>
  );

  const fullBioParagraphs = (
    <>
      <p>
        Ezequiel, a multi-instrumentalist composer and arranger, began learning
        various instruments at age 12 and played in rock bands before moving to
        Switzerland in 2015. He studied at the Conservatoire Populaire de
        Musique, Danse et Théâtre of Geneva and earned Bachelor’s and Master’s
        degrees in contemporary music composition from the Hochschule der Künste
        Bern. He has been involved in various musical projects spanning
        contemporary, classical, tango, symphonic rock, bossa-nova, jazz,
        Sephardic music, cumbia, and Hindustani classical music.
      </p>
      <p>
        Mirko, a software engineer, also started his musical journey at age 12
        in the same workshop as Ezequiel. He has been DJing and producing
        electronic music since 2017, playing in his hometown and other cities in
        Argentina, and later continued in Barcelona, where he completed a sound
        technician course and a Master’s degree in architectural acoustics. At
        the beginning of 2020 he started making music remotely with Ezequiel
        from Barcelona, and two years later moved to Geneva, where they began to
        dedicate their full time to the project.{' '}
        <button
          className="text-sm underline underline-offset-4 hover:no-underline focus:outline-none"
          onClick={() => setExpanded(false)}
          aria-expanded={expanded}
          aria-controls="full-bio"
        >
          <b>read less</b>
        </button>
      </p>
    </>
  );
  return (
    <div className="bio-container">
      <p>{shortBio}</p>
      {expanded ? <>{fullBioParagraphs}</> : null}
    </div>
  );
};

export default Bio;
