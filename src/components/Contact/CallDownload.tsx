import { useAppContext } from "../ContextApi.tsx/ContextApi";

const CallDownload = () => {
  const context = useAppContext();
  const handleMouseLeave = context?.handleMouseLeave;
  const handleMouseOverText = context?.handleMouseOverText;

  return (
    <section>
      <div className="flex justify-center items-center w-full 4xl:bg-[#ffffff] bg-[#000000]">
        <div className="flex justify-center items-center lg:max-w-[1140px] lg:w-[80%] w-[90%] py-[3rem]">
          <aside className="">
            <p className="text-[#ffffff] mr-2">
              {" "}
              You can also call{" "}
              <a
                className="border-b border-[#4d4d4d]"
                onMouseEnter={() =>
                  handleMouseOverText && handleMouseOverText()
                }
                onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
                href="tel:+2348020965367"
              >
                <span
                  className="text-[#4d4d4d]"
                  onMouseEnter={() =>
                    handleMouseOverText && handleMouseOverText()
                  }
                  onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
                >
                  +234
                </span>{" "}
                <span className="text-[#ffffff]">08020965367</span>
              </a>
            </p>
          </aside>
          <aside className="">
            <p className="text-[#ffffff]">
              {" "}
              or download our {" "}
              <a
                onMouseEnter={() =>
                  handleMouseOverText && handleMouseOverText()
                }
                onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
                className="border-b border-[#4d4d4d]"
                href="https://cregital.com/wp-content/uploads/2020/02/Cregital-Brochure-2020_.pdf"
              >
                <span className="text-[#ffffff]">brochure.pdf</span>{" "}
                <span
                  className="text-[#4d4d4d]"
                  onMouseEnter={() =>
                    handleMouseOverText && handleMouseOverText()
                  }
                  onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
                >
                  (5mb)
                </span>
              </a>
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default CallDownload;
