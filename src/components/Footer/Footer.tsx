import React from "react";

interface Cursor {
  handleMouseLeave?: any;
  handleMouseOverBg?: any;
}

const Footer: React.FC<Cursor> = ({handleMouseLeave, handleMouseOverBg}) => {
  const year = new Date().getFullYear();

  return (
    <section>
      <div
        onMouseEnter={() => handleMouseOverBg()}
        onMouseLeave={() => handleMouseLeave()}
        className="flex justify-center items-center w-full bg-[#000000] text-[#ffffff]"
      >
        <div className="flex justify-center items-center lg:w-[85%] w-[90%] flex-col pt-[4rem]">
          <aside className="flex flex-col w-full pb-[6rem]">
            <div>
              <h1 className="font-semibold lg:text-7xl text-3xl lg:mb-10 mb-6">
                Get in touch
              </h1>
            </div>
            <div className="flex lg:w-[70%] lg:self-end">
              <aside className=" w-full">
                <p className="font-light lg:text-2xl lg:leading-[3rem] leading-[2rem]">
                  Contact us to find out how we can help you. If it’s easier you
                  can email us at{" "}
                  <a
                    href="mailto:hello@cretigal.com"
                    className="border-b border-[#ffffff]"
                    rel="noopener noreferrer"
                  >
                    hello@cretigal.com
                  </a>{" "}
                  Download the{" "}
                  <a
                    href="http://cregital.com/wp-content/uploads/2020/02/Cregital-Brochure-2020_.pdf"
                    target="_blank"
                    className="border-b border-[#ffffff]"
                    rel="noopener noreferrer"
                  >
                    Cregital brochure.pdf
                  </a>{" "}
                  <span className="text-[#4d4d4d]">(5mb)</span>
                </p>
              </aside>
            </div>
          </aside>

          <aside className="flex lg:justify-between lg:items-center lg:flex-row flex-col w-full pb-[3rem]">
            <div>
              <p>&copy; {year} Cregital Design Agency</p>
            </div>
            <div className="flex lg:justify-center items-center llg:mt-4">
              <ul className="flex lg:justify-center items-center">
                <li>
                  <a
                    href="https://instagram.com/cregital"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li className="px-8">
                  <a
                    href="https://twitter.com/cregital"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/cregital"
                    target="_blank"
                    rel="noopener noreferrer"
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
