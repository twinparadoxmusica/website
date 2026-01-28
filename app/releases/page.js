import Layout from '../../components/Layout';
import Music from '../../components/Music';
import Videos from '../../components/Videos';
import Home from '../../components/Home';
import MusicBio from '../../components/MusicBio';

const ReleasesPage = () => {
  return (
    <Layout>
      <Home displayVideo={false} />
      <MusicBio />
      <Music />
      <Videos />
    </Layout>
  );
};

export default ReleasesPage;
