import Sterling from "../../assets/Sterling-Bank.jpg";
import Disha from "../../assets/Disha-Pages.jpg";
import Hash from "../../assets/Hash-Vest.png";
import Coronation from "../../assets/Coronation-banking.jpg";
import Tony from "../../assets/Cregital-TEF.jpg";
import Heirs from "../../assets/heirs-holdings.jpg";
import Ark from "../../assets/ARK-Acts-of-Random-Kindness.svg";
import Zenith from "../../assets/Zenith-HQ.jpg";
import { useAppContext } from "../ContextApi.tsx/ContextApi";

const Projects = () => {
  const context = useAppContext();
  const handleMouseLeave = context?.handleMouseLeave;
  const handleMouseOverText = context?.handleMouseOverText;
  const handleMouseOverImage = context?.handleMouseOverImage;

  const project = [
    {
      imgs: Disha,
      company: "Disha Pages",
      did: "Branding, Website, UI/UX, Web app",
      lin: "https://disha.ng/pages/",
    },
    {
      imgs: Coronation,
      company: "Coronation Bank",
      did: "Website",
      lin: "https://www.coronationmb.com/",
    },
    {
      imgs: Sterling,
      company: "Sterling Bank",
      did: "Website",
      lin: "https://sterling.ng/",
    },
    {
      imgs: Hash,
      company: "Hash",
      did: "Branding, Website",
      lin: "https://hashvest.com/",
    },
    {
      imgs: Tony,
      company: "Tony Elumelu Foundation",
      did: "Website",
      lin: "https://www.tonyelumelufoundation.org/",
    },
    {
      imgs: Heirs,
      company: "Heirs Holdings",
      did: "Website",
      lin: "https://heirsholdings.com/",
    },
    {
      imgs: Ark,
      company: "ARK",
      did: "Branding, Website, UI/UX, Web app",
      lin: "https://ark.ng/",
    },
    {
      imgs: Zenith,
      company: "Zenith Bank",
      did: "Website",
      lin: "https://www.zenithbank.com/",
    },
  ];
  
  return (
    <section>
      <div className="flex justify-center items-center w-full bg-[#ffffff]">
        <div className="flex justify-center items-center lg:w-[85%] w-[90%] flex-col pt-[6rem]">
          <aside className="text-center lg:w-[75%] flex justify-center items-center flex-col">
            <h1
              onMouseEnter={() => handleMouseOverText && handleMouseOverText()}
              onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
              className="font-semibold lg:text-7xl md:text-5xl text-3xl lg:leading-[5rem] mb-6 lg:w-[50%]"
            >
              Featured Projects
            </h1>
            <p
              onMouseEnter={() => handleMouseOverText && handleMouseOverText()}
              onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
              className="text-2xl"
            >
              We have been working on a variety of projects and across different
              industries across disciplines, making our work an appropriate,
              versatile and functional response to the unique needs of our
              clients.
            </p>
          </aside>
          <aside className="grid md:grid-cols-2 grid-cols-1 md:gap-[6rem] gap-[4rem] justify-between items-center w-full llg:mt-[3rem] mt-[6rem] mb-[5rem]">
            {project?.map((item, i) => (
              <div
                key={i}
                className=""
                onMouseEnter={() =>
                  handleMouseOverImage && handleMouseOverImage()
                }
                onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
              >
                <a href={item.lin} target="_blank">
                  <img src={item.imgs} alt={item.company} />
                  <h1 className="font-bold text-3xl md:mt-8 mt-4">
                    {item.company}
                  </h1>
                  <p className="mt-2 font-light">{item.did}</p>
                </a>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Projects;
