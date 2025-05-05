import React from 'react';
import Layout from '../components/Layout/index.js';

function Insiders() {
  return (
    <Layout>
      <h1>Insiders</h1>
      <iframe
        width="100%"
        height="600"
        src="https://hypeddit.com/twinparadox/insiders"
        title="Insiders"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </Layout>
  );
}

export default Insiders;
