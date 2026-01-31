import React from "react";
import AboutImg from "../assets/1st.png";

const AboutMe: React.FC = () => {
  return (
    <div className="flex w-full h-[50vh] justify-center items-center mb-20 gap-30">
      <div className="w-1/3 flex justify-center items-end relative">
        <div className="w-[350px] h-[100px] bg-[#222052] rounded-[100%] absolute -bottom-5 animate-moveLeftRight"></div>
        <div className="w-[350px] h-[100px] border-4 border-[#F5CB5C] rounded-[100%] absolute -bottom-5 animate-moveRightLeft"></div>
        <img
          src={AboutImg}
          alt="About Me"
          className="h-[400px] object-cover z-10 relative mb-5"
        />
      </div>
      <div className="w-2/3 flex flex-col justify-end">
        <h1 className="text-[#222052] text-6xl font-medium mb-8">Who am I?</h1>
        <p className="text-lg text-justify leading-relaxed text-gray-800">
          A passionate software developer who specialize in crafting modern web
          applications using modern tech stacks based in Sri Lanka. Outside of
          coding, I explore tech trends, create case studies for client
          projects, and break down complex problems into simple, dev-friendly
          solutions. I'm all about learning fast, building smarter, and growing
          with every line of code.
        </p>
        <div className="flex">
          <div>FB Icon</div>
          <div>Insta Icon</div>
          <div>LinkendIn Icon</div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
