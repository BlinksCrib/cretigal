import Hero from "../components/Homepage/Hero";
import WhoWeAre from "../components/Homepage/WhoWeAre";

interface Cursor {
  handleMouseLeave?: any;
  handleMouseOverText?: any;
  handleMouseOverImage?: any;
}

const Home: React.FC<Cursor> = ({
  handleMouseLeave,
  handleMouseOverText,
  handleMouseOverImage,
}) => {
  return (
    <main>
      <Hero
        handleMouseLeave={handleMouseLeave}
        handleMouseOverText={handleMouseOverText}
        handleMouseOverImage={handleMouseOverImage}
      />
      <WhoWeAre />
    </main>
  );
};

export default Home;
