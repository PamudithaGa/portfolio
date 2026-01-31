import React from "react";
import MeImg from "../assets/me.png";

const TechStack: React.FC = () => {
  const tags = [
    "Software Development",
    "Web Development",
    "UI Design",
    "Technical Documentation",
    "Web Hosting",
    "System Design",
    "Database Design",
    "Prototyping",
    "Testing",
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-10 py-20 min-h-screen bg-white overflow-hidden relative">
      {/* Left Side: Text Content */}
      <div className="md:w-1/2 space-y-8 z-10">
        <h1 className="text-[#222052] text-6xl font-medium">My Tech Stacks</h1>

        <div className="text-xl leading-loose text-gray-800 font-medium space-y-2">
          <p>Python untangles complexity with elegant grace,</p>
          <p>Node.js fuels the swift, boundless race,</p>
          <p>React.js paints interfaces alive and bright,</p>
          <p>.NET and C# forge backbones of might,</p>
          <p>While JavaScript weaves seamless worlds in flight.</p>
        </div>

        <div className="flex flex-wrap gap-3 mt-8">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#F5CB5C] text-[#222052] px-6 py-2 rounded-full text-sm font-semibold shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Right Side: Image and Icons */}
      <div className="md:w-1/2 relative flex justify-center items-center mt-10 md:mt-0">
        {/* The Bracket Shape */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 h-[90%] w-20 hidden md:block">
          <svg
            viewBox="0 0 100 400"
            className="h-full w-full fill-[#222052] drop-shadow-xl"
            preserveAspectRatio="none"
          >
            <path d="M0,0 L60,0 L100,200 L60,400 L0,400 Z" />
            {/* Revised path to look like the bracket: Wide top/bottom, pointing inward */}
            {/* Actually, looking at the image, it's a bracket opening to the right. */}
            {/* Let's try: A vertical bar with a point. */}
            {/* M0,0 (top-left) L80,0 (top-right) L80,20 (inner top) ... L100,200 (point) ... */}
            {/* Simplified: A concave polygon */}
            <path
              d="M20,0 L100,0 L100,50 L40,200 L100,350 L100,400 L20,400 L0,200 Z"
              stroke="none"
            />
          </svg>
        </div>

        {/* Person Image */}
        <div className="relative z-10">
          <img
            src={MeImg}
            alt="Pamuditha"
            className="h-[600px] object-contain drop-shadow-2xl"
          />
        </div>

        {/* Floating Icons */}
        {/* Python - Top */}
        <div className="absolute top-0 right-1/2 translate-x-10 -translate-y-10 animate-bounce delay-100">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
            alt="Python"
            className="w-16 h-16"
          />
        </div>

        {/* Node - Top Right */}
        <div className="absolute top-10 right-20 animate-pulse">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
            alt="Node"
            className="w-24 h-16"
          />
        </div>

        {/* React - Right */}
        <div className="absolute top-1/3 -right-5 animate-spin-slow">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
            alt="React"
            className="w-20 h-20"
          />
        </div>

        {/* .NET - Bottom Right */}
        <div className="absolute bottom-1/3 -right-5">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg"
            alt=".NET"
            className="w-16 h-16"
          />
        </div>

        {/* C# - Bottom Right (lower) */}
        <div className="absolute bottom-0 right-20">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
            alt="C#"
            className="w-16 h-16"
          />
        </div>

        {/* JS - Bottom Center */}
        <div className="absolute -bottom-10 right-1/2 translate-x-20">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="JS"
            className="w-16 h-16 bg-yellow-400 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
