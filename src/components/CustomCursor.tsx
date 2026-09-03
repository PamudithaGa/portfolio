import React, { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
}

const CustomCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Mouse coordinate tracking
  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });
  const glowRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const lastMousePosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if the device is touch-based (no fine pointer)
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) {
      return; // Do not render custom cursor on touch devices
    }

    // Hide system cursor by injecting styling dynamically
    const cursorStyle = document.createElement("style");
    cursorStyle.id = "custom-cursor-styles";
    cursorStyle.innerHTML = `
      @media (pointer: fine) {
        body, a, button, input, select, textarea, [role="button"] {
          cursor: none !important;
        }
      }
    `;
    document.head.appendChild(cursorStyle);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas to cover viewport
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Track mouse move
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      
      if (!isVisible) {
        setIsVisible(true);
        // Initialize position on first movement to avoid spring animation from (0,0)
        cursorRef.current.x = e.clientX;
        cursorRef.current.y = e.clientY;
        glowRef.current.x = e.clientX;
        glowRef.current.y = e.clientY;
      }

      // Calculate speed of mouse to determine particle count
      const dx = e.clientX - lastMousePosRef.current.x;
      const dy = e.clientY - lastMousePosRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Spawn particles based on movement
      if (distance > 2) {
        const particleColors = [
          "rgba(214, 196, 255, 0.8)", // light lavender
          "rgba(192, 169, 255, 0.8)", // medium lavender
          "rgba(163, 128, 255, 0.8)", // purple-lavender
          "rgba(234, 222, 255, 0.8)", // very soft lavender
        ];

        // Spawn a couple particles
        const spawnCount = Math.min(Math.floor(distance / 4) + 1, 4);
        for (let i = 0; i < spawnCount; i++) {
          particlesRef.current.push({
            x: e.clientX,
            y: e.clientY,
            // Slight offset and random velocity
            vx: (Math.random() - 0.5) * 1.5,
            vy: (Math.random() - 0.5) * 1.5 - 0.2, // slight upward float
            size: Math.random() * 3.5 + 1.5,
            color: particleColors[Math.floor(Math.random() * particleColors.length)],
            alpha: 1.0,
            decay: Math.random() * 0.015 + 0.01,
          });
        }

        lastMousePosRef.current = { x: e.clientX, y: e.clientY };
      }
    };

    // Track cursor leaving/entering window
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Track element hover for expanding cursor ring
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Check if target is interactive
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "SELECT" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        target.closest('[role="button"]') !== null ||
        target.classList.contains("hoverable");

      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    // Animation Loop
    let animationFrameId: number;
    let targetScale = 1;
    let currentScale = 1;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isVisible) {
        const mouse = mouseRef.current;
        const cursor = cursorRef.current;
        const glow = glowRef.current;

        // Smooth follow logic (damping)
        cursor.x += (mouse.x - cursor.x) * 0.16;
        cursor.y += (mouse.y - cursor.y) * 0.16;

        // Lazier background glow follow
        glow.x += (mouse.x - glow.x) * 0.06;
        glow.y += (mouse.y - glow.y) * 0.06;

        // Scale interpolation for hover states
        targetScale = isHovering ? 2.0 : 1.0;
        currentScale += (targetScale - currentScale) * 0.2;

        // 1. Draw soft large background lavender glow
        ctx.save();
        ctx.globalCompositeOperation = "screen";
        const bgGlow = ctx.createRadialGradient(glow.x, glow.y, 0, glow.x, glow.y, 250);
        bgGlow.addColorStop(0, "rgba(163, 128, 255, 0.08)");
        bgGlow.addColorStop(0.5, "rgba(163, 128, 255, 0.03)");
        bgGlow.addColorStop(1, "rgba(163, 128, 255, 0)");
        ctx.fillStyle = bgGlow;
        ctx.beginPath();
        ctx.arc(glow.x, glow.y, 250, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // 2. Draw outer ring with lavender glow
        ctx.save();
        ctx.shadowBlur = 12;
        ctx.shadowColor = "rgba(163, 128, 255, 0.7)";
        ctx.strokeStyle = isHovering ? "rgba(192, 169, 255, 0.8)" : "rgba(163, 128, 255, 0.5)";
        ctx.lineWidth = isHovering ? 2.5 : 1.5;
        
        ctx.beginPath();
        // Ring radius is 10px baseline, scaled by currentScale
        ctx.arc(cursor.x, cursor.y, 10 * currentScale, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        // 3. Draw inner dot (tracks mouse instantly, but has small trail of particles)
        ctx.save();
        ctx.fillStyle = "rgba(34, 32, 82, 0.9)"; // Matches deep navy color theme (#222052)
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 4. Draw & Update particles
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        
        // Physics update
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        // Remove dead particles
        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // Draw particle
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 6;
        ctx.shadowColor = "rgba(163, 128, 255, 0.5)";
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.alpha, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);

      // Remove style tag
      const existingStyle = document.getElementById("custom-cursor-styles");
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, [isHovering, isVisible]);

  // Render canvas element (will not display on touch screens due to pointer-events-none and pointer check in mount)
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-[99999]"
      style={{ mixBlendMode: "difference" }}
    />
  );
};

export default CustomCursor;
