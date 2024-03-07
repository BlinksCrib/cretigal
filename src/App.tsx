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

function App() {
  const { cursorVariant } = useAppContext() ?? {};
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {window.innerWidth >= 992 && <WriteIcon />}
        {location.pathname === "/contact" ? <></> : <Footer />}
        <Cursor cursorVariant={cursorVariant} />
      </div>
    </>
  );
}

export default App;
