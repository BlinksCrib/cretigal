import { useEffect } from "react";
import { useAppContext } from "../ContextApi.tsx/ContextApi";
import AOS from "aos"

const Award = () => {
  const context = useAppContext();
  const handleMouseLeave = context?.handleMouseLeave;
  const handleMouseOverText = context?.handleMouseOverText;
  const handleMouseOverBg = context?.handleMouseOverBg;

  const skills = [
    "2019. Forbes Africa - 30 under 3",
    "2018. Awwwards - Mobile Excellence",
    "2018. Awwwards - Honors (x2)",
    "2018. Nigeria Technology Awards",
    "2017. Nigeria Technology Awards",
    "2016. Nigeria Technology Awards",
    "2016. The Future Awards Africa",
    "2015. Awwwards - Honors",
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh(); // Refresh AOS animations when data changes
  }, []);

  return (
    <section>
      <div
        onMouseEnter={() => handleMouseOverBg && handleMouseOverBg()}
        onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
        className="flex justify-center items-center w-full bg-[#ffffff]"
      >
        <div className="flex justify-center items-center lg:w-[85%] w-[90%] flex-col pt-[6rem] md:pb-[8rem] pb-[5rem]">
          <aside data-aos="fade-up" className="flex flex-col w-full">
            <div className="inline-block">
              <h1
                onMouseEnter={() =>
                  handleMouseOverText && handleMouseOverText()
                }
                onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
                className="font-semibold lg:text-7xl text-3xl lg:mb-10 mb-6 "
              >
                Awards & Recognition
              </h1>
            </div>
            <div className="flex lg:w-[70%] lg:self-end">
              <aside className=" w-full">
                <p
                  onMouseEnter={() =>
                    handleMouseOverText && handleMouseOverText()
                  }
                  onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
                  className="font-light md:text-2xl lg:leading-[3rem] leading-[2rem]"
                >
                  Cregital has been featured by many industry tastemakers,
                  awards and publications. But they’re a good sign we’re going
                  in the right direction. Here are the most noteworthy ones;
                </p>
                <div data-aos="fade-up" className="mt-[2rem]">
                  {skills?.map((item, i) => (
                    <p
                      onMouseEnter={() =>
                        handleMouseOverText && handleMouseOverText()
                      }
                      onMouseLeave={() =>
                        handleMouseLeave && handleMouseLeave()
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

export default Award;
