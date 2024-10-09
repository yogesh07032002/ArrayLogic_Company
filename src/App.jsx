import { Route, Routes } from "react-router-dom";

import Abouts from "./Abouts/Abouts";
import Careers from './careers/Careers'
import Contacts from "./Contacts/Contacts";
import Home from "./Home/Home";
import Industries from "./Industries/Industries";

function App() {
  return (
    <>
      <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/Career" element={<Careers/>}></Route>
       <Route path="/Industry" element={<Industries/>}></Route>
       <Route path="/Contact" element={<Contacts/>}></Route>
       <Route path="/About" element={<Abouts/>}></Route>
        
       

      </Routes>
    </>
  );
}

export default App;
