import { useEffect } from "react";
import { useAppContext } from "../ContextApi.tsx/ContextApi";

import AOS from "aos"

const Expertise = () => {
  const context = useAppContext();
  const handleMouseLeave = context?.handleMouseLeave;
  const handleMouseOverText = context?.handleMouseOverText;
  const handleMouseOverBg = context?.handleMouseOverBg;

  const skills = [
    "Brand Identity",
    "Product Strategy",
    "User Experience Design",
    "Iconography",
    "Animation",
    "Web Development",
    "App Development",
    "WordPress",
    "Front end Development",
    "Back end Development",
    "E-commerce",
    "Data & Analytics",
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refresh(); // Refresh AOS animations when data changes
  }, []);

  return (
    <section>
      <div
        onMouseEnter={() => handleMouseOverBg && handleMouseOverBg()}
        onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
        className="flex justify-center items-center w-full bg-[#000000] text-[#ffffff]"
      >
        <div className="flex justify-center items-center lg:max-w-[1140px] w-[90%] flex-col pt-[6rem] pb-[8rem]">
          <aside data-aos="fade-up" className="flex flex-col w-full">
            <div className="inline-block">
              <h1
                onMouseEnter={() =>
                  handleMouseOverText && handleMouseOverText()
                }
                onMouseLeave={() => handleMouseOverBg && handleMouseOverBg()}
                className="font-semibold lg:text-7xl text-3xl lg:mb-10 mb-6 "
              >
                Our expertise
              </h1>
            </div>
            <div data-aos="fade-up" className="flex lg:w-[70%] lg:self-end">
              <aside className=" w-full">
                <p
                  onMouseEnter={() =>
                    handleMouseOverText && handleMouseOverText()
                  }
                  onMouseLeave={() => handleMouseOverBg && handleMouseOverBg()}
                  className="font-light md:text-2xl lg:leading-[3rem] leading-[2rem]"
                >
                  We have been working on a variety of projects and across
                  different industries across disciplines, making our work an
                  appropriate, versatile and functional response to the unique
                  needs of our clients. Our capabilities cover the following
                  areas;
                </p>
                <div data-aos="fade-up" className="mt-[2rem]">
                  {skills?.map((item, i) => (
                    <p
                      onMouseEnter={() =>
                        handleMouseOverText && handleMouseOverText()
                      }
                      onMouseLeave={() =>
                        handleMouseOverBg && handleMouseOverBg()
                      }
                      className="font-light md:text-2xl lg:leading-[3rem] leading-[2rem]"
                      key={i}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </aside>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
