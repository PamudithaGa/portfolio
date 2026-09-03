import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LogoP from "../assets/LogoP.png";

interface IntroLoaderProps {
  onComplete: () => void;
}

const statusLogs = [
  "SYSTEM: INITIALIZING QUANTUM PORTFOLIO SYSTEM...",
  "SYSTEM: CONNECTING TO MR.SIGMA QUANTUM NODE...",
  "SYSTEM: COMPILING WEB3FORMS EMAIL ROUTING MODULE...",
  "SYSTEM: INITIALIZING 3D WEBGL GRAPHICS ENVIRONMENT...",
  "SYSTEM: INJECTING LAVENDER & GOLD PARTICLES...",
  "SYSTEM: STABILIZING SPACESHIP SCENE ASSETS...",
  "SYSTEM: ESTABLISHING SECURE VISITOR INTERFACE...",
  "SYSTEM: ACCESS GRANTED. WELCOME TO THE JOURNEY.",
];

const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [activeLogIndex, setActiveLogIndex] = useState(0);
  const [logsList, setLogsList] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // 1. Progress Bar Tick (over 3.2 seconds)
    const duration = 3200; // ms
    const intervalTime = 30; // ms
    const totalSteps = duration / intervalTime;
    const increment = 100 / totalSteps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // 2. Futuristic terminal logs timeline
    const logTimings = [100, 400, 800, 1300, 1800, 2300, 2700, 3000];

    const logTimers = logTimings.map((time, index) => {
      return setTimeout(() => {
        setLogsList((prev) => [...prev, statusLogs[index]]);
        setActiveLogIndex(index);
      }, time);
    });

    // 3. Final Completion Trigger
    const finishTimer = setTimeout(() => {
      setIsFinished(true);
      // Give a tiny buffer for the exit fade-out animation to execute
      setTimeout(() => {
        onComplete();
      }, 600);
    }, 3500);

    return () => {
      logTimers.forEach(clearTimeout);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  // Framer motion animation configurations
  const containerVariants: any = {
    exit: {
      opacity: 0,
      scale: 1.04,
      filter: "blur(8px)",
      transition: {
        duration: 0.65,
        ease: [0.76, 0, 0.24, 1], // premium cubic-bezier easing
      },
    },
  };


  const letterVariants: any = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.4 + i * 0.08,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const titleText = "Pamuditha Senanayaka";

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          variants={containerVariants}
          exit="exit"
          className="fixed inset-0 z-[100000] flex flex-col justify-between p-6 sm:p-12 md:p-16 bg-[#09090B] font-mono text-white select-none overflow-hidden"
        >
          {/* Cyber Grid Background */}
          <div 
            className="absolute inset-0 bg-grid opacity-15 pointer-events-none" 
            style={{ backgroundImage: `linear-gradient(to right, rgba(163, 128, 255, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(163, 128, 255, 0.15) 1px, transparent 1px)`, backgroundSize: "32px 32px" }}
          />

          {/* Central Lavender & Gold Radial Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute w-[350px] h-[350px] rounded-full bg-[#A380FF]/10 filter blur-[90px] animate-pulse" />
            <div className="absolute w-[200px] h-[200px] rounded-full bg-[#F5CB5C]/5 filter blur-[60px] translate-x-12 translate-y-12 animate-pulse" style={{ animationDelay: "1s" }} />
          </div>

          {/* Top Left Header Tag */}
          <div className="flex justify-between items-center z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#A380FF] animate-ping" />
              <span className="text-[10px] tracking-[0.25em] text-gray-500 font-bold uppercase">
                SYSTEM CORRUPT CHECK // OK
              </span>
            </div>
            <div className="text-[10px] tracking-wider text-gray-500 font-semibold uppercase">
              SIGMA ENGINE V4.1
            </div>
          </div>

          {/* Center Graphic & Name Reveal */}
          <div className="flex flex-col items-center justify-center gap-6 z-10 my-auto">
            {/* Image Logo - LogoP */}
            <div className="relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28">
              {/* Outer Glow Effect behind Logo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#A380FF]/30 to-[#F5CB5C]/20 rounded-full filter blur-[20px]" />
              
              <motion.img
                src={LogoP}
                alt="Mr. SIGMA Logo"
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_20px_rgba(163,128,255,0.7)]"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 1.5, 
                  ease: [0.34, 1.56, 0.64, 1], // premium spring/bounce easing
                  opacity: { duration: 0.8 } 
                }}
              />
            </div>

            {/* Name Reveal */}
            <div className="flex flex-col items-center gap-1.5 mt-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans tracking-[0.15em] flex uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-300">
                {titleText.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ whiteSpace: char === " " ? "pre" : "normal" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.5, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="text-[10px] sm:text-xs tracking-[0.4em] font-semibold text-[#C0A9FF]"
              >
                PORTFOLIO JOURNEY
              </motion.p>
            </div>
          </div>

          {/* Bottom Console Terminal & Progress Bar */}
          <div className="flex flex-col gap-4 z-10 w-full max-w-xl mx-auto">
            {/* Terminal Logging Window */}
            <div className="w-full bg-[#12111A]/80 border border-[#A380FF]/15 rounded-xl p-4 h-28 overflow-y-auto flex flex-col gap-1.5 backdrop-blur-sm scrollbar-none text-[10px] text-[#C0A9FF] leading-relaxed">
              <AnimatePresence>
                {logsList.map((log, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: index === activeLogIndex ? 1 : 0.4, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex gap-2 items-start ${index === activeLogIndex ? "text-[#EADEFF]" : ""}`}
                  >
                    <span className="text-[#F5CB5C]">❯</span>
                    <span>{log}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Progress Percentage & Progress Bar */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-[10px] text-gray-500 font-semibold">
                <span>ESTABLISHING SECURE NODE</span>
                <span className="text-[#A380FF]">{Math.floor(progress)}%</span>
              </div>
              
              {/* Sleek track bar */}
              <div className="w-full h-[2.5px] bg-[#222052]/30 rounded-full overflow-hidden relative border border-white/5">
                {/* Lavender progress fill */}
                <motion.div
                  className="h-full bg-gradient-to-r from-[#A380FF] to-[#F5CB5C]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;
