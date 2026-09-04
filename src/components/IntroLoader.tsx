import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LogoP from "../assets/LogoP.png";

interface IntroLoaderProps {
  onComplete?: () => void;
}

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  size: number;
  baseSize: number;
  color: string;
  alpha: number;
  baseAlpha: number;
  revealed: boolean;
  revealOrder: number;
  lineIndex: number;
  sparkleSpeed: number;
  sparkleOffset: number;
}

interface TrailParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
}

const THEME_COLORS = [
  "rgba(245, 238, 255, 0.98)", // glowing white-lavender
  "rgba(214, 196, 255, 0.92)", // bright lavender
  "rgba(192, 169, 255, 0.88)", // medium lavender
  "rgba(163, 128, 255, 0.92)", // theme accent purple-lavender (#A380FF)
  "rgba(138, 92, 255, 0.88)",  // vivid violet
  "rgba(255, 255, 255, 0.98)", // pure diamond sparkle
];

const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [phase, setPhase] = useState<"writing" | "assembled" | "robot-enter" | "cables-attached" | "pulling-up">("writing");
  const phaseRef = useRef<"writing" | "assembled" | "robot-enter" | "cables-attached" | "pulling-up">("writing");
  const animFrameRef = useRef<number | null>(null);
  const isCompleteTriggered = useRef(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const handleComplete = useCallback(() => {
    if (isCompleteTriggered.current) return;
    isCompleteTriggered.current = true;
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if (onCompleteRef.current) {
      onCompleteRef.current();
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    let textParticles: Particle[] = [];
    let cursorTrail: TrailParticle[] = [];

    const offCanvas = document.createElement("canvas");
    const offCtx = offCanvas.getContext("2d", { willReadFrequently: true });

    interface LineBounds {
      minX: number;
      maxX: number;
      minY: number;
      maxY: number;
      centerY: number;
    }

    let lineBounds: LineBounds[] = [];

    const initTextParticles = () => {
      if (!offCtx) return;
      offCanvas.width = width;
      offCanvas.height = height;
      offCtx.clearRect(0, 0, width, height);

      const isMobile = width < 768;
      const isSmall = width < 480;

      // Cursive Handwriting: Only first letter capitalized
      const lines = ["Pamuditha", "Senanayaka"];
      let fontSize = 96;
      let lineSpacing = 100;

      if (isSmall) {
        fontSize = Math.floor(Math.min(width * 0.17, 62));
        lineSpacing = fontSize * 1.25;
      } else if (isMobile) {
        fontSize = Math.floor(Math.min(width * 0.15, 78));
        lineSpacing = fontSize * 1.25;
      } else {
        fontSize = Math.floor(Math.min(width * 0.095, 115));
        lineSpacing = fontSize * 1.2;
      }

      offCtx.font = `700 ${fontSize}px "Dancing Script", "Great Vibes", "Caveat", cursive`;
      offCtx.textAlign = "center";
      offCtx.textBaseline = "middle";
      offCtx.fillStyle = "#FFFFFF";

      const totalHeight = lines.length * lineSpacing;
      const startY = height / 2 - totalHeight / 2 + lineSpacing / 2 + 10;

      lineBounds = [];
      lines.forEach((line, i) => {
        const lineY = startY + i * lineSpacing;
        offCtx.fillText(line, width / 2, lineY);
        lineBounds.push({
          minX: width,
          maxX: 0,
          minY: height,
          maxY: 0,
          centerY: lineY,
        });
      });

      const imgData = offCtx.getImageData(0, 0, width, height);
      const data = imgData.data;
      const sampleStep = isMobile ? 3.2 : 2.5;
      const particles: Particle[] = [];

      for (let y = 0; y < height; y += sampleStep) {
        for (let x = 0; x < width; x += sampleStep) {
          const index = (Math.floor(y) * width + Math.floor(x)) * 4;
          const alpha = data[index + 3];

          if (alpha > 100) {
            const lineIdx = y < startY + lineSpacing * 0.5 ? 0 : 1;
            const b = lineBounds[lineIdx];
            if (x < b.minX) b.minX = x;
            if (x > b.maxX) b.maxX = x;
            if (y < b.minY) b.minY = y;
            if (y > b.maxY) b.maxY = y;

            const baseSize = Math.random() * 1.8 + 1.2;
            particles.push({
              x: x,
              y: y,
              targetX: x,
              targetY: y,
              vx: 0,
              vy: 0,
              size: baseSize,
              baseSize: baseSize,
              color: THEME_COLORS[Math.floor(Math.random() * THEME_COLORS.length)],
              alpha: 0,
              baseAlpha: Math.random() * 0.35 + 0.65,
              revealed: false,
              revealOrder: 0,
              lineIndex: lineIdx,
              sparkleSpeed: Math.random() * 0.05 + 0.02,
              sparkleOffset: Math.random() * Math.PI * 2,
            });
          }
        }
      }

      particles.forEach((p) => {
        const b = lineBounds[p.lineIndex];
        const lineW = Math.max(b.maxX - b.minX, 1);
        const normXInLine = (p.targetX - b.minX) / lineW;

        if (p.lineIndex === 0) {
          p.revealOrder = normXInLine * 0.46 + (Math.random() - 0.5) * 0.02;
        } else {
          p.revealOrder = 0.52 + normXInLine * 0.46 + (Math.random() - 0.5) * 0.02;
        }
      });

      return { particles, lineBounds };
    };

    document.fonts.ready.then(() => {
      const data = initTextParticles();
      if (data) {
        textData = data;
        textParticles = data.particles;
        lineBounds = data.lineBounds;
      }
    });

    let textData = initTextParticles();
    if (!textData) return;
    textParticles = textData.particles;
    lineBounds = textData.lineBounds;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      const newTextData = initTextParticles();
      if (newTextData) {
        textData = newTextData;
        textParticles = newTextData.particles;
        lineBounds = newTextData.lineBounds;
      }
    };
    window.addEventListener("resize", handleResize);

    // Continuous single-timeline run (0s to 4.4s)
    const startTime = performance.now();
    const WRITE_DURATION = 2000;       // 0.0s - 2.0s: Cursive handwriting
    // const ASSEMBLED_HOLD = 2400;       // 2.0s - 2.4s: Full name shimmers
    const ROBOT_ENTRY_TIME = 2400;     // 2.4s: Robot descends from top-right
    const CABLES_ATTACH_TIME = 3000;   // 3.0s: Cables latch on
    const PULL_UP_TIME = 3500;         // 3.5s: Robot lifts screen up
    const FINISH_TIME = 4300;          // 4.3s: Transition completes

    let cursorX = (lineBounds[0]?.minX || width / 2) - 50;
    let cursorY = lineBounds[0]?.centerY || height / 2;

    const ambientStars: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      sparkleSpeed: number;
    }> = [];

    for (let i = 0; i < 40; i++) {
      ambientStars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.6 - 0.2,
        size: Math.random() * 1.8 + 0.8,
        color: THEME_COLORS[Math.floor(Math.random() * THEME_COLORS.length)],
        alpha: Math.random() * 0.6 + 0.2,
        sparkleSpeed: Math.random() * 0.03 + 0.01,
      });
    }

    const render = (now: number) => {
      const elapsed = now - startTime;
      ctx.clearRect(0, 0, width, height);

      const isWriting = elapsed < WRITE_DURATION;
      const writeProgress = Math.min(elapsed / WRITE_DURATION, 1);

      // Phase state updates using ref to avoid re-triggering useEffect
      let nextPhase: "writing" | "assembled" | "robot-enter" | "cables-attached" | "pulling-up" = "writing";
      if (elapsed >= PULL_UP_TIME) {
        nextPhase = "pulling-up";
      } else if (elapsed >= CABLES_ATTACH_TIME) {
        nextPhase = "cables-attached";
      } else if (elapsed >= ROBOT_ENTRY_TIME) {
        nextPhase = "robot-enter";
      } else if (elapsed >= WRITE_DURATION) {
        nextPhase = "assembled";
      }

      if (phaseRef.current !== nextPhase) {
        phaseRef.current = nextPhase;
        setPhase(nextPhase);
      }

      // 1. Ambient Background Center Glow
      ctx.save();
      const centerGlow = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.65
      );
      centerGlow.addColorStop(0, "rgba(163, 128, 255, 0.16)");
      centerGlow.addColorStop(0.5, "rgba(34, 32, 82, 0.28)");
      centerGlow.addColorStop(1, "rgba(8, 8, 12, 0)");
      ctx.fillStyle = centerGlow;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();

      // 2. Ambient Floating Stars
      ctx.save();
      for (let i = 0; i < ambientStars.length; i++) {
        const star = ambientStars[i];
        star.x += star.vx;
        star.y += star.vy;

        if (star.y < -10) star.y = height + 10;
        if (star.x > width + 20) star.x = -10;

        const starAlpha = star.alpha + Math.sin(now * star.sparkleSpeed) * 0.2;
        ctx.globalAlpha = Math.max(0, Math.min(starAlpha, 1));
        ctx.fillStyle = star.color;
        ctx.shadowBlur = 6;
        ctx.shadowColor = "rgba(163, 128, 255, 0.8)";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // 3. Handwriting Cursor Motion Path (Pamuditha -> Senanayaka)
      if (isWriting && lineBounds.length >= 2) {
        const b1 = lineBounds[0];
        const b2 = lineBounds[1];
        let targetX = b1.minX - 30;
        let targetY = b1.centerY;

        if (writeProgress <= 0.48) {
          const t1 = writeProgress / 0.48;
          const ease1 = Math.sin((t1 * Math.PI) / 2);
          targetX = b1.minX - 30 + ease1 * (b1.maxX - b1.minX + 60);
          targetY = b1.centerY + Math.sin(now * 0.015) * 6;
        } else if (writeProgress < 0.54) {
          const tTrans = (writeProgress - 0.48) / 0.06;
          const easeTrans = (1 - Math.cos(tTrans * Math.PI)) / 2;
          const startPtX = b1.maxX + 30;
          const endPtX = b2.minX - 30;
          targetX = startPtX + (endPtX - startPtX) * easeTrans;
          const arcY = Math.sin(tTrans * Math.PI) * 25;
          targetY = b1.centerY + (b2.centerY - b1.centerY) * easeTrans + arcY;
        } else {
          const t2 = (writeProgress - 0.54) / 0.46;
          const ease2 = Math.sin((t2 * Math.PI) / 2);
          targetX = b2.minX - 30 + ease2 * (b2.maxX - b2.minX + 60);
          targetY = b2.centerY + Math.sin(now * 0.015) * 6;
        }

        cursorX += (targetX - cursorX) * 0.28;
        cursorY += (targetY - cursorY) * 0.28;

        const spawnCount = Math.floor(Math.random() * 3) + 2;
        for (let i = 0; i < spawnCount; i++) {
          cursorTrail.push({
            x: cursorX + (Math.random() - 0.5) * 6,
            y: cursorY + (Math.random() - 0.5) * 6,
            vx: (Math.random() - 0.5) * 2.8 - 1.2,
            vy: (Math.random() - 0.5) * 2.4 - 0.6,
            size: Math.random() * 3.6 + 1.8,
            color: THEME_COLORS[Math.floor(Math.random() * THEME_COLORS.length)],
            alpha: 1.0,
            decay: Math.random() * 0.02 + 0.015,
          });
        }

        for (let i = 0; i < textParticles.length; i++) {
          const p = textParticles[i];
          if (!p.revealed && p.revealOrder <= writeProgress * 1.04) {
            p.revealed = true;
            p.x = p.targetX + (Math.random() - 0.5) * 20;
            p.y = p.targetY + (Math.random() - 0.5) * 20;
            p.vx = (Math.random() - 0.5) * 2.0;
            p.vy = (Math.random() - 0.5) * 2.0;
            p.alpha = 1.0;
          }
        }
      }

      // 4. Draw & Update Cursor Trail Particles
      ctx.save();
      for (let i = cursorTrail.length - 1; i >= 0; i--) {
        const tp = cursorTrail[i];
        tp.x += tp.vx;
        tp.y += tp.vy;
        tp.alpha -= tp.decay;

        if (tp.alpha <= 0) {
          cursorTrail.splice(i, 1);
          continue;
        }

        ctx.globalAlpha = tp.alpha;
        ctx.shadowBlur = 12;
        ctx.shadowColor = "rgba(163, 128, 255, 0.9)";
        ctx.fillStyle = tp.color;
        ctx.beginPath();
        ctx.arc(tp.x, tp.y, tp.size * tp.alpha, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // 5. Draw & Update Cursive Text Particles
      const isPostWrite = elapsed >= WRITE_DURATION;
      const shimmerX = isPostWrite
        ? width * 0.1 + ((elapsed - WRITE_DURATION) / 1400) * (width * 0.8)
        : -999;

      ctx.save();
      for (let i = 0; i < textParticles.length; i++) {
        const p = textParticles[i];
        if (!p.revealed) continue;

        if (isWriting) {
          p.x += (p.targetX - p.x) * 0.22;
          p.y += (p.targetY - p.y) * 0.22;
          p.alpha += (p.baseAlpha - p.alpha) * 0.14;
        } else {
          p.x += (p.targetX - p.x) * 0.15;
          p.y += (p.targetY - p.y) * 0.15;

          const distToShimmer = Math.abs(p.targetX - shimmerX);
          let shimmerBoost = 0;
          if (distToShimmer < 110) {
            shimmerBoost = (1 - distToShimmer / 110) * 0.45;
          }

          const sparkle = Math.sin(now * p.sparkleSpeed + p.sparkleOffset) * 0.2;
          p.alpha = Math.min(Math.max(p.baseAlpha + sparkle + shimmerBoost, 0.55), 1.0);
        }

        if (p.alpha <= 0.01) continue;

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(163, 128, 255, 0.9)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // 6. Draw Glowing Cursor Tip
      if (isWriting && writeProgress < 0.98) {
        ctx.save();
        ctx.globalCompositeOperation = "screen";
        const cursorHalo = ctx.createRadialGradient(cursorX, cursorY, 0, cursorX, cursorY, 140);
        cursorHalo.addColorStop(0, "rgba(163, 128, 255, 0.45)");
        cursorHalo.addColorStop(0.4, "rgba(192, 169, 255, 0.15)");
        cursorHalo.addColorStop(1, "rgba(163, 128, 255, 0)");
        ctx.fillStyle = cursorHalo;
        ctx.beginPath();
        ctx.arc(cursorX, cursorY, 140, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        ctx.save();
        ctx.shadowBlur = 22;
        ctx.shadowColor = "rgba(192, 169, 255, 1)";
        ctx.strokeStyle = "rgba(234, 222, 255, 0.95)";
        ctx.lineWidth = 2.5;
        const ringPulse = 14 + Math.sin(now * 0.02) * 3.5;
        ctx.beginPath();
        ctx.arc(cursorX, cursorY, ringPulse, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.shadowBlur = 18;
        ctx.shadowColor = "#FFFFFF";
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.arc(cursorX, cursorY, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      if (elapsed >= FINISH_TIME) {
        handleComplete();
        return;
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [handleComplete]);

  return (
    <div className="fixed inset-0 z-[100000] pointer-events-none select-none overflow-hidden">
      {/* 
        MAIN INTRO SHUTTER / CURTAIN CONTAINER
        Pulls straight UP into the sky when the robot on the right hoists it
      */}
      <motion.div
        initial={{ y: "0%" }}
        animate={{
          y: phase === "pulling-up" ? "-115%" : "0%",
        }}
        transition={{
          duration: 0.8,
          ease: [0.75, 0, 0.15, 1], // Elastic energetic lift
        }}
        className="absolute inset-0 w-full h-full flex flex-col items-center justify-between bg-[#08080C] overflow-hidden"
      >
        {/* Background Cyber Grid */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(163, 128, 255, 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(163, 128, 255, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Top Header Bar */}
        <div className="w-full flex items-center justify-between px-6 sm:px-12 py-6 z-20 pointer-events-auto">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-[#141226] border border-[#A380FF]/40 shadow-[0_0_12px_rgba(163,128,255,0.4)]">
              <img src={LogoP} alt="Logo" className="w-4 h-4 object-contain" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#A380FF] shadow-[0_0_8px_#A380FF] animate-pulse" />
              <span className="text-[11px] sm:text-xs tracking-[0.25em] font-mono font-medium text-[#C0A9FF]/90 uppercase">
                {phase === "pulling-up"
                  ? "SYSTEM LAUNCHING"
                  : phase === "cables-attached"
                  ? "SYSTEM ENGAGED"
                  : "PORTFOLIO INITIALIZING"}
              </span>
            </div>
          </div>

          {/* Skip Button */}
          <button
            onClick={handleComplete}
            className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#A380FF]/35 bg-[#141226]/80 backdrop-blur-md text-[#D6C4FF] text-xs tracking-widest font-mono hover:border-[#A380FF] hover:bg-[#A380FF]/25 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(163,128,255,0.2)] cursor-pointer"
          >
            <span>SKIP</span>
            <svg
              className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#C0A9FF]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Text Particle Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-10 pointer-events-none"
        />

        {/* Latching Anchor Ring on Text Overlay */}
        <div className="absolute inset-0 pointer-events-none z-15 flex items-center justify-center">
          <div className="relative w-[92%] max-w-4xl h-56">
            <div className="absolute top-4 left-6 sm:left-14 flex flex-col items-center">
              <div
                className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  phase === "cables-attached" || phase === "pulling-up"
                    ? "border-[#F5CB5C] bg-[#F5CB5C] shadow-[0_0_18px_#F5CB5C]"
                    : "border-[#A380FF]/30 bg-transparent"
                }`}
              />
            </div>
            <div className="absolute top-4 right-6 sm:right-14 flex flex-col items-center">
              <div
                className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  phase === "cables-attached" || phase === "pulling-up"
                    ? "border-[#F5CB5C] bg-[#F5CB5C] shadow-[0_0_18px_#F5CB5C]"
                    : "border-[#A380FF]/30 bg-transparent"
                }`}
              />
            </div>
          </div>
        </div>

        {/* Bottom Tagline Subtitle */}
        <div className="z-20 mb-8 sm:mb-12 flex flex-col items-center gap-2.5">
          <p className="text-xs sm:text-sm tracking-[0.45em] font-mono font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#D6C4FF] via-[#FFFFFF] to-[#C0A9FF] drop-shadow-[0_0_14px_rgba(163,128,255,0.7)]">
            PORTFOLIO JOURNEY
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-14 h-[1px] bg-gradient-to-r from-transparent via-[#A380FF]/60 to-[#A380FF]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#A380FF] shadow-[0_0_8px_#A380FF]" />
            <span className="w-14 h-[1px] bg-gradient-to-l from-transparent via-[#A380FF]/60 to-[#A380FF]" />
          </div>
        </div>
      </motion.div>

      {/* 
        ========================================================================
        ROBOT CHARACTER POSITIONED ON THE RIGHT SIDE ("dakunu paththata")
        Drops down on top-right, latches energy cables, and hoists up the screen!
        ========================================================================
      */}
      <AnimatePresence>
        {(phase === "robot-enter" || phase === "cables-attached" || phase === "pulling-up") && (
          <motion.div
            initial={{ y: "-220px", opacity: 0 }}
            animate={{
              y:
                phase === "robot-enter"
                  ? "20px"
                  : phase === "cables-attached"
                  ? "10px"
                  : "-160vh",
              opacity: 1,
            }}
            transition={{
              duration:
                phase === "pulling-up"
                  ? 0.85
                  : phase === "cables-attached"
                  ? 0.35
                  : 0.6,
              ease:
                phase === "pulling-up"
                  ? [0.75, 0, 0.15, 1]
                  : "easeOut",
            }}
            className="absolute top-0 right-6 sm:right-16 md:right-28 lg:right-36 z-[100002] flex flex-col items-center pointer-events-none"
          >
            {/* Glowing Energy Cables Connecting Robot on Right to Screen Anchors */}
            <svg
              className="absolute top-24 right-1/2 w-[90vw] max-w-4xl h-[65vh] overflow-visible pointer-events-none"
              style={{
                opacity: phase === "cables-attached" || phase === "pulling-up" ? 1 : 0,
                transition: "opacity 0.2s ease-in-out",
              }}
            >
              <defs>
                <linearGradient id="cableGradLeft" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#F5CB5C" stopOpacity="1" />
                  <stop offset="50%" stopColor="#A380FF" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#4F46E5" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="cableGradRight" x1="100%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor="#F5CB5C" stopOpacity="1" />
                  <stop offset="50%" stopColor="#A380FF" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#4F46E5" stopOpacity="1" />
                </linearGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Cable 1: From Robot to Left Anchor */}
              <line
                x1="100%"
                y1="10"
                x2="-100%"
                y2="200"
                stroke="url(#cableGradLeft)"
                strokeWidth="3.5"
                filter="url(#glow)"
                strokeDasharray="6 2"
                className="animate-pulse"
              />
              <circle cx="-100%" cy="200" r="6" fill="#F5CB5C" filter="url(#glow)" />

              {/* Cable 2: From Robot to Right Anchor */}
              <line
                x1="100%"
                y1="10"
                x2="10%"
                y2="200"
                stroke="url(#cableGradRight)"
                strokeWidth="3.5"
                filter="url(#glow)"
                strokeDasharray="6 2"
                className="animate-pulse"
              />
              <circle cx="10%" cy="200" r="6" fill="#F5CB5C" filter="url(#glow)" />
            </svg>

            {/* 3D-Styled Procedural Robot Visual on the Right */}
            <div className="relative flex flex-col items-center">
              {/* Antenna with Pulsing Beacon */}
              <div className="relative flex flex-col items-center">
                <div className="w-3.5 h-3.5 rounded-full bg-[#A380FF] shadow-[0_0_14px_#A380FF] animate-pulse border border-white/60" />
                <div className="w-1 h-5 bg-gradient-to-b from-[#A380FF] to-[#333]" />
              </div>

              {/* Robot Head */}
              <div className="relative w-22 h-16 sm:w-26 sm:h-18 bg-gradient-to-b from-[#26262b] to-[#121214] rounded-2xl border border-white/15 shadow-[0_10px_25px_rgba(0,0,0,0.8)] flex items-center justify-center p-2 z-20">
                <div className="absolute inset-x-2 top-1 h-[2px] bg-white/25 rounded-full" />

                {/* Dark Visor Screen */}
                <div className="w-full h-full bg-[#060608] rounded-xl border border-white/10 flex items-center justify-around px-3 relative overflow-hidden shadow-inner">
                  {/* Glowing Animated Eyes */}
                  <motion.div
                    animate={{
                      scaleY: phase === "pulling-up" ? [1, 1.2, 1] : [1, 0.15, 1],
                      boxShadow:
                        phase === "pulling-up"
                          ? "0 0 20px #F5CB5C, 0 0 10px #F5CB5C"
                          : "0 0 16px #A380FF, 0 0 8px #4F46E5",
                    }}
                    transition={{
                      repeat: Infinity,
                      repeatDelay: phase === "pulling-up" ? 0.3 : 2.5,
                      duration: 0.25,
                    }}
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full ${
                      phase === "pulling-up" ? "bg-[#F5CB5C]" : "bg-[#A380FF]"
                    }`}
                  />
                  <motion.div
                    animate={{
                      scaleY: phase === "pulling-up" ? [1, 1.2, 1] : [1, 0.15, 1],
                      boxShadow:
                        phase === "pulling-up"
                          ? "0 0 20px #F5CB5C, 0 0 10px #F5CB5C"
                          : "0 0 16px #A380FF, 0 0 8px #4F46E5",
                    }}
                    transition={{
                      repeat: Infinity,
                      repeatDelay: phase === "pulling-up" ? 0.3 : 2.5,
                      duration: 0.25,
                    }}
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full ${
                      phase === "pulling-up" ? "bg-[#F5CB5C]" : "bg-[#A380FF]"
                    }`}
                  />
                </div>
              </div>

              {/* Neck Joint */}
              <div className="w-5 h-2 bg-[#333] border-x border-white/10" />

              {/* Robot Body */}
              <div className="relative w-18 h-20 sm:w-22 sm:h-22 bg-gradient-to-b from-[#1f1f24] to-[#0f0f12] rounded-2xl border border-white/15 shadow-[0_12px_28px_rgba(0,0,0,0.85)] flex flex-col items-center justify-center z-15">
                {/* Chest Power Core */}
                <div className="w-6 h-4.5 rounded bg-[#0a0a0d] border border-white/15 flex items-center justify-center">
                  <div
                    className={`w-3.5 h-2.5 rounded-sm transition-all duration-300 ${
                      phase === "pulling-up"
                        ? "bg-[#F5CB5C] shadow-[0_0_12px_#F5CB5C]"
                        : "bg-[#4F46E5] shadow-[0_0_10px_#4F46E5]"
                    }`}
                  />
                </div>

                {/* Floating Orbit Energy Rings */}
                <div
                  className="absolute -inset-x-5 top-1/2 -translate-y-1/2 h-7 rounded-full border border-[#4F46E5] shadow-[0_0_14px_#4F46E5] opacity-80 pointer-events-none -rotate-6"
                  style={{ transform: "rotateX(75deg)" }}
                />
                <div
                  className="absolute -inset-x-3.5 top-2/3 -translate-y-1/2 h-6 rounded-full border border-[#F5CB5C] shadow-[0_0_12px_#F5CB5C] opacity-75 pointer-events-none rotate-6"
                  style={{ transform: "rotateX(75deg)" }}
                />
              </div>

              {/* Rocket Jet Thrusters & Plasma Flames */}
              <div className="relative flex items-center justify-center gap-5 -mt-1 z-10">
                {/* Left Thruster Nozzle */}
                <div className="flex flex-col items-center">
                  <div className="w-3.5 h-2.5 bg-[#2a2a30] rounded-b-md border-x border-b border-white/20" />
                  <motion.div
                    animate={{
                      height: phase === "pulling-up" ? [28, 48, 34] : [12, 18, 14],
                      opacity: [0.85, 1, 0.9],
                    }}
                    transition={{ repeat: Infinity, duration: 0.15 }}
                    className={`w-3 rounded-b-full shadow-[0_0_18px_#A380FF] ${
                      phase === "pulling-up"
                        ? "bg-gradient-to-b from-white via-[#F5CB5C] to-[#A380FF]"
                        : "bg-gradient-to-b from-white via-[#A380FF] to-transparent"
                    }`}
                  />
                </div>

                {/* Right Thruster Nozzle */}
                <div className="flex flex-col items-center">
                  <div className="w-3.5 h-2.5 bg-[#2a2a30] rounded-b-md border-x border-b border-white/20" />
                  <motion.div
                    animate={{
                      height: phase === "pulling-up" ? [28, 48, 34] : [12, 18, 14],
                      opacity: [0.85, 1, 0.9],
                    }}
                    transition={{ repeat: Infinity, duration: 0.15 }}
                    className={`w-3 rounded-b-full shadow-[0_0_18px_#A380FF] ${
                      phase === "pulling-up"
                        ? "bg-gradient-to-b from-white via-[#F5CB5C] to-[#A380FF]"
                        : "bg-gradient-to-b from-white via-[#A380FF] to-transparent"
                    }`}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IntroLoader;
