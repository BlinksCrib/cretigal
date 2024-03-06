import { useState } from "react";
import cretigal from "../../assets/Cregital.svg";

const Navbar = () => {
// to change burger classes
const [burgerClass, setBurgerClass] = useState("burger-bar unclicked")
const [isMenuClicked, setIsMenuClicked] = useState(false)

// toggle burger menu change
const updateMenu = () => {
    if(!isMenuClicked) {
        setBurgerClass("burger-bar clicked")
    }
    else {
        setBurgerClass("burger-bar unclicked")
    }
    setIsMenuClicked(!isMenuClicked)
}


  return (
    <header>
      <nav className="flex justify-center items-center w-full h-[5rem]">
        <div className="flex justify-between items-center w-[90%]">
          <div className="bg-[#000000]">
            <img src={cretigal} alt="cretigal logo" />
          </div>
          <aside className="flex justify-center items-center">
            <div className="burger-menu" onClick={updateMenu}>
              <div className={burgerClass}></div>
              <div className={burgerClass}></div>
              <div className={burgerClass}></div>
            </div>
            <h4>Menu</h4>
          </aside>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
