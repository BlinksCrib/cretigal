import { Link } from "react-router-dom";
import Masonry from "../../assets/Masonry.jpg"

const WhoWeAre = () => {
  return (
    <section>
      <div className="flex justify-center items-center w-full">
        <div className="flex justify-center items-center flex-col lg:w-[85%] w-[90%] lg:pt-[8rem] pt-[4rem]">
          <aside className="flex flex-col w-full">
            <div>
              <h1 className="font-semibold lg:text-7xl text-3xl lg:mb-10 mb-6">Who we are</h1>
            </div>
            <div className="flex lg:w-[70%] lg:self-end">
              <aside className=" w-full">
                <p className="font-light md:text-2xl lg:leading-[3rem] leading-[2rem]">
                  We are designers, developers, writers, thinkers, and problem
                  solvers. Small enough to be simple and fast, but big enough to
                  deliver your project scope at the pace you need. You can learn
                  more{" "}
                  <Link to="/about" className="border-b border-[#000000]">
                    about us
                  </Link>
                  , check the latest on{" "}
                  <a
                    href="https://instagram.com/cregital"
                    target="_blank"
                    className="border-b border-[#000000]" rel="noopener noreferrer"
                  >
                    Instagram
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://twitter.com/cregital"
                    className="border-b border-[#000000]" rel="noopener noreferrer"
                  >
                    Twitter
                  </a>{" "}
                  or apply to{" "}
                  <Link to="/careers/" className="border-b border-[#000000]">
                    join our team
                  </Link>
                  .
                </p>
              </aside>
            </div>
          </aside>
          <aside className="w-full mt-[4rem] mb-[4rem]">
            <img src={Masonry} alt="Masonry" className="w-full" />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
