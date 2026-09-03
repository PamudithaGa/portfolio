import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Chapter {
  id: string;
  label: string;
  num: string;
  color: string; // Active accent color (#A380FF or #F5CB5C)
}

const chapters: Chapter[] = [
  { id: "home", label: "HOME", num: "01", color: "#A380FF" }, // Lavender
  { id: "about", label: "ABOUT", num: "02", color: "#F5CB5C" }, // Gold
  { id: "tech-stack", label: "SKILLS", num: "03", color: "#A380FF" }, // Lavender
  { id: "projects", label: "WORKS", num: "04", color: "#F5CB5C" }, // Gold
  { id: "contact", label: "CONTACT", num: "05", color: "#A380FF" }, // Lavender
];

const ScrollProgressRail: React.FC = () => {
  const [activeId, setActiveId] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // 1. Calculate Page Scroll Progress (0 to 1)
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(window.scrollY / totalHeight);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Intersection Observer to Detect Active Section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -35% 0px", // triggers when section is in middle viewport area
      threshold: 0.25, // section needs to be 25% visible
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    chapters.forEach((chapter) => {
      const el = document.getElementById(chapter.id);
      if (el) observer.observe(el);
    });

    return () => {
      chapters.forEach((chapter) => {
        const el = document.getElementById(chapter.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleMarkerClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-[40] hidden xl:flex flex-col gap-8 select-none">
      {/* Scroll Progress Line Track */}
      <div className="absolute left-[5px] top-2 bottom-2 w-[2px] bg-white/10 rounded-full overflow-hidden pointer-events-none">
        {/* Dynamic scroll progress fill */}
        <div
          className="w-full bg-gradient-to-b from-[#A380FF] via-[#F5CB5C] to-[#A380FF] origin-top transition-all duration-75"
          style={{ height: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Chapters list */}
      {chapters.map((chapter) => {
        const isActive = activeId === chapter.id;
        const isHovered = hoveredId === chapter.id;
        const isSelectedOrHovered = isActive || isHovered;

        return (
          <div
            key={chapter.id}
            className="flex items-center gap-4 cursor-pointer relative group py-1"
            onClick={() => handleMarkerClick(chapter.id)}
            onMouseEnter={() => setHoveredId(chapter.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* 1. Dot Marker (Progress rail intersection) */}
            <div className="relative w-3 h-3 flex items-center justify-center z-10">
              {/* Outer Glow Ring on Active */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  backgroundColor: chapter.color,
                  boxShadow: `0 0 12px ${chapter.color}`,
                }}
                initial={false}
                animate={{
                  scale: isActive ? 1.3 : 0,
                  opacity: isActive ? 0.4 : 0,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Inner Dot */}
              <motion.div
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: isSelectedOrHovered ? chapter.color : "rgba(255,255,255,0.25)",
                }}
                animate={{
                  scale: isSelectedOrHovered ? 1.15 : 0.8,
                }}
                transition={{ duration: 0.2 }}
              />
            </div>

            {/* 2. Chapter Number & Label Container */}
            <div className="flex items-center gap-3 font-mono">
              {/* Monospace Chapter Number */}
              <span
                className="text-xs font-bold tracking-wider transition-colors duration-300"
                style={{
                  color: isSelectedOrHovered ? chapter.color : "rgba(255,255,255,0.3)",
                }}
              >
                {chapter.num}
              </span>

              {/* Text Label - Slide-Up + Fade-In Reveal */}
              <div className="h-4 overflow-hidden relative w-24">
                <AnimatePresence mode="wait">
                  {isSelectedOrHovered && (
                    <motion.span
                      key={chapter.id}
                      initial={{ y: 12, opacity: 0 }}
                      animate={{ y: 0, opacity: 0.85 }}
                      exit={{ y: -12, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="absolute left-0 text-[10px] font-black tracking-[0.2em] whitespace-nowrap"
                      style={{ color: chapter.color }}
                    >
                      {chapter.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ScrollProgressRail;
