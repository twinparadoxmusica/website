import React from 'react';
import About from '../components/About/index.js';
import Collage from '../components/Collage/index.js';
import Contact from '../components/ContactLinks/index.js';
import Layout from '../components/Layout/index.js';

const App = () => {
  return (
    <Layout>
      <About />
      <Collage />
      <Contact />
    </Layout>
  );
};

export default App;
