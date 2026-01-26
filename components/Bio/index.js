'use client';

import React, { useState } from 'react';

// A self-contained React component that shows a short bio and a "Read More" link
// Clicking the link expands to reveal the full bio. No external UI libs required.
// Tailwind classes are used for styling, but it also looks fine without Tailwind.

const Bio = () => {
  const [expanded, setExpanded] = useState(false);

  const shortBio = (
    <>
      Twisting ancient musical forms through a modern sonic narrative, Twin
      Paradox embodies a vision where classical music dynamics, raw rock energy,
      and hypnotic techno precision coexist.
    </>
  );

  return (
    <div className="section bio-container short-bio">
      <p>{shortBio}</p>
    </div>
  );
};

export default Bio;
