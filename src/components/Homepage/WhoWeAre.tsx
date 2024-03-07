import { Link } from "react-router-dom";
import Masonry from "../../assets/Masonry.jpg";
import { useAppContext } from "../ContextApi.tsx/ContextApi";
import AOS from "aos";
import { useEffect } from "react";


const WhoWeAre = () => {
  const context = useAppContext();
  const handleMouseLeave = context?.handleMouseLeave;
  const handleMouseOverText = context?.handleMouseOverText;
  const handleMouseOverLink = context?.handleMouseOverLink;
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refresh(); // Refresh AOS animations when data changes
  }, []);

  return (
    <section>
      <div className="flex justify-center items-center w-full bg-[#ffffff]">
        <div className="flex justify-center items-center flex-col lg:w-[85%] w-[90%] lg:pt-[8rem] pt-[4rem]">
          <aside data-aos="fade-up" className="flex flex-col w-full">
            <div>
              <h1
                onMouseEnter={() =>
                  handleMouseOverText && handleMouseOverText()
                }
                onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
                className="font-semibold lg:text-7xl text-3xl lg:mb-10 mb-6"
              >
                Who we are
              </h1>
            </div>
            <div data-aos="fade-up" className="flex lg:w-[70%] lg:self-end">
              <aside className=" w-full">
                <p
                  onMouseEnter={() =>
                    handleMouseOverText && handleMouseOverText()
                  }
                  onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
                  className="font-light md:text-2xl lg:leading-[3rem] leading-[2rem]"
                >
                  We are designers, developers, writers, thinkers, and problem
                  solvers. Small enough to be simple and fast, but big enough to
                  deliver your project scope at the pace you need. You can learn
                  more{" "}
                  <Link
                    to="/about"
                    className="border-b border-[#000000]"
                    onMouseEnter={() =>
                      handleMouseOverLink && handleMouseOverLink()
                    }
                    onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
                  >
                    about us
                  </Link>
                  , check the latest on{" "}
                  <a
                    href="https://instagram.com/cregital"
                    target="_blank"
                    className="border-b border-[#000000]"
                    rel="noopener noreferrer"
                    onMouseEnter={() =>
                      handleMouseOverLink && handleMouseOverLink()
                    }
                    onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
                  >
                    Instagram
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://twitter.com/cregital"
                    className="border-b border-[#000000]"
                    rel="noopener noreferrer"
                    onMouseEnter={() =>
                      handleMouseOverLink && handleMouseOverLink()
                    }
                    onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
                  >
                    Twitter
                  </a>{" "}
                  or apply to{" "}
                  <Link
                    to="/careers/"
                    className="border-b border-[#000000]"
                    onMouseEnter={() =>
                      handleMouseOverLink && handleMouseOverLink()
                    }
                    onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
                  >
                    join our team
                  </Link>
                  .
                </p>
              </aside>
            </div>
          </aside>
          <aside data-aos="fade-up" className="w-full mt-[4rem] mb-[4rem]">
            <img
              src={Masonry}
              alt="Masonry"
              className="w-full"
              onMouseEnter={() => handleMouseOverText && handleMouseOverText()}
              onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
            />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
