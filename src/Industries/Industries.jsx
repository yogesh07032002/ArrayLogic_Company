import Footer from '../components/Footer'
import Industry from '../components/Industry'
import Navbar from '../components/Navbar'
import ScrollToTop from "react-scroll-to-top";

function careers() {
  return (
    <>
    <Navbar/>
    <div>
        <Industry/>
    </div>
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
