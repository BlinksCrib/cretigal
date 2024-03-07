import { useState } from "react";
import cretigal from "../../assets/Cregital.svg";
import { useAppContext } from "../ContextApi.tsx/ContextApi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const context = useAppContext();
  const handleMouseOverBg = context?.handleMouseOverBg;
  const handleMouseOverLink = context?.handleMouseOverLink;

  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  // const [isSmallScreen, setIsSmallScreen] = useState(window.matchMedia("(max-width: 768px)").matches);

  // useEffect(() => {
  //   const mediaQuery = window.matchMedia("(max-width: 768px)");
  //   const handleScreenChange = (e: any) => setIsSmallScreen(e.matches);

  //   mediaQuery.addListener(handleScreenChange);

  //   return () => {
  //     mediaQuery.removeListener(handleScreenChange);
  //   };
  // }, []);

  const handleMouseNav = () => {
    if (isMenuClicked) {
      handleMouseOverBg && handleMouseOverBg();
      // Handle mouse over for small screens
    } else {
      handleMouseOverLink && handleMouseOverLink();
      // Handle mouse over for larger screens
    }
  };

  return (
    <header>
      <nav
        // onMouseEnter={() => handleMouseOverBg && handleMouseOverBg()}
        // onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
        className={`flex justify-center items-center w-full h-[5rem] ${
          isMenuClicked
            ? "overflow-hidden fixed z-[1000] bg-[#000000]"
            : "bg-[#ffffff]"
        }`}
      >
        <div className="flex justify-between items-center w-[90%]">
          <div className="bg-[#000000]">
            <Link to="/">
              <img
                onMouseEnter={() => handleMouseNav()}
                onMouseLeave={() => handleMouseOverBg && handleMouseOverBg()}
                src={cretigal}
                alt="cretigal logo"
              />{" "}
            </Link>
          </div>
          <aside
            className={`flex justify-center items-center font-medium text-lg ${
              isMenuClicked ? "text-[#ffffff]" : "text-[#000000]"
            }`}
            onClick={updateMenu}
          >
            <i
              onMouseEnter={() => handleMouseNav()}
              onMouseLeave={() => handleMouseOverBg && handleMouseOverBg()}
              className={`fa-solid ${isMenuClicked ? "fa-times" : "fa-bars"}`}
            ></i>
            <h4
              className="ml-4"
              onMouseEnter={() => handleMouseNav()}
              onMouseLeave={() => handleMouseOverBg && handleMouseOverBg()}
            >
              {isMenuClicked ? "CLOSE" : "MENU"}
            </h4>
          </aside>
        </div>
        {isMenuClicked && (
          <div
            onMouseEnter={() => handleMouseOverBg && handleMouseOverBg()}
            // onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
            className="fixed flex justify-center items-start w-full ease-in-out duration-500 bg-[#000000] nav-height top-0 z-[100] mt-[5rem]"
          >
            <h1
              onMouseEnter={() => handleMouseOverBg && handleMouseOverBg()}
              // onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
              className="text-[#ffffff] lg:text-6xl lg:w-[75%] lg:leading-[5rem] text-center font-extrabold pt-[2rem]"
            >
              Learn more{" "}
              <Link
                className="border-b border-[#ffffff]"
                onMouseEnter={() =>
                  handleMouseOverLink && handleMouseOverLink()
                }
                onMouseLeave={() => handleMouseOverBg && handleMouseOverBg()}
                onClick={updateMenu}
                to="/about"
              >
                about us
              </Link>
              , check out{" "}
              <Link
                onClick={updateMenu}
                className="border-b border-[#ffffff]"
                onMouseEnter={() =>
                  handleMouseOverLink && handleMouseOverLink()
                }
                onMouseLeave={() => handleMouseOverBg && handleMouseOverBg()}
                to="/work"
              >
                our work
              </Link>
              , the latest on{" "}
              <a
                className="border-b border-[#ffffff]"
                onMouseEnter={() =>
                  handleMouseOverLink && handleMouseOverLink()
                }
                onMouseLeave={() => handleMouseOverBg && handleMouseOverBg()}
                href="https://www.instagram.com/cregital/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={updateMenu}
              >
                instagram
              </a>{" "}
              and{" "}
              <Link
                className="border-b border-[#ffffff]"
                onMouseEnter={() =>
                  handleMouseOverLink && handleMouseOverLink()
                }
                onMouseLeave={() => handleMouseOverBg && handleMouseOverBg()}
                to="/contact"
                onClick={updateMenu}
              >
                contact us
              </Link>
            </h1>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
