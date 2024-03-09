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
      <div id="sectionWithWhiteBg" className="flex justify-center items-center w-full bg-[#ffffff]">
        <div className="flex justify-center items-center text-center xl:max-w-[1140px] w-[90%] flex-col">
          <aside
            data-aos="fade-up"
            className="text-center md:max-w-[768px] lg:max-w-[992px] sm:max-w-[576px] 2xl:max-w-[1140px] h-nights flex justify-center items-center"
          >
            <div>
              <h1
                onMouseEnter={() =>
                  handleMouseOverText && handleMouseOverText()
                }
                onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
                className="font-semibold lg:text-8xl 2xl:text-[8.5rem] 2xl:leading-[10rem] sm:text-6xl text-3xl lg:leading-[7rem] sm:leading-[5rem] md:text-7xl md:leading-[5.5rem] mb-6 text-[#000000]"
              >
                Cregital designs & builds digital experiences
              </h1>
              <p
                onMouseEnter={() =>
                  handleMouseOverText && handleMouseOverText()
                }
                onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
                className="lg:text-3xl lg:leading-[3rem] 2xl:text-2xl md:text-2xl sm:text-lg text-light"
              >
                We design, build and launch websites and products that are
                simple, beautiful and helps businesses grow.
              </p>
            </div>
          </aside>
          <aside className="grid md:grid-cols-2 grid-cols-1 md:gap-[6rem] gap-[4rem] 2xl:gap-[11rem] justify-between items-center text-start w-full llg:mt-[3rem]">
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
                    <h1 className="text-start font-bold text-3xl 2xl:text-2xl 2xl:mt-6 2xl:mb-2 md:mt-8 mt-4">
                      {item.company}
                    </h1>
                    <p className="text-start mt-2 font-light">{item.did}</p>
                  </a>
                </button>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;
