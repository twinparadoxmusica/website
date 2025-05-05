import React, { useEffect } from 'react';
import '../App.css';
import { runAnimation } from '../utils/animation.js';
import About from '../components/About.js';
import Releases from '../components/Releases.js';
import Videos from '../components/Videos.js';
import Contact from '../components/Contact.js';

const App = () => {
  useEffect(() => {
    runAnimation();
  }, []);

  return (
    <div className="app">
      <canvas id="galaxyCanvas"></canvas>
      <About />
      <Videos />
      <Releases />
      <Contact />
      <footer>
        <p>&copy; 2025 Twin Paradox. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
