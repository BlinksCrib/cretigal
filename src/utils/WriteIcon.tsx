// import contactBlackIcon from "../assets/contact-icon-black.svg";
import { useEffect, useState } from "react";
import { useAppContext } from "../components/ContextApi.tsx/ContextApi";
import { useLocation } from "react-router-dom";

const WriteIcon = () => {
  //   const iconRef = useRef(null); // Reference to the icon element

  const [mixBlendMode, setMixBlendMode] =
    useState<React.CSSProperties["mixBlendMode"]>("difference"); // Default mixBlendMode
  console.log(mixBlendMode);
  const location = useLocation();

  const context = useAppContext();
  const handleMouseLeave = context?.handleMouseLeave;
  const handleMouseOverLink = context?.handleMouseOverLink;
  const handleMouseOverBg = context?.handleMouseOverBg;
  useEffect(() => {
    const handleScroll = () => {
      // Determine the current section by its background color or any other identifying factor
      const currentSection = document.querySelector(".sectionWithWhiteBg");
      // document.getElementById(
      //   "sectionWithWhiteBg"
      // ); /* Logic to determine the current section */
      if (currentSection) {
        const { backgroundColor } = window.getComputedStyle(currentSection);
        const childComponents = currentSection.querySelectorAll("*"); // Select all child elements
        console.log("Elements in the section:", childComponents);
        // console.log(window.getComputedStyle(currentSection));

        console.log("Background color:", backgroundColor);

        // Update the mixBlendMode based on the background color of the current section
        if (
          backgroundColor == "white" ||
          backgroundColor == "rgb(255, 255, 255)" ||
          backgroundColor == "#ffffff"
        ) {
          setMixBlendMode("difference"); // Change the mixBlendMode
          console.log(true);
        } else {
          setMixBlendMode("difference"); // Reset the mixBlendMode
          console.log(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [document.querySelector(".sectionWithWhiteBg")]);

  return (
    <section className="bg-[#000000]">
      {location.pathname !== "/contact" && (
        <div
          className="fixed bottom-[30px] right-[30px] z-[1000]"
          style={{ mixBlendMode }}
        >
          {/* Add your icon or content here */}
          <img
            onMouseEnter={() => handleMouseOverLink && handleMouseOverLink()}
            onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
            onScroll={() => handleMouseOverBg && handleMouseOverBg()}
            // src={contactBlackIcon}
            src="https://cregital.com/wp-content/uploads/2020/02/contact-icon-black.svg"
            alt="contact black icon"
            className="rounded-full"
          />
        </div>
      )}
    </section>
  );
};

export default WriteIcon;
