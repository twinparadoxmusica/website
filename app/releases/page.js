import Layout from '../../components/Layout';
import Music from '../../components/Music';
import Videos from '../../components/Videos';
import About from '../../components/About';
import Bio from '../../components/Bio';

const ReleasesPage = () => {
  return (
    <Layout>
      <About displayVideo={false} />
      <Bio />
      <Music />
      <Videos />
    </Layout>
  );
};

export default ReleasesPage;
