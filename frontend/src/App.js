import {Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Novus from "./pages/Novus"
import Markets from "./pages/Markets"
import Articles from "./pages/Articles"
import Contact from "./pages/Contact"
import Progression from "./pages/Progression"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/' element={<Novus />}  />
          <Route path='/markets' element={<Markets />}  />
          <Route path='/progression' element={<Progression />}  />
          <Route path='/articles' element={<Articles />}  />
          <Route path='/contact' element={<Contact />}  /> 
      </Routes>
      <Footer/>
      </>
  );
}

export default App;
