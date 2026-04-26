import React from "react";
import Navbar from "./Navbar";
import MainImg from "../assets/pic1.png";


const Hero: React.FC = () => {
  return (
    <div className="bg-blue-300 mt-4 py-1 px-5">
      <section className=" mx-auto">
        <Navbar />
      </section>
      <div className="  w-full h-[90vh] flex  justify-center items-center text-black rounded-xl">
        <div className=" h-full w-1/3 flex flex-col justify-center items-center -mt-10 z-10 relative">
          {" "}
          <h1 className="font-mrDeHaviland text-6xl mb-5">
            Pamuditha <span className="ml-18">Senanayaka</span>
          </h1>
          <div className="flex flex-col justify-center ml-8 ">
            <h2 className="text-3xl ">Web Developer</h2>
            <h2 className="text-3xl ">Mobile App Developer</h2>
            <h2 className="text-3xl ">Event Planner</h2>
          </div>
        </div>
        <div className="h-[80%] w-1/3 flex flex-col items-center">
          <img src={MainImg} alt="Main" className="h-full" />
        </div>


      </div>
      <div className="w-full -mt-42">
        <div className="flex justify-end">
          <div className="border-4 border-[#222052] w-22 h-22 absolute mr-22 mt-22 z-10"></div>
          <div className="border-4 border-[#F5CB5C] w-22 h-22 absolute mr-11 mt-11"></div>
          <div className="border-4 border-[#222052] w-22 h-22 z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
