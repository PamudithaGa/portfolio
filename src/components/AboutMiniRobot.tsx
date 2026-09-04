import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  PresentationControls,
  Environment,
  ContactShadows,
  RoundedBox,
} from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Volume2,
  VolumeX,
  X,
  MessageSquare,
  // Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

function MiniProceduralRobot({ isSpeaking }: { isSpeaking: boolean }) {
  const group = useRef<THREE.Group>(null);
  const leftEye = useRef<THREE.Mesh>(null);
  const rightEye = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();

    // Subtle natural head bobbing and mouse tracking
    const x = (state.mouse.x * Math.PI) / 8;
    const y = (state.mouse.y * Math.PI) / 8;

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      x,
      0.1,
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -y,
      0.1,
    );

    // Active eye pulse while speaking
    const speed = isSpeaking ? 6 : 2;
    const intensity =
      Math.abs(Math.sin(t * speed)) * (isSpeaking ? 1.5 : 0.6) + 1.2;
    if (
      leftEye.current &&
      leftEye.current.material instanceof THREE.MeshStandardMaterial
    ) {
      leftEye.current.material.emissiveIntensity = intensity;
    }
    if (
      rightEye.current &&
      rightEye.current.material instanceof THREE.MeshStandardMaterial
    ) {
      rightEye.current.material.emissiveIntensity = intensity;
    }
  });

  return (
    <group ref={group} scale={0.85}>
      {/* Head Section */}
      <RoundedBox
        args={[1.5, 1.2, 0.9]}
        radius={0.14}
        smoothness={4}
        position={[0, 0.55, 0]}
      >
        <meshStandardMaterial color="#18181b" metalness={0.9} roughness={0.1} />
      </RoundedBox>

      {/* Face Screen */}
      <mesh position={[0, 0.55, 0.46]}>
        <planeGeometry args={[1.2, 0.8]} />
        <meshStandardMaterial color="#050505" />
      </mesh>

      {/* Glowing Eyes */}
      <mesh ref={leftEye} position={[-0.35, 0.62, 0.48]}>
        <sphereGeometry args={[0.13, 24, 24]} />
        <meshStandardMaterial
          color="#A380FF"
          emissive="#A380FF"
          emissiveIntensity={2.5}
        />
      </mesh>
      <mesh ref={rightEye} position={[0.35, 0.62, 0.48]}>
        <sphereGeometry args={[0.13, 24, 24]} />
        <meshStandardMaterial
          color="#A380FF"
          emissive="#A380FF"
          emissiveIntensity={2.5}
        />
      </mesh>

      {/* Neck Joint */}
      <mesh position={[0, -0.08, 0]}>
        <cylinderGeometry args={[0.18, 0.18, 0.25]} />
        <meshStandardMaterial color="#27272a" metalness={0.9} />
      </mesh>

      {/* Body Section */}
      <RoundedBox
        args={[1.1, 1.6, 0.85]}
        radius={0.1}
        smoothness={4}
        position={[0, -0.95, 0]}
      >
        <meshStandardMaterial
          color="#222052"
          metalness={0.7}
          roughness={0.25}
        />
      </RoundedBox>

      {/* Chest Piece */}
      <mesh position={[0, -0.7, 0.44]}>
        <boxGeometry args={[0.5, 0.35, 0.05]} />
        <meshStandardMaterial
          color="#F5CB5C"
          emissive="#F5CB5C"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Orbiting Energy Rings */}
      <mesh rotation={[Math.PI / 2.2, 0, 0]} position={[0, -0.95, 0]}>
        <torusGeometry args={[1.25, 0.028, 16, 80]} />
        <meshStandardMaterial
          color="#A380FF"
          emissive="#A380FF"
          emissiveIntensity={1.8}
        />
      </mesh>
      <mesh rotation={[Math.PI / 1.8, 0, 0]} position={[0, -1.2, 0]}>
        <torusGeometry args={[1.0, 0.022, 16, 80]} />
        <meshStandardMaterial
          color="#F5CB5C"
          emissive="#F5CB5C"
          emissiveIntensity={1.2}
        />
      </mesh>

      {/* Antenna with Beacon */}
      <mesh position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.5]} />
        <meshStandardMaterial color="#555" metalness={1} />
      </mesh>
      <mesh position={[0, 1.48, 0]}>
        <sphereGeometry args={[0.07]} />
        <meshStandardMaterial
          color="#A380FF"
          emissive="#A380FF"
          emissiveIntensity={3}
        />
      </mesh>
    </group>
  );
}

const EXPERIENCE_SLIDES = [
  {
    role: "Intern Software Engineer",
    company: "All In One Holdings",
    period: "02/2025 - 08/2025",
    color: "#F5CB5C",
    accentBorder: "hover:border-[#F5CB5C]/30",
    description:
      "Worked from 02/2025 to 08/2025 on the companies enviroment (All In One Holdings).",
  },
  {
    role: "Full Stack Engineer & Architect",
    company: "Freelance / Enterprise",
    period: "Ongoing",
    color: "#C0A9FF",
    accentBorder: "hover:border-[#A380FF]/30",
    description:
      "Architecting modern MERN applications, scalable APIs, microservices, and high-performance interactive 3D web interfaces.",
  },
];

const EDUCATION_SLIDES = [
  {
    title: "BSc (Hons) Computer Science (SoftwareDevelopment)",
    institution: "Degree Program",
    period: "2023 - 2026",
    color: "#C0A9FF",
    accentBorder: "hover:border-[#A380FF]/30",
    description:
      "Specialized in Software Engineering, Modern Distributed Systems Design, Database Optimization, and System Security.",
  },
  {
    title: "Specialized Certifications & UI/UX",
    institution: "Cloud & Architecture",
    period: "Ongoing",
    color: "#F5CB5C",
    accentBorder: "hover:border-[#F5CB5C]/30",
    description:
      "Continuous mastery across Full-Stack Architecture, TypeScript, Three.js 3D Web Graphics, and Enterprise Business Strategy.",
  },
];

const AboutMiniRobot: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"experience" | "education">(
    "experience",
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isVoicePlaying, setIsVoicePlaying] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [currentExpSlide, setCurrentExpSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState<1 | -1>(1);
  const [currentEduSlide, setCurrentEduSlide] = useState(0);
  const [eduSlideDirection, setEduSlideDirection] = useState<1 | -1>(1);
  const timerRef = useRef<number | null>(null);

  // Auto-advance active slideshow every 5 seconds when open
  useEffect(() => {
    if (!isDialogOpen) return;
    const interval = setInterval(() => {
      if (activeTab === "experience") {
        setSlideDirection(1);
        setCurrentExpSlide((prev) => (prev + 1) % EXPERIENCE_SLIDES.length);
      } else {
        setEduSlideDirection(1);
        setCurrentEduSlide((prev) => (prev + 1) % EDUCATION_SLIDES.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isDialogOpen, activeTab]);

  const handleNextSlide = () => {
    setSlideDirection(1);
    setCurrentExpSlide((prev) => (prev + 1) % EXPERIENCE_SLIDES.length);
  };

  const handlePrevSlide = () => {
    setSlideDirection(-1);
    setCurrentExpSlide(
      (prev) =>
        (prev - 1 + EXPERIENCE_SLIDES.length) % EXPERIENCE_SLIDES.length,
    );
  };

  const handleNextEduSlide = () => {
    setEduSlideDirection(1);
    setCurrentEduSlide((prev) => (prev + 1) % EDUCATION_SLIDES.length);
  };

  const handlePrevEduSlide = () => {
    setEduSlideDirection(-1);
    setCurrentEduSlide(
      (prev) => (prev - 1 + EDUCATION_SLIDES.length) % EDUCATION_SLIDES.length,
    );
  };

  // Trigger speech dialogue after staying in the About section for 3 seconds
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          if (!hasAutoOpened) {
            timerRef.current = window.setTimeout(() => {
              setIsDialogOpen(true);
              setHasAutoOpened(true);
            }, 4000); // 3 seconds threshold
          }
        } else {
          if (timerRef.current) {
            clearTimeout(timerRef.current);
          }
        }
      },
      { threshold: 0.35 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [hasAutoOpened]);

  // Text-to-speech voice assistant
  const toggleSpeechVoice = () => {
    if (!("speechSynthesis" in window)) return;

    if (isVoicePlaying) {
      window.speechSynthesis.cancel();
      setIsVoicePlaying(false);
      return;
    }

    window.speechSynthesis.cancel();
    const currentExp = EXPERIENCE_SLIDES[currentExpSlide];
    const currentEdu = EDUCATION_SLIDES[currentEduSlide];
    const speechText =
      activeTab === "experience"
        ? `${currentExp.role} at ${currentExp.company}. ${currentExp.description}`
        : `${currentEdu.title} (${currentEdu.period}). ${currentEdu.description}`;

    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.rate = 1.0;
    utterance.pitch = 1.05;

    utterance.onend = () => setIsVoicePlaying(false);
    utterance.onerror = () => setIsVoicePlaying(false);

    setIsVoicePlaying(true);
    window.speechSynthesis.speak(utterance);
  };

  const currentExp = EXPERIENCE_SLIDES[currentExpSlide];
  const currentEdu = EDUCATION_SLIDES[currentEduSlide];

  return (
    <div
      ref={containerRef}
      className="relative z-30 flex flex-col items-center select-none"
    >
      {/* 
        ========================================================================
        HOLOGRAPHIC CYBER SPEECH DIALOGUE BUBBLE
        Opens automatically after 3 seconds or when clicked!
        ========================================================================
      */}
      <AnimatePresence>
        {isDialogOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 15 }}
            transition={{ type: "spring", damping: 22, stiffness: 300 }}
            className="absolute bottom-[10%] left-[85%] sm:left-[90%] w-[310px] sm:w-[370px] md:w-[420px] p-4 sm:p-5 rounded-2xl bg-[#0e0d1d]/95 backdrop-blur-xl border border-[#A380FF]/40 shadow-[0_15px_40px_-10px_rgba(34,32,82,0.8),0_0_25px_rgba(163,128,255,0.25)] text-white z-50 pointer-events-auto"
          >
            {/* Holographic Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#A380FF] shadow-[0_0_8px_#A380FF] animate-pulse" />
                <span className="text-[11px] font-mono tracking-widest text-[#D6C4FF] font-semibold uppercase flex items-center gap-1.5">
                  Mr.SIGMA
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {/* Voice Button */}
                <button
                  onClick={toggleSpeechVoice}
                  title="Listen with voice"
                  className={`p-1.5 rounded-lg border transition-all ${
                    isVoicePlaying
                      ? "bg-[#A380FF] text-white border-[#A380FF] shadow-[0_0_10px_#A380FF]"
                      : "bg-white/5 border-white/10 text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {isVoicePlaying ? (
                    <VolumeX size={14} />
                  ) : (
                    <Volume2 size={14} />
                  )}
                </button>
                {/* Close Button */}
                <button
                  onClick={() => {
                    setIsDialogOpen(false);
                    if ("speechSynthesis" in window)
                      window.speechSynthesis.cancel();
                    setIsVoicePlaying(false);
                  }}
                  className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* Tab Selectors: Experience vs Education */}
            <div className="flex items-center gap-2 p-1 bg-black/40 rounded-xl mb-3 border border-white/5">
              <button
                onClick={() => {
                  setActiveTab("experience");
                  if (isVoicePlaying) toggleSpeechVoice();
                }}
                className={`flex-1 flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg text-xs font-semibold font-mono tracking-wider transition-all ${
                  activeTab === "experience"
                    ? "bg-[#222052] text-[#F5CB5C] shadow-[0_0_12px_rgba(245,203,92,0.3)] border border-[#F5CB5C]/30"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Briefcase size={13} />
                <span>EXPERIENCE</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab("education");
                  if (isVoicePlaying) toggleSpeechVoice();
                }}
                className={`flex-1 flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg text-xs font-semibold font-mono tracking-wider transition-all ${
                  activeTab === "education"
                    ? "bg-[#222052] text-[#A380FF] shadow-[0_0_12px_rgba(163,128,255,0.3)] border border-[#A380FF]/30"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <GraduationCap size={14} />
                <span>EDUCATION</span>
              </button>
            </div>

            {/* Dynamic Content Panel */}
            <div className="min-h-[125px] text-xs leading-relaxed text-gray-200">
              {activeTab === "experience" ? (
                /* 
                  ==============================================================
                  WORK EXPERIENCE SLIDESHOW CAROUSEL
                  ==============================================================
                */
                <div className="relative">
                  <div className="overflow-hidden relative min-h-[105px]">
                    <AnimatePresence mode="wait" custom={slideDirection}>
                      <motion.div
                        key={currentExpSlide}
                        custom={slideDirection}
                        initial={{
                          opacity: 0,
                          x: slideDirection > 0 ? 30 : -30,
                        }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: slideDirection > 0 ? -30 : 30 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className={`p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/5 ${currentExp.accentBorder} transition-colors`}
                      >
                        <div className="flex items-center justify-between text-[11px] font-mono font-medium">
                          <span style={{ color: currentExp.color }}>
                            {currentExp.role}
                          </span>
                          <span className="text-gray-400 text-[10px]">
                            {currentExp.company}
                          </span>
                        </div>
                        <p className="text-[11px] text-gray-300 mt-1 leading-relaxed">
                          {currentExp.description}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Slideshow Bottom Navigation Controls */}
                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/5">
                    {/* Dots indicator */}
                    <div className="flex items-center gap-1.5">
                      {EXPERIENCE_SLIDES.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setSlideDirection(idx > currentExpSlide ? 1 : -1);
                            setCurrentExpSlide(idx);
                          }}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            idx === currentExpSlide
                              ? "w-5 bg-[#F5CB5C] shadow-[0_0_8px_#F5CB5C]"
                              : "w-1.5 bg-white/20 hover:bg-white/40"
                          }`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                      <span className="text-[10px] font-mono text-gray-400 ml-1.5">
                        {currentExpSlide + 1} / {EXPERIENCE_SLIDES.length}
                      </span>
                    </div>

                    {/* Previous / Next Arrow Buttons */}
                    <div className="flex items-center gap-1">
                      <button
                        onClick={handlePrevSlide}
                        className="p-1 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-gray-300 hover:text-white transition-all active:scale-95"
                        aria-label="Previous Experience"
                      >
                        <ChevronLeft size={14} />
                      </button>
                      <button
                        onClick={handleNextSlide}
                        className="p-1 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-gray-300 hover:text-white transition-all active:scale-95"
                        aria-label="Next Experience"
                      >
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                /* 
                  ==============================================================
                  EDUCATION SLIDESHOW CAROUSEL
                  ==============================================================
                */
                <div className="relative">
                  <div className="overflow-hidden relative min-h-[105px]">
                    <AnimatePresence mode="wait" custom={eduSlideDirection}>
                      <motion.div
                        key={currentEduSlide}
                        custom={eduSlideDirection}
                        initial={{
                          opacity: 0,
                          x: eduSlideDirection > 0 ? 30 : -30,
                        }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{
                          opacity: 0,
                          x: eduSlideDirection > 0 ? -30 : 30,
                        }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className={`p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/5 ${currentEdu.accentBorder} transition-colors`}
                      >
                        <div className="flex items-center justify-between text-[11px] font-mono font-medium">
                          <span style={{ color: currentEdu.color }}>
                            {currentEdu.title}
                          </span>
                          <span className="text-gray-400 text-[10px]">
                            {currentEdu.period}
                          </span>
                        </div>
                        <p className="text-[11px] text-gray-300 mt-1 leading-relaxed">
                          {currentEdu.description}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Education Slideshow Bottom Navigation Controls */}
                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/5">
                    {/* Dots indicator */}
                    <div className="flex items-center gap-1.5">
                      {EDUCATION_SLIDES.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setEduSlideDirection(
                              idx > currentEduSlide ? 1 : -1,
                            );
                            setCurrentEduSlide(idx);
                          }}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            idx === currentEduSlide
                              ? "w-5 bg-[#A380FF] shadow-[0_0_8px_#A380FF]"
                              : "w-1.5 bg-white/20 hover:bg-white/40"
                          }`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                      <span className="text-[10px] font-mono text-gray-400 ml-1.5">
                        {currentEduSlide + 1} / {EDUCATION_SLIDES.length}
                      </span>
                    </div>

                    {/* Previous / Next Arrow Buttons */}
                    <div className="flex items-center gap-1">
                      <button
                        onClick={handlePrevEduSlide}
                        className="p-1 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-gray-300 hover:text-white transition-all active:scale-95"
                        aria-label="Previous Education"
                      >
                        <ChevronLeft size={14} />
                      </button>
                      <button
                        onClick={handleNextEduSlide}
                        className="p-1 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-gray-300 hover:text-white transition-all active:scale-95"
                        aria-label="Next Education"
                      >
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Speech Tail Pointer */}
            <div className="absolute -bottom-2.5 left-8 sm:left-12 w-4 h-4 bg-[#0e0d1d] border-r border-b border-[#A380FF]/40 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 
        ========================================================================
        MINI 3D ROBOT CANVAS
        Compact interactive canvas with presentation controls & floating rings
        ========================================================================
      */}
      <div
        onClick={() => setIsDialogOpen((prev) => !prev)}
        className="relative w-44 h-48 sm:w-48 sm:h-52 cursor-pointer group"
        title="Click to talk with SIGMA-BOT"
      >
        {/* Subtle glowing ground aura */}
        <div className="absolute inset-x-4 bottom-2 h-6 bg-gradient-to-t from-[#A380FF]/30 to-transparent rounded-full filter blur-[12px] group-hover:from-[#F5CB5C]/40 transition-colors duration-300" />

        {/* 3D Canvas */}
        <Canvas
          shadows
          camera={{ position: [0, 0, 7.5], fov: 28 }}
          gl={{ antialias: true, alpha: true }}
          className="w-full h-full"
        >
          <ambientLight intensity={0.6} />
          <spotLight position={[8, 8, 8]} intensity={2} color="#A380FF" />
          <pointLight position={[-8, -8, -8]} intensity={1.5} color="#F5CB5C" />
          <directionalLight position={[0, 4, 4]} intensity={1.2} />

          <PresentationControls
            global={false}
            snap
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 6, Math.PI / 6]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
            <Float
              speed={2.5}
              rotationIntensity={0.6}
              floatIntensity={1}
              floatingRange={[-0.2, 0.2]}
            >
              <MiniProceduralRobot
                isSpeaking={isVoicePlaying || isDialogOpen}
              />
            </Float>
          </PresentationControls>

          <ContactShadows
            position={[0, -2.2, 0]}
            opacity={0.35}
            scale={6}
            blur={2}
            far={3.5}
          />
          <Environment preset="city" />
        </Canvas>

        {/* Mini prompt tag when dialog is closed */}
        {!isDialogOpen && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -top-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-full bg-[#181636]/90 border border-[#A380FF]/40 text-[#D6C4FF] text-[10px] font-mono tracking-wider flex items-center gap-1 shadow-[0_0_12px_rgba(163,128,255,0.3)] pointer-events-none group-hover:scale-105 transition-transform"
          >
            <MessageSquare size={11} className="text-[#F5CB5C]" />
            <span>Click to speak</span>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AboutMiniRobot;
