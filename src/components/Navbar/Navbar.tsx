import { useState } from "react";
// import cretigal from "../../assets/Cregital.svg";
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
        className={`flex justify-center items-center w-full h-[5rem]  ${
          isMenuClicked
            ? "overflow-hidden fixed z-[1000] bg-[#000000]"
            : `${
                location.pathname === "/contact"
                  ? "bg-[#000000]"
                  : "bg-[#ffffff]"
              }`
        } `}
      >
        <div className="flex justify-between items-center w-[90%]">
          <div
            onMouseEnter={() => handleMouseNav()}
            onMouseLeave={() => handleMouseOverBg && handleMouseOverBg()}
            className="lg:w-[40px] w-[30px] h-full bg-clip-content"
          >
            <Link
              className="w-full"
              to="/"
              onClick={() => setIsMenuClicked(false)}
            >
              <img
                // src={cretigal}
                src="https://cregital.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FScreenshot%202023-09-12%20144059.b63f0495.png&w=64&q=75"
                alt="cretigal logo"
                className="w-full h-full bg-transparent bg-clip-content"
              />{" "}
            </Link>
          </div>
          <aside
            className={`flex justify-center items-center font-medium text-lg ${
              isMenuClicked
                ? "text-[#ffffff]"
                : `${
                    location.pathname !== "/contact"
                      ? "text-[#000000]"
                      : "text-[#ffffff]"
                  }`
            }`}
            onClick={updateMenu}
          >
            {isMenuClicked ? (
              <i
                onMouseEnter={() => handleMouseNav()}
                onMouseLeave={() => handleMouseOverBg && handleMouseOverBg()}
                className="fa-solid fa-times"
              ></i>
            ) : (
              <svg
                onMouseEnter={() => handleMouseNav()}
                onMouseLeave={() => handleMouseOverBg && handleMouseOverBg()}
                xmlns="http://www.w3.org/2000/svg"
                width="23px"
                height="15px"
                viewBox="0 0 23 15"
              >
                <title>menu (2)</title>
                <desc>Created with Sketch.</desc>
                <g
                  id="Brand"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g id="menu-(2)" stroke="#000000" strokeWidth="2.5">
                    <line x1="0" y1="1.25" x2="22.5" y2="1.25" id="Path"></line>
                    <line
                      x1="0"
                      y1="13.75"
                      x2="22.5"
                      y2="13.75"
                      id="Path"
                    ></line>
                  </g>
                </g>
              </svg>
            )}
            <h4
              className="md:ml-4 ml-2"
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
            className="fixed flex justify-center items-start w-full ease-in-out duration-500 bg-[#000000] nav-height top-0 z-[100] mt-[5rem] overflow-hidden"
          >
            <h1
              onMouseEnter={() => handleMouseOverBg && handleMouseOverBg()}
              // onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
              className="text-[#ffffff] lg:text-6xl sm:text-4xl text-3xl sm:w-[75%] w-[90%] lg:leading-[5rem] sm:leading-[3rem] text-center font-extrabold pt-[2rem]"
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
