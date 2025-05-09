import About from '../components/About';
import Collage from '../components/Collage';
import Contact from '../components/ContactLinks';
import Layout from '../components/Layout';

const App = () => {
  return (
    <Layout>
      <About />
      <Collage />
      <Contact />
    </Layout>
  );
};

export default App;
