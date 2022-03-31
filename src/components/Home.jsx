import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen text-[#27292a]  bg-[#e9eaed]  dark:bg-[#0a192f] dark:text-white transition duration-300"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#e5202b]">
          Hii, My name is{" "}  </p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#17181b] dark:text-[#ccd6f6] transition duration-300">
            Vishal Brahmbhatt
          </h1>{" "}
          <h2 className="text-4xl sm:text-7xl font-bold   text-[#162963] dark:text-[#8892b0] transition duration-300">
            I'm a Full-Stack Developer.
          </h2>
          <p className="text-[#3e68e9] dark:text-[#8892b0] py-4 max-w-[700px] transition duration-300">
            I've knowledge in <b>J2EE</b> & <b>MERN</b> stack. Currently, I'm
            working on building responsive full-stack web applications.
          </p>
      
        <div>
          <button className="text-black group border-2 px-6 py-3 my-2 flex items-center dark:text-white  hover:bg-[#e5202b] hover:border-[#e5202b] transition duration-300">
            View Work{" "}
            <span className="group-hover:rotate-90 duration-300">
              <Link to="work" smooth={true} duration={500}>
                <HiArrowNarrowRight className="ml-3 " />
              </Link>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
