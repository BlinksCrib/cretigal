import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import OurWork from "./pages/OurWork";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import useMousePosition, { Cursor } from "./utils/useMousePosition";

function App() {
  const { setCursorVariant, cursorVariant } = useMousePosition();

  const handleMouseOverBg = () => setCursorVariant("footer");
  const handleMouseLeave = () => setCursorVariant("default");
  const handleMouseOverText = () => setCursorVariant("text");
  const handleMouseOverImage = () => {
    setCursorVariant("image");
  };
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handleMouseOverText={handleMouseOverText}
                handleMouseOverImage={handleMouseOverImage}
                handleMouseLeave={handleMouseLeave}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {location.pathname === "/contact" ? (
          <></>
        ) : (
          <Footer
            handleMouseOverBg={handleMouseOverBg}
            handleMouseLeave={handleMouseLeave}
          />
        )}
        <Cursor cursorVariant={cursorVariant} />
      </div>
    </>
  );
}

export default App;
