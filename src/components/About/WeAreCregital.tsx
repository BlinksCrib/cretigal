import { useEffect } from "react";
import AboutCollage from "../../assets/AboutCollage.jpg";
import { useAppContext } from "../ContextApi.tsx/ContextApi";
import AOS from "aos"

const WeAreCregital = () => {
  const context = useAppContext();
  const handleMouseLeave = context?.handleMouseLeave;
  const handleMouseOverText = context?.handleMouseOverText;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refresh(); // Refresh AOS animations when data changes
  }, []);

  return (
    <section>
      <div id="sectionWithWhiteBg" className="sectionWithWhiteBg flex justify-center items-center w-full bg-[#ffffff]">
        <div className="flex justify-center items-center lg:max-w-[1140px] w-[90%] flex-col lg:pt-[6rem] llg:pt-[4rem]">
          <aside data-aos="fade-up" className="text-center lg:w-[75%] flex justify-center items-center flex-col">
            <h1
              onMouseEnter={() => handleMouseOverText && handleMouseOverText()}
              onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
              className="font-bold lg:text-7xl md:text-5xl text-3xl lg:leading-[5rem] mb-6 text-center"
            >
              We're Cregital
            </h1>
            <h4
              onMouseEnter={() => handleMouseOverText && handleMouseOverText()}
              onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
              className="text-[#DEDEDE] font-bold lg:text-7xl sm:mb-[3rem] mb-[2rem]"
            >
              /kree.ji.tl/
            </h4>
            <p
              onMouseEnter={() => handleMouseOverText && handleMouseOverText()}
              onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
              className="sm:text-2xl lmd:leading-[2.2rem]"
            >
              We are a digital agency passionate about using innovation, design,
              technology and strategy to build engaging websites, brands, and
              digital products.
            </p>
          </aside>
          <aside data-aos="fade-up" className="w-full mt-[5rem]">
            <img
              onMouseEnter={() => handleMouseOverText && handleMouseOverText()}
              onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
              src={AboutCollage}
              alt="about collage"
              className="w-full"
            />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default WeAreCregital;
