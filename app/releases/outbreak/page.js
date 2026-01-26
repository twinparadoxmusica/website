import Layout from '../../../components/Layout/index.js';
import Track from '../../../components/Track/index.js';
import OUTBREAK from '../../../constants/outbreak.js';

const Outbreak = () => {
  return (
    <Layout>
      <Track {...{ track: OUTBREAK }} />
    </Layout>
  );
};

export default Outbreak;
