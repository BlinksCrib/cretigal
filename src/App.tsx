import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import OurWork from "./pages/OurWork";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Cursor } from "./utils/useMousePosition";
import { useAppContext } from "./components/ContextApi.tsx/ContextApi";
import WriteIcon from "./utils/WriteIcon";

import "aos/dist/aos.css";

function App() {
  const { cursorVariant } = useAppContext() ?? {};
  return (
    <>
      <div className="sectionWithWhiteBg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {location.pathname === "/contact" ? <></> : <Footer />}
        {window.innerWidth >= 768 && <WriteIcon />}
        {window.innerWidth >= 992 && <Cursor cursorVariant={cursorVariant} />}
      </div>
    </>
  );
}

export default App;
