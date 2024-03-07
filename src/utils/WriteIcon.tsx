import contactBlackIcon from "../assets/contact-icon-black.svg";
import { useAppContext } from "../components/ContextApi.tsx/ContextApi";

const WriteIcon = () => {
  //   const iconRef = useRef(null); // Reference to the icon element
  const context = useAppContext();
  const handleMouseLeave = context?.handleMouseLeave;
  const handleMouseOverLink = context?.handleMouseOverLink;

  return (
    <section>
      <div className="fixed bottom-[30px] right-[30px] z-[1000]">
        {/* Add your icon or content here */}
        <img
          onMouseEnter={() => handleMouseOverLink && handleMouseOverLink()}
          onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
          src={contactBlackIcon}
          alt="contact black icon"
        />
      </div>
    </section>
  );
};

export default WriteIcon;
