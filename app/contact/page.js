import Layout from '../../components/Layout';
import Contact from '../../components/ContactForm';
import Home from '../../components/Home';

const ContactPage = () => {
  return (
    <Layout>
      <Home displayVideo={false} />
      <Contact />
    </Layout>
  );
};

export default ContactPage;
