import React from 'react';
import './styles.css';
import twinParadoxLiveSet from '../../assets/collage/twin-paradox-live-set.jpg';
import twinParadoxGuitar from '../../assets/collage/twin-paradox-ezequiel-guitar.jpg';
import twinParadoxSynths from '../../assets/collage/twin-paradox-mirko-synthesizer.jpg';
import twinParadoxDJ from '../../assets/Twin-Paradox-DJ-Set.jpg';

const Collage = () => {
  return (
    <div className="collage-vertical">
      <div className="collage-top">
        <img src={twinParadoxLiveSet} alt="Horizontal" />
      </div>
      <div className="collage-bottom">
        <img src={twinParadoxGuitar} alt="Vertical 1" />
        <img src={twinParadoxSynths} alt="Vertical 2" />
      </div>
      <div className="collage-footer">
        <img src={twinParadoxDJ} alt="Bottom Horizontal" />
      </div>
    </div>
  );
};

export default Collage;
