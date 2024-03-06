import { useAppContext } from "../ContextApi.tsx/ContextApi";

const Footer = () => {
  const year = new Date().getFullYear();

  const context = useAppContext();
  const handleMouseLeave = context?.handleMouseLeave;
  const handleMouseOverText = context?.handleMouseOverText;
  const handleMouseOverBg = context?.handleMouseOverBg;
  const handleMouseOverLink = context?.handleMouseOverLink;

  return (
    <section>
      <div
        onMouseEnter={() => handleMouseOverBg && handleMouseOverBg()}
        onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
        className="flex justify-center items-center w-full bg-[#000000] text-[#ffffff]"
      >
        <div
          onMouseEnter={() => handleMouseOverLink && handleMouseOverLink()}
          onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
          className="flex justify-center items-center lg:w-[85%] w-[90%] flex-col pt-[4rem] bg-[#000000]"
        >
          <aside
            onMouseEnter={() => handleMouseOverLink && handleMouseOverLink()}
            onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
            className="flex flex-col w-full pb-[6rem]"
          >
            <div>
              <h1
                onMouseEnter={() =>
                  handleMouseOverText && handleMouseOverText()
                }
                onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
                className="font-semibold lg:text-7xl text-3xl lg:mb-10 mb-6"
              >
                Get in touch
              </h1>
            </div>
            <div className="flex lg:w-[70%] lg:self-end">
              <aside className=" w-full">
                <p
                  onMouseEnter={() =>
                    handleMouseOverText && handleMouseOverText()
                  }
                  onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
                  className="font-light lg:text-2xl lg:leading-[3rem] leading-[2rem]"
                >
                  Contact us to find out how we can help you. If it’s easier you
                  can email us at{" "}
                  <a
                    href="mailto:hello@cretigal.com"
                    className="border-b border-[#ffffff]"
                    rel="noopener noreferrer"
                    onMouseEnter={() =>
                      handleMouseOverLink && handleMouseOverLink()
                    }
                    onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
                  >
                    hello@cretigal.com
                  </a>{" "}
                  Download the{" "}
                  <a
                    href="http://cregital.com/wp-content/uploads/2020/02/Cregital-Brochure-2020_.pdf"
                    target="_blank"
                    className="border-b border-[#ffffff]"
                    rel="noopener noreferrer"
                    onMouseEnter={() =>
                      handleMouseOverLink && handleMouseOverLink()
                    }
                    onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
                  >
                    Cregital brochure.pdf
                  </a>{" "}
                  <span
                    onMouseEnter={() =>
                      handleMouseOverText && handleMouseOverText()
                    }
                    onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
                    className="text-[#4d4d4d]"
                  >
                    (5mb)
                  </span>
                </p>
              </aside>
            </div>
          </aside>

          <aside className="flex lg:justify-between lg:items-center lg:flex-row flex-col w-full pb-[3rem]">
            <div>
              <p
                onMouseEnter={() =>
                  handleMouseOverText && handleMouseOverText()
                }
                onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
              >
                &copy; {year} Cregital Design Agency
              </p>
            </div>
            <div className="flex lg:justify-center items-center llg:mt-4">
              <ul className="flex lg:justify-center items-center">
                <li>
                  <a
                    href="https://instagram.com/cregital"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() =>
                      handleMouseOverLink && handleMouseOverLink()
                    }
                    onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
                  >
                    Instagram
                  </a>
                </li>
                <li className="px-8">
                  <a
                    href="https://twitter.com/cregital"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() =>
                      handleMouseOverLink && handleMouseOverLink()
                    }
                    onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/cregital"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() =>
                      handleMouseOverLink && handleMouseOverLink()
                    }
                    onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Footer;
