import Layout from '../../components/Layout';
import Collage from '../../components/Collage';
import Home from '../../components/Home';

const VideosPage = () => {
  return (
    <Layout>
      <Home displayVideo={false} />
      <Collage />
    </Layout>
  );
};

export default VideosPage;
