import React, { useState, useEffect } from "react";
import MeSittingImg from "../assets/me-sitting.jpg";
import HologramScene from "./HologramScene";

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

  const icons = [
    {
      name: "Python",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      description: "Untangles complexity with elegant grace.",
    },
    {
      name: "Node",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
      className: "w-16 h-12 md:w-24 md:h-16",
      description: "Fuels the swift, boundless race.",
    },
    {
      name: "React",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      description: "Paints interfaces alive and bright.",
    },
    {
      name: ".NET",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg",
      description: "Forges backbones of might.",
    },
    {
      name: "MongoDB",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      description: "Stores data with flexible delight.",
    },
    {
      name: "Flutter",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg",
      description: "Builds cross-platform dreams in plain sight.",
    },
    {
      name: "C#",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
      description: "The sharp edge of logic and light.",
    },
    {
      name: "JS",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      style: "bg-yellow-400 rounded-lg",
      description: "Weaves seamless worlds in flight.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % icons.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [icons.length]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-10 py-20 min-h-screen bg-white overflow-hidden relative">
      {/* Left Side: Text Content */}
      <div className="md:w-1/2 space-y-8 z-10 relative">
        <h1 className="text-[#222052] text-6xl font-medium">My Tech Stacks</h1>

        <div className="relative">
          <div className="text-xl text-gray-800 font-thin space-y-2 relative z-10">
            <p>Python untangles complexity with elegant grace,</p>
            <p>Node.js fuels the swift, boundless race,</p>
            <p>React.js paints interfaces alive and bright,</p>
            <p>.NET and C# forge backbones of might,</p>
            <p>While JavaScript weaves seamless worlds in flight.</p>
          </div>
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
      <div className="md:w-1/2 relative flex justify-center items-center mt-10 md:mt-0 h-[600px]">
        {/* The Shape Behind Image */}
        <div className="absolute left-1/2 mt-6 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[620px] w-[450px] hidden md:block z-0">
          <svg
            viewBox="0 0 450 550"
            className="h-full w-full fill-[#222052]"
            preserveAspectRatio="none"
          >
            <path d="M0,0 L405,40 L405,510 L0,550 Z" />
          </svg>
        </div>

        {/* Person Image */}
        <div className="relative z-10 h-full flex items-end">
          <img
            src={MeSittingImg}
            alt="Pamuditha"
            className="h-[500px] md:h-[550px] object-contain drop-shadow-2xl"
          />
        </div>

        {/* Hologram Scene Overlay - Centered on the person */}
        <div className="absolute inset-0 flex justify-center items-center z-20 pointer-events-none">
          <div className="w-[600px] h-[600px] relative">
            <HologramScene icons={icons} activeIndex={activeIndex} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
