import CareerPic from '../../public/CareerPic.jpg'
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProcessPic from '../../public/ProcessPic.jpg'

function Processs() {
  return <>
  <Navbar/>
  <div className='bg-slate-100'>
    
  <div className="mt-20 ">
          <img src={CareerPic} alt="Comming Soon"></img>
        </div>
        <div className="mt-0">
          <img src={ProcessPic} alt="Comming Soon"></img>
        </div>
  </div>
  <Footer/>
  
  </>;
}

export default Processs;
