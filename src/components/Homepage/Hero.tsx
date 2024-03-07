import FBN from "../../assets/FBN-website.jpg";
import Disha from "../../assets/Disha-Pages.jpg";
import Hash from "../../assets/Hash-Vest.png";
import Coronation from "../../assets/Coronation-banking.jpg";
import Tony from "../../assets/Cregital-TEF.jpg";
import Heirs from "../../assets/heirs-holdings.jpg";
import Ark from "../../assets/ARK-Acts-of-Random-Kindness.svg";
import Zenith from "../../assets/Zenith-HQ.jpg";
import { useAppContext } from "../ContextApi.tsx/ContextApi";

import AOS from "aos";
import { useEffect } from "react";

const Hero = () => {
  const context = useAppContext();
  const handleMouseLeave = context?.handleMouseLeave;
  const handleMouseOverText = context?.handleMouseOverText;
  const handleMouseOverImage = context?.handleMouseOverImage;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh(); // Refresh AOS animations when data changes
  }, []);

  const project = [
    {
      imgs: FBN,
      company: "First Bank",
      did: "Website, UI/UX",
      lin: "https://www.firstbanknigeria.com/",
    },
    {
      imgs: Disha,
      company: "Disha Pages",
      did: "Branding, Website, UI/UX, Web app",
      lin: "https://disha.ng/pages/",
    },
    {
      imgs: Hash,
      company: "Hash",
      did: "Branding, Website",
      lin: "https://hashvest.com/",
    },
    {
      imgs: Coronation,
      company: "Coronation Bank",
      did: "Website",
      lin: "https://www.coronationmb.com/",
    },
    {
      imgs: Tony,
      company: "Tony Elumelu Foundation",
      did: "Website",
      lin: "https://www.tonyelumelufoundation.org/",
    },
    {
      imgs: Heirs,
      company: "Heirs Holdings",
      did: "Website",
      lin: "https://heirsholdings.com/",
    },
    {
      imgs: Ark,
      company: "ARK",
      did: "Branding, Website, UI/UX, Web app",
      lin: "https://ark.ng/",
    },
    {
      imgs: Zenith,
      company: "Zenith Bank",
      did: "Website",
      lin: "https://www.zenithbank.com/",
    },
  ];

  return (
    <section>
      <div className="flex justify-center items-center w-full bg-[#ffffff]">
        <div className="flex justify-center items-center lg:w-[85%] w-[90%] flex-col llg:pt-[4rem]">
          <aside
            data-aos="fade-up"
            className="text-center md:w-[75%] sm:w-[80%]"
          >
            <div>
              <h1
                onMouseEnter={() =>
                  handleMouseOverText && handleMouseOverText()
                }
                onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
                className="font-semibold lg:text-8xl sm:text-5xl text-3xl lg:leading-[7rem] sm:leading-[4rem] mb-6 text-[#000000]"
              >
                Cregital designs & builds digital experiences
              </h1>
              <p
                onMouseEnter={() =>
                  handleMouseOverText && handleMouseOverText()
                }
                onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
                className="text-2xl"
              >
                We design, build and launch websites and products that are
                simple, beautiful and helps businesses grow.
              </p>
            </div>
          </aside>
          <aside className="grid md:grid-cols-2 grid-cols-1 md:gap-[6rem] gap-[4rem] justify-between items-center w-full llg:mt-[3rem]">
            {project?.map((item, i) => (
              <div
                data-aos="fade-up"
                key={i}
                className="z-[1] cursor-pointer"
                onMouseEnter={() =>
                  handleMouseOverImage && handleMouseOverImage()
                }
                onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
              >
                <button className="w-full" type="submit">
                  <a href={item.lin} target="_blank">
                    <img
                      src={item.imgs}
                      alt={item.company}
                      className="w-full object-cover object-center"
                    />
                    <h1 className="font-bold text-3xl md:mt-8 mt-4">
                      {item.company}
                    </h1>
                    <p className="mt-2 font-light">{item.did}</p>
                  </a>
                </button>
              </div>
            ))}
          </aside>
        </div>
      </div>
      {/* Cursor */}
      {/* <motion.div
        className="cursor flex justify-center items-center"
        variants={variants}
        animate={cursorVariant}
        // initial={cursorVariant}
      ></motion.div> */}
      {/* <Cursor cursorVariant={cursorVariant} /> */}
    </section>
  );
};

export default Hero;
