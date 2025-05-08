import React from 'react';
import Layout from '../../../components/Layout/index.js';
import Track from '../../../components/Track/index.js';
import INSIDERS from '../../../constants/insiders.js';

const Insiders = () => {
  return (
    <Layout>
      <Track {...{ track: INSIDERS }} />
    </Layout>
  );
};

export default Insiders;
