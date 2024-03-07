import AboutCollage from "../../assets/AboutCollage.jpg";
import { useAppContext } from "../ContextApi.tsx/ContextApi";

const WeAreCregital = () => {
  const context = useAppContext();
  const handleMouseLeave = context?.handleMouseLeave;
  const handleMouseOverText = context?.handleMouseOverText;

  return (
    <section>
      <div className="flex justify-center items-center w-full bg-[#ffffff]">
        <div className="flex justify-center items-center lg:w-[85%] w-[90%] flex-col pt-[6rem]">
          <aside className="text-center lg:w-[75%] flex justify-center items-center flex-col">
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
              className="text-[#DEDEDE] font-bold lg:text-7xl mb-[3rem]"
            >
              /kree.ji.tl/
            </h4>
            <p
              onMouseEnter={() => handleMouseOverText && handleMouseOverText()}
              onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
              className="text-2xl"
            >
              We are a digital agency passionate about using innovation, design,
              technology and strategy to build engaging websites, brands, and
              digital products.
            </p>
          </aside>
          <aside className="w-full mt-[5rem]">
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
