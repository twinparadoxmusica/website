import Layout from '../../../components/Layout';
import Track from '../../../components/Track';
import OUTBREAK from '../../../constants/outbreak.js';

const Outbreak = () => {
  return (
    <Layout>
      <Track {...{ track: OUTBREAK }} />
    </Layout>
  );
};

export default Outbreak;
