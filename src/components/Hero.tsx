import React from "react";
import MainImg from "../assets/pic1.png";

const Hero: React.FC = () => {
  return (
    <div>
      <div className="w-full h-[80vh] flex  justify-center items-center text-black rounded-xl">
        <div className=" h-full w-1/3 flex flex-col justify-center items-center">
          {" "}
          <h1 className="font-cursive font-extralight text-6xl mb-5">
            Pamuditha <span className="ml-18">Gangana</span>
          </h1>
       

          <div className="flex flex-col justify-center ml-8 ">
            <h2 className="text-3xl ">Web Developer</h2>
            <h2 className="text-3xl ">Mobile App Developer</h2>
            <h2 className="text-3xl ">Event Planner</h2>
          </div>
        </div>
        <div className="h-full w-1/3 flex flex-col justify-center items-center">
          <img src={MainImg} alt="Main" className="h-full" />
        </div>
        <div className=" h-full w-1/3 flex flex-col justify-center ">
          <h2 className="text-start w-[100%] text-5xl">
         

            Amid the Stom of<br/>Tasks and Bugs,
          </h2>
          <h3 className="mt-6 text-lg">I Craft Digital Dreams with Code and Creativity.</h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
