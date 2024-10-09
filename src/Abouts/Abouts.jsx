import AboutPage from '../components/AboutPage'; // Capitalized the component name
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Abouts() {
  return (
    <>
      <Navbar />
      <div>
        <AboutPage /> {/* Capitalized the component name */}
      </div>
      <Footer />
    </>
  );
}

export default Abouts;
