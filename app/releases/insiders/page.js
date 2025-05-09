import Layout from '../../../components/Layout';
import Track from '../../../components/Track';
import INSIDERS from '../../../constants/insiders.js';

const Insiders = () => {
  return (
    <Layout>
      <Track {...{ track: INSIDERS }} />
    </Layout>
  );
};

export default Insiders;
