import React from "react";

import heroImage from "../assets/1st.png"

const Hero: React.FC = () => {
  return (
    <div className=" h-full">
      <div className=" flex justify-center w-full">
        <div className=" w-3/8 flex flex-col justify-center">
          <div className="mt-20 text-8xl">
            <h2 className="">Pamuditha</h2>
            <h2 className="ml-2">Gangana</h2>
          </div>
          <div className="text-3xl mt-10 ml-20">
            <h3>Software Developer</h3>
            <h3>Web Developer</h3>
            <h3>Event Planner</h3>
          </div>
        </div>
        <div className=" w-2/8"><img src={heroImage} alt="" /></div>
        <div className=" w-3/8 flex items-center justify-center">
          <div>
            <p className="text-6xl ">Amid the Storm of Tasks and Bugs, </p>
            <p className="text-3xl mt-10">I remain the Master of Calm Chaos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
