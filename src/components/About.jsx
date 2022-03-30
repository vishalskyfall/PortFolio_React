import React from "react";

const about = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#e9eaed] text-[#17181b] dark:bg-[#0a192f] dark:text-white transition duration-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#e5202b]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Vishal, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am passionate Full Stack Developer with track record of
              understanding and translation technical requirements to improve
              projects. I want to utilize my technical, programming, database &
              management skills for growth of organization as well as to enhance
              my knowledge about new technologies in IT sector.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
