import Career from '../components/Career'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ScrollToTop from "react-scroll-to-top";

function careers() {
  return (
    <>
    <Navbar/>
    <div ><Career/></div>
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

export default careers
