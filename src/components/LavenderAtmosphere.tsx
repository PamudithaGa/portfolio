import { useEffect, useRef, type ReactNode } from "react";

function MistParticles({ count = 14 }: { count?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    // Randomize each particle's position/size/timing once on mount
    const particles = container.querySelectorAll<HTMLElement>(".mist-particle");
    particles.forEach((p) => {
      const left = Math.random() * 100;
      const size = 60 + Math.random() * 120;
      const duration = 10 + Math.random() * 10;
      const delay = Math.random() * -duration;
      p.style.left = `${left}%`;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.animationDuration = `${duration}s`;
      p.style.animationDelay = `${delay}s`;
    });
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="mist-particle absolute bottom-0 rounded-full bg-violet-300/10 blur-2xl animate-mist-rise"
        />
      ))}
    </div>
  );
}

export default function LavenderAtmosphere({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Layer 1: breathing gradient, sits behind everything */}
      <div className="absolute inset-0 bg-gradient-radial from-violet-500/15 via-transparent to-transparent animate-lavender-breathe" />

      {/* Layer 2: floating mist particles */}
      <MistParticles />

      {/* Layer 3: your existing SVG / signature / content — always on top */}
      <div className="relative z-10">{children}</div>

      {/* Local keyframes — move to your global CSS/tailwind.config if preferred */}
      <style>{`
        @keyframes lavender-breathe {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        .animate-lavender-breathe {
          animation: lavender-breathe 6s ease-in-out infinite;
        }
        @keyframes mist-rise {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.4; }
          100% { transform: translateY(-140%) translateX(20px); opacity: 0; }
        }
        .animate-mist-rise {
          animation-name: mist-rise;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-lavender-breathe, .animate-mist-rise { animation: none; }
        }
      `}</style>
    </div>
  );
}
