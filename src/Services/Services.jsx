import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ScrollToTop from "react-scroll-to-top";
import ServicePage from '../components/ServicePage'

function Services() {
  return (
    <>
    <Navbar/>
    <div ><ServicePage/></div>
    <Footer/>
    <ScrollToTop
        smooth
        className=""
        style={{
          backgroundColor: "blue",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </>
  )
}
export default Services
