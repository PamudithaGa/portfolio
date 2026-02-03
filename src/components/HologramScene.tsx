import React from "react";

interface TechItem {
  name: string;
  src: string;
  className?: string;
  style?: string;
  description: string;
}

interface HologramSceneProps {
  icons: TechItem[];
  activeIndex: number;
}

const HologramScene: React.FC<HologramSceneProps> = ({
  icons,
  activeIndex,
}) => {
  // Calculate positions for orbiting icons
  // We want them to look like they are in a ring around the user
  // We'll render them all, but highlight the active one

  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
      {/* 1. Base Hologram Ring (Floor) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[300px] h-[100px] md:w-[500px] md:h-[150px]">
        <div className="absolute inset-0 border-[2px] border-cyan-500/50 rounded-[100%] animate-spin-slow shadow-[0_0_20px_rgba(6,182,212,0.4)]"></div>
        <div className="absolute inset-4 border-[1px] border-cyan-300/30 rounded-[100%] animate-spin-reverse-slower"></div>
      </div>

      {/* 2. Vertical Scanning Lines / Beam */}
      <div className="absolute bottom-0 w-[80%] h-full bg-gradient-to-t from-cyan-500/10 to-transparent clip-path-beam"></div>

      {/* 3. Orbiting Icons Ring */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="relative w-[500px] h-[500px] animate-spin-slow-linear">
          {icons.map((icon, index) => {
            const angle = (index * 360) / icons.length;
            const radian = (angle * Math.PI) / 180;
            const radius = 220; // Distance from center
            const x = Math.cos(radian) * radius;
            const y = Math.sin(radian) * radius;

            return (
              <div
                key={index}
                className="absolute top-1/2 left-1/2 w-10 h-10 -ml-5 -mt-5"
                style={{ transform: `translate(${x}px, ${y}px)` }}
              >
                <div className="animate-spin-reverse-linear w-full h-full flex items-center justify-center">
                  <img
                    src={icon.src}
                    alt={icon.name}
                    className={`w-8 h-8 opacity-70 drop-shadow-[0_0_5px_cyan] grayscale transition-all duration-500 ${activeIndex === index ? "scale-150 grayscale-0 opacity-100" : ""}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .animate-spin-slow {
            animation: spin 10s linear infinite;
        }
        .animate-spin-reverse-slower {
            animation: spin 15s linear infinite reverse;
        }
        .animate-spin-slow-linear {
             animation: spin 20s linear infinite;
        }
        .animate-spin-reverse-linear {
             animation: spin 20s linear infinite reverse;
        }
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .clip-path-beam {
            clip-path: polygon(20% 100%, 80% 100%, 100% 0, 0 0);
        }
      `}</style>
    </div>
  );
};

export default HologramScene;
