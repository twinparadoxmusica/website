import Layout from '../../components/Layout';
import Collage from '../../components/Collage';
import Bio from '../../components/Bio';
import About from '../../components/About';

const VideosPage = () => {
  return (
    <Layout>
      <About displayVideo={false} />
      <Bio />
      <Collage />
    </Layout>
  );
};

export default VideosPage;
