import React from "react";
import { ArrowLeft, ArrowRight, MoveUpRight } from "lucide-react";
import me from "../assets/me.png";
import projectImg from "../assets/pic1.png";

const Project: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 md:gap-12 w-full text-white font-sans">
      <div className="flex justify-end">
        <h1 className="text-5xl font-bold text-blue-950 dark:text-gray-100 mb-10">
          What I did
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[500px]">
        {/* Left Card - Person */}
        <div className="w-full lg:w-1/3 bg-[#021833] rounded-[30px] flex items-end justify-center pt-10 px-4 overflow-hidden relative">
          <img
            src={me}
            alt="Pamuditha Senanayaka"
            className="w-full h-auto object-cover max-w-[300px] z-10"
          />
          <div className="absolute top-20 left-10 opacity-10 text-9xl font-bold text-white pointer-events-none"></div>
        </div>

        {/* Right Card - Project Details */}
        <div className="w-full lg:w-2/3 bg-[#021833] rounded-[30px] p-8 lg:p-12 relative overflow-hidden flex flex-col justify-between">
          <div className="flex flex-col lg:flex-row gap-8 z-10">
            <div className="flex-1 space-y-6">
              <div>
                <h2 className="text-3xl font-regular text-white">
                  Rental Car Website Development
                </h2>
                <p className="text-sm font-light text-gray-300 mt-1">
                  - Kandy Rental Car
                </p>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Designed and developed a responsive, user-friendly website for a
                car rental service, featuring real-time vehicle availability,
                booking functionality, and location-based search to enhance
                customer experience and streamline operations.
              </p>

              <div className="space-y-3">
                <h3 className="text-lg font-medium text-white">
                  Challenges, we solved
                </h3>
                <ul className="space-y-2">
                  {[
                    "Simplifying a complicated design process",
                    "Giving consumers a seamless digital experience when designing their car",
                    "Real time experience of designing your car",
                    "A comprehensive back-end platform that allowed real time updates",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Project Image Decoration */}
            <div className="hidden lg:flex flex-col justify-center items-center w-2/5 relative">
              <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[350px] h-[250px] bg-white/5 rounded-2xl rotate-3 backdrop-blur-sm z-0 border border-white/10"></div>
              <div className="relative z-10 w-full">
                <img
                  src={projectImg}
                  alt="Project Screenshot"
                  className="rounded-xl shadow-2xl w-full h-auto object-cover border border-white/10 hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 group cursor-pointer">
                  <MoveUpRight className="text-white w-10 h-10" />
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack & Navigation */}
          <div className="flex items-center justify-between mt-8 z-10">
            <div className="flex gap-3">
              {["HTML", "CSS"].map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-2 bg-[#FCD34D] text-black text-sm font-bold rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full bg-[#0a2e52] flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 rounded-full bg-[#FCD34D] flex items-center justify-center text-black hover:bg-yellow-400 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Background Gradient/Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default Project;
