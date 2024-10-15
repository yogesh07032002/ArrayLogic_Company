import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Process from "../components/Process";
import Services from "../components/Services";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Services />
      <Process />
      <Contact />
      <Footer />
      
    </>
  );
}

export default Home;
