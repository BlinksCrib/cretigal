import { useAppContext } from "../ContextApi.tsx/ContextApi";
import AboutCollage1 from "../../assets/AboutCollage1.jpg";

const Story = () => {
  const context = useAppContext();
  const handleMouseLeave = context?.handleMouseLeave;
  const handleMouseOverText = context?.handleMouseOverText;
  const handleMouseOverLink = context?.handleMouseOverLink;

  return (
    <section>
      <div className="flex justify-center items-center w-full bg-[#ffffff]">
        <div className="flex justify-center items-center lg:w-[85%] w-[90%] flex-col pt-[6rem] pb-[6rem]">
          <aside className="flex flex-col w-full">
            <div>
              <h1
                onMouseEnter={() =>
                  handleMouseOverText && handleMouseOverText()
                }
                onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
                className="font-semibold lg:text-7xl text-3xl lg:mb-10 mb-6"
              >
                Our Story
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
                  Cregital was formed in 2015 by our Founder & Design Lead{" "}
                  <a
                    href="#"
                    className="border-b border-[#000000]"
                    rel="noopener noreferrer"
                    onMouseEnter={() =>
                      handleMouseOverLink && handleMouseOverLink()
                    }
                    onMouseLeave={() => handleMouseOverText && handleMouseOverText()}
                  >
                    Evans Akanno
                  </a>
                  , with a belief that when passionate people work together and
                  are empowered, amazing things can happen. In these few years,
                  Cregital has made its mark in Nigeria as well as recognised
                  internationally for excellent work and its impact on people,
                  small and large businesses.
                </p>

                <p
                  onMouseEnter={() =>
                    handleMouseOverText && handleMouseOverText()
                  }
                  onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
                  className="font-light md:text-2xl lg:leading-[3rem] leading-[2rem] mt-[2rem]"
                >
                  Outside of our client work, we enjoy giving back to the
                  community through the{" "}
                  <a
                    href="#"
                    className="border-b border-[#000000]"
                    rel="noopener noreferrer"
                    onMouseEnter={() =>
                      handleMouseOverLink && handleMouseOverLink()
                    }
                    onMouseLeave={() => handleMouseOverText && handleMouseOverText()}
                  >
                    ARK
                  </a>{" "}
                  - Acts of Random Kindness project, and helping creators
                  showcase their work, and grow their business faster with easy
                  to use tools and templates with{" "}
                  <a
                    href="https://disha.ng/"
                    target="_blank"
                    className="border-b border-[#000000]"
                    rel="noopener noreferrer"
                    onMouseEnter={() =>
                      handleMouseOverLink && handleMouseOverLink()
                    }
                    onMouseLeave={() => handleMouseOverText && handleMouseOverText()}
                  >
                    Disha
                  </a>
                  .
                </p>
              </aside>
            </div>
          </aside>
          <aside className="w-full mt-[5rem]">
            <img
              onMouseEnter={() => handleMouseOverText && handleMouseOverText()}
              onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
              src={AboutCollage1}
              alt="About collage 1"
              className="w-full"
            />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Story;
