import Layout from '../../components/Layout';
import Music from '../../components/Music';
import Videos from '../../components/Videos';
import About from '../../components/About';

const ReleasesPage = () => {
  return (
    <Layout>
      <About displayVideo={false} />
      <Music />
      <Videos />
    </Layout>
  );
};

export default ReleasesPage;
