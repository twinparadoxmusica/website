import Layout from '../../../components/Layout/index.js';
import Track from '../../../components/Track/index.js';
import TECHNOROCK from '../../../constants/technorock.js';

const TechnoRock = () => {
  return (
    <Layout>
      <Track {...{ track: TECHNOROCK }} />
    </Layout>
  );
};

export default TechnoRock;
