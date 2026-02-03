import React from "react";
import MeImg from "../assets/me.png";
import SpaceshipScene from "./SpaceshipScene";

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

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-10 py-20 min-h-screen bg-white overflow-hidden relative">
      {/* Left Side: Text Content */}
      <div className="md:w-1/2 space-y-8 z-10">
        <h1 className="text-[#222052] text-6xl font-medium">My Tech Stacks</h1>

        <div className="text-xl text-gray-800 font-thin space-y-2">
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
        {/* The Bracket Shape - Kept for structure/background if needed, or we can hide it */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[550px] w-[450px] hidden md:block z-0">
          <svg
            viewBox="0 0 450 550"
            className="h-full w-full fill-[#222052]"
            preserveAspectRatio="none"
          >
            <path d="M0,0 L405,40 L405,510 L0,550 Z" />
          </svg>
        </div>

        {/* Person Image */}
        <div className="relative z-10">
          <img
            src={MeImg}
            alt="Pamuditha"
            className="h-[500px] object-contain drop-shadow-2xl"
          />
        </div>

        {/* Spaceship Scene Overlay */}
        <div className="absolute inset-0 flex justify-center items-center z-20 pointer-events-none">
          {/* Position the spaceship scene slightly higher or centered to interact with the person image? 
                 The SpaceshipScene is 500px tall. It centers the spaceship at the top. 
                 The person image is 500px tall. 
                 This renders the spaceship ON TOP of the person.
             */}
          <div className="w-[500px] h-[600px] relative -mt-40">
            {/* -mt-40 to pull it up so the spaceship is above the person's head if possible, 
                     but let's just center it for now and see. 
                     Actually, the prompt said 'Spaceship ... and alien says'.
                     I'll position it such that the spaceship is floating above the person.
                 */}
            <SpaceshipScene icons={icons} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
