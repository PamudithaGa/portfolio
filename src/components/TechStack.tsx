import React, { useState, useEffect, useRef } from "react";
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

  const icons = [
    {
      name: "Python",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    },
    {
      name: "Node",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
      className: "w-16 h-12 md:w-24 md:h-16",
    },
    {
      name: "React",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    },
    {
      name: ".NET",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg",
    },
    {
      name: "MongoDB",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Flutter",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg",
    },
    {
      name: "C#",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
    },
    {
      name: "JS",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      style: "bg-yellow-400 rounded-lg",
    },
  ];

  // Create a list of 12 items to fill 360 degrees (30 deg spacing)
  // 8 unique items, so we repeat the first 4 to fill the gap seamlessly
  const rotatingIcons = [...icons, ...icons.slice(0, 4)];

  const [rotation, setRotation] = useState(0);
  const requestRef = useRef<number>(0);

  useEffect(() => {
    const animate = () => {
      setRotation((prev) => (prev - 0.2 + 360) % 360); // Speed of rotation (Bottom to Top)
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, []);

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
        {/* The Bracket Shape */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[550px] w-[450px] hidden md:block z-0">
          <svg
            viewBox="0 0 450 550"
            className="h-full w-full fill-[#222052]"
            preserveAspectRatio="none"
          >
            {/* Trapezoid: Left side tall, Right side shorter */}
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

        {/* Floating Icons Container */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-20">
          <div className="relative w-[350px] h-[350px] md:w-[600px] md:h-[600px]">
            {rotatingIcons.map((icon, index) => {
              // Calculate angle
              const offsetAngle = index * 30; // 360 / 12 items = 30 deg
              const currentAngle = (offsetAngle + rotation) % 360;

              const angleInRad = (currentAngle * Math.PI) / 180;

              // Position relative to center (50%, 50%)
              const x = 50 + 50 * Math.cos(angleInRad);
              const y = 50 + 50 * Math.sin(angleInRad);

              const isVisible = currentAngle >= 250 || currentAngle <= 110;

              return (
                <div
                  key={index}
                  className="absolute transition-opacity duration-300"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: `translate(-50%, -50%)`,
                    opacity: isVisible ? 1 : 0,
                  }}
                >
                  <img
                    src={icon.src}
                    alt={icon.name}
                    className={`w-12 h-12 md:w-16 md:h-16 ${icon.style || ""} ${icon.className || ""}`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
