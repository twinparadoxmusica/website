import React, { useEffect } from 'react';
import '../App.css';
import { runAnimation } from '../utils/animation.js';
import About from '../components/About.js';
import Contact from '../components/Contact/index.js';
import Layout from '../components/Layout/index.js';

const App = () => {
  useEffect(() => {
    runAnimation();
  }, []);

  return (
    <Layout>
      <About />
      <Contact />
    </Layout>
  );
};

export default App;
