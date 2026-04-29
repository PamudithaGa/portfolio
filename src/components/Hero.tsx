import React from "react";
import Navbar from "./Navbar";
// import MainImg from "../assets/brain2.png";
import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import RobotCanvas from "./RobotCanvas";

const Hero: React.FC = () => {
  return (
    <div className="bg-[#09090B] mt-4 py-1 px-5 border border-white/5 rounded-2xl relative overflow-hidden bg-grid">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />

      <section className="relative z-20 mx-auto">
        <Navbar />
      </section>

      <div className="w-full h-[93vh] flex flex-col lg:flex-row justify-center items-center text-white rounded-xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full w-full  lg:w-1/2 mt-70  flex flex-col justify-center items-start px-10 lg:pl-20 z-10 relative"
        >
          <div className=" flex space-between w-full h-full">
            <div className="w-full xl:w-auto z-20">
              <div className="space-y-1 ">
                <h1 className="font-roboto text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none">
                  PAMUDITHA
                </h1>
                <h1 className="font-roboto text-5xl md:text-8xl font-bold text-white/20 tracking-tighter leading-none ml-6 md:ml-16">
                  SENANAYAKA
                </h1>
              </div>

              <div className="mt-12 space-y-6 border-l border-white/10 pl-8">
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-medium mb-1">
                    Engineering
                  </span>
                  <h2 className="text-xl md:text-2xl font-roboto text-white/80 font-light tracking-tight">
                    Full Stack Developer
                  </h2>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-medium mb-1">
                    Architecture
                  </span>
                  <h2 className="text-xl md:text-2xl font-roboto text-white/80 font-light tracking-tight">
                    Digital Solutions Architect
                  </h2>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-medium mb-1">
                    Strategy
                  </span>
                  <h2 className="text-xl md:text-2xl font-roboto text-white/80 font-light tracking-tight">
                    Business & Brand Strategist
                  </h2>
                </div>
              </div>
            </div>

            {/* Text Cloud Background */}
            <motion.div
              animate={{
                y: ["-50%", "-52%", "-50%"],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 right-100 -translate-y-1/2 pointer-events-none mix-blend-screen z-0 flex flex-col items-end select-none opacity-30 lg:pr-20"
            >
              <div className="relative w-full h-full font-roboto">
                <span
                  className="absolute top-[20%] left-[10%] text-[30px] lg:text-[40px] font-bold text-transparent drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                  style={{ WebkitTextStroke: "1px rgba(99,102,241,0.6)" }}
                >
                  FULL STACK
                </span>
                <span
                  className="absolute top-[10%] left-[55%] text-[50px] lg:text-[70px] font-black text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                  style={{ WebkitTextStroke: "2px rgba(168,85,247,0.5)" }}
                >
                  CODE
                </span>
                <span
                  className="absolute top-[35%] left-[5%] text-[70px] lg:text-[90px] font-black text-transparent drop-shadow-[0_0_20px_rgba(99,102,241,0.5)]"
                  style={{ WebkitTextStroke: "2px rgba(99,102,241,0.6)" }}
                >
                  INNOVATE
                </span>
                <span
                  className="absolute top-[50%] left-[65%] text-[20px] lg:text-[30px] font-bold text-transparent -rotate-90 origin-left drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                  style={{ WebkitTextStroke: "1px rgba(168,85,247,0.7)" }}
                >
                  ARCHITECTURE
                </span>
                <span
                  className="absolute top-[65%] left-[15%] text-[60px] lg:text-[80px] font-black text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                  style={{ WebkitTextStroke: "2px rgba(168,85,247,0.6)" }}
                >
                  ENGINEER
                </span>
                <span
                  className="absolute top-[85%] left-[15%] text-[25px] lg:text-[35px] font-bold text-transparent drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                  style={{ WebkitTextStroke: "1px rgba(99,102,241,0.6)" }}
                >
                  DESIGN
                </span>
                <span
                  className="absolute top-[40%] left-[80%] text-[35px] lg:text-[45px] font-black text-transparent drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                  style={{ WebkitTextStroke: "1px rgba(99,102,241,0.5)" }}
                >
                  SYSTEMS
                </span>
                <span
                  className="absolute top-[80%] left-[60%] text-[20px] lg:text-[25px] font-medium text-transparent drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                  style={{ WebkitTextStroke: "1px rgba(99,102,241,0.7)" }}
                >
                  STRATEGY
                </span>
                <span
                  className="absolute top-[15%] left-[80%] text-[20px] lg:text-[25px] font-medium text-transparent rotate-90 origin-left drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                  style={{ WebkitTextStroke: "1px rgba(168,85,247,0.6)" }}
                >
                  REACT.JS
                </span>
                <span
                  className="absolute top-[55%] left-[5%] text-[15px] lg:text-[20px] font-normal text-transparent drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                  style={{ WebkitTextStroke: "1px rgba(99,102,241,0.7)" }}
                >
                  UI/UX
                </span>
                <span
                  className="absolute top-[75%] left-[85%] text-[25px] lg:text-[30px] font-bold text-transparent drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                  style={{ WebkitTextStroke: "1px rgba(168,85,247,0.6)" }}
                >
                  CLOUD
                </span>
              </div>
            </motion.div>

            {/* Right side with QR code and decorative elements */}
            <div className=" w-full xl:w-1/2 flex flex-col items-end justify-end relative z-10 xl:ml-10">
              {/* Glowing orbs/particles background */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 right-1/4 w-32 h-32 bg-indigo-500/20 blur-[60px] rounded-full z-0 pointer-events-none"
              />
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-0 left-1/4 w-40 h-40 bg-purple-500/20 blur-[70px] rounded-full z-0 pointer-events-none"
              />

              {/* Content Container */}
              <div className="z-10 w-full flex flex-col gap-10 items-end justify-end">
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start mt-2">
                  {/* QR code to social profiles */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5, type: "spring" }}
                    className="p-4 border border-white/10 bg-black/40 backdrop-blur-md rounded-2xl flex flex-col items-center gap-3 relative group hover:border-indigo-500/30 transition-colors shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                    <div className="bg-white p-2 rounded-xl shadow-inner">
                      <QRCodeSVG
                        value="https://linkedin.com/in/pamudithagss"
                        size={70}
                        className="rounded-lg"
                      />
                    </div>
                    <span className="text-[10px] text-white/50 tracking-[0.2em] uppercase font-medium group-hover:text-white/80 transition-colors">
                      Connect
                    </span>
                  </motion.div>

                  {/* Decorative shapes matching the brand */}
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4 items-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-10 h-10 border border-[#F5CB5C]/30 rounded-full flex items-center justify-center"
                      >
                        <div className="w-1.5 h-1.5 bg-[#F5CB5C] rounded-full shadow-[0_0_10px_rgba(245,203,92,0.8)]" />
                      </motion.div>
                      <motion.div
                        animate={{ scale: [1, 0.8, 1], rotate: [45, 90, 45] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="w-8 h-8 border border-[#222052] bg-[#222052]/40 backdrop-blur-sm rounded-lg transform rotate-45"
                      />
                    </div>
                    <div className="flex flex-col gap-2 ml-6">
                      <motion.div
                        animate={{ x: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-transparent rounded-full"
                      />
                      <motion.div
                        animate={{ x: [0, -10, 0], opacity: [0.3, 0.7, 0.3] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5,
                        }}
                        className="w-8 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full ml-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className=" w-full lg:w-1/2 h-[500px] lg:h-full relative mt-10 lg:-mt-50">
          <RobotCanvas />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-500/20 blur-[100px] rounded-full z-10" />
        </div>
      </div>

      {/* Modern Decorative Element */}
      <div className="absolute bottom-10 right-10 flex gap-4">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="border border-[#F5CB5C] w-12 h-12"
        />
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="bg-[#222052] w-12 h-12"
        />
        <motion.div
          animate={{ x: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="border border-white/20 w-12 h-12"
        />
      </div>
    </div>
  );
};

export default Hero;
