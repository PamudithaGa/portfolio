import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TechItem {
  name: string;
  src: string;
  className?: string;
  style?: string;
  description: string;
}

interface SpaceshipSceneProps {
  icons: TechItem[];
}

const SpaceshipScene: React.FC<SpaceshipSceneProps> = ({ icons }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Rotate through icons
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % icons.length);
    }, 3000); // Change icon every 3 seconds
    return () => clearInterval(interval);
  }, [icons.length]);

  const currentIcon = icons[activeIndex];

  return (
    <div className="relative w-full h-[500px] flex flex-col items-center justify-center">
      {/* 1. The Spaceship (UFO) */}
      <div className="relative z-20 animate-bounce-slow">
        <svg
          width="200"
          height="120"
          viewBox="0 0 200 120"
          className="drop-shadow-2xl"
        >
          {/* Glass Dome */}
          <path
            d="M50 40 Q100 -20 150 40 Z"
            fill="#8bf"
            fillOpacity="0.6"
            stroke="#fff"
            strokeWidth="2"
          />
          {/* Saucer Body - Top */}
          <ellipse cx="100" cy="50" rx="90" ry="30" fill="#444" />
          {/* Saucer Body - Bottom Detail */}
          <path
            d="M10 50 Q100 100 190 50"
            fill="#222"
            stroke="#666"
            strokeWidth="1"
          />
          {/* Lights */}
          <circle cx="30" cy="55" r="4" fill="#f00" className="animate-pulse" />
          <circle cx="70" cy="65" r="4" fill="#0f0" className="animate-pulse" />
          <circle
            cx="130"
            cy="65"
            r="4"
            fill="#00f"
            className="animate-pulse"
          />
          <circle
            cx="170"
            cy="55"
            r="4"
            fill="#ff0"
            className="animate-pulse"
          />
        </svg>

        {/* The Alien Pilot */}
        <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-10 h-10 z-10">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Head */}
            <path d="M20,50 Q50,0 80,50 Q50,100 20,50" fill="#2d2" />
            {/* Eyes */}
            <ellipse cx="35" cy="45" rx="8" ry="12" fill="black" />
            <ellipse cx="65" cy="45" rx="8" ry="12" fill="black" />
            <circle cx="37" cy="42" r="3" fill="white" />
            <circle cx="67" cy="42" r="3" fill="white" />
          </svg>
        </div>
      </div>

      {/* 2. The Beam (Holographic Projection) */}
      <div className="relative -mt-4 z-10 flex flex-col items-center">
        {/* Beam Cone */}
        <div className="w-40 h-64 bg-gradient-to-b from-blue-400/30 to-transparent clip-path-trapezoid flex items-center justify-center relative">
          {/* Currently Displayed Icon */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: -20, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              className="absolute top-10 flex flex-col items-center gap-2"
            >
              <img
                src={currentIcon.src}
                alt={currentIcon.name}
                className={`w-20 h-20 drop-shadow-lg ${currentIcon.className || ""} ${currentIcon.style || ""}`}
              />
              <span className="text-white font-bold text-lg bg-black/50 px-2 rounded">
                {currentIcon.name}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 3. Alien Speech Bubble (Floating to the side) */}
      <motion.div
        className="absolute top-10 right-0 md:-right-10 bg-white p-4 rounded-xl shadow-xl w-64 border-2 border-[#222052] z-30 pointer-events-none"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="relative">
          <h4 className="font-bold text-[#222052] mb-1">Alien says:</h4>
          <AnimatePresence mode="wait">
            <motion.p
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-sm font-medium text-gray-700 italic"
            >
              "{currentIcon.description}"
            </motion.p>
          </AnimatePresence>

          {/* Bubble Tail */}
          <div className="absolute top-1/2 -left-6 -mt-2 w-0 h-0 border-t-[10px] border-t-transparent border-r-[15px] border-r-[#222052] border-b-[10px] border-b-transparent"></div>
          <div className="absolute top-1/2 -left-5 -mt-2 w-0 h-0 border-t-[10px] border-t-transparent border-r-[15px] border-r-white border-b-[10px] border-b-transparent"></div>
        </div>
      </motion.div>

      <style>{`
        .clip-path-trapezoid {
            clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
        }
        .animate-bounce-slow {
            animation: bounce 3s infinite;
        }
        @keyframes bounce {
            0%, 100% { transform: translateY(-5%); }
            50% { transform: translateY(5%); }
        }
      `}</style>
    </div>
  );
};

export default SpaceshipScene;
