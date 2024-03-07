import { useEffect } from "react";
import AOS from "aos";
import { useAppContext } from "../ContextApi.tsx/ContextApi";

const Form = () => {
  const context = useAppContext();
  const handleMouseLeave = context?.handleMouseLeave;
  const handleMouseOverText = context?.handleMouseOverText;

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
        onMouseEnter={() => handleMouseOverText && handleMouseOverText()}
        onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
        className="flex justify-center items-center w-full bg-[#000000]"
      >
        <div className="flex justify-center items-center flex-col lg:w-[60%] md:w-[80%] w-[90%] py-[6rem]">
          <div
            data-aos="fade-up"
            className="flex justify-center items-center flex-col w-full text-center mb-8"
          >
            <h1 className="text-[#ffffff] lg:text-5xl font-extrabold w-full mb-3">
              Contact us
            </h1>
            <p className="text-[#ffffff]">
              Complete the form or e-mail&nbsp;
              <a href="mailto:hello@cregital.com">hello@cregital.com</a>.
            </p>
          </div>
          <form data-aos="fade-up" action="" className="w-full">
            <input
              type="text"
              placeholder="Name"
              name="name"
              id="name"
              className="border-0 border-b border-[#ffffff] w-full bg-transparent outline-none py-4 px-4 placeholder:text-[#acaaaa] text-[#ffffff] mb-6"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              name="number"
              id="number"
              className="border-0 border-b border-[#ffffff] w-full bg-transparent outline-none py-4 px-4 placeholder:text-[#acaaaa] text-[#ffffff] mb-6"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="name"
              id="name"
              className="border-0 border-b border-[#ffffff] w-full bg-transparent outline-none py-4 px-4 placeholder:text-[#acaaaa] text-[#ffffff] mb-6"
              required
            />
            <textarea
              name="about"
              id="about"
              cols={20}
              rows={6}
              placeholder="Briefly tell us about your project"
              className="border-0 border-b border-[#ffffff] w-full bg-transparent outline-none py-4 px-4 placeholder:text-[#acaaaa] text-[#ffffff] mb-6"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[#ffffff] w-full py-4 font-bold"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
