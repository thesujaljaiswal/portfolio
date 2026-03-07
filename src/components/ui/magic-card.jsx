import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";
import { cn } from "../../lib/utils";

export function Spotlight({ className, fill = "white" }) {
  return (
    <div
      className={cn(
        "animate-spotlight pointer-events-none absolute w-full h-full inset-0 z-[1] opacity-0 transition-opacity duration-300",
        className
      )}
    >
      {/* Background radial gradient representing the core spotlight effect via CSS */}
    </div>
  );
}

// MagicCard is a wrapper that listens to mouse events and passes coords to a glowing border and background
export function MagicCard({ children, className, glowColor = "rgba(139, 92, 246, 0.15)", ...props }) {
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn("relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40 p-1 group z-0", className)}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 40%)`,
        }}
      />
      <div className="relative z-20 h-full w-full rounded-lg bg-zinc-950/90 overflow-hidden">
         {children}
      </div>
    </div>
  );
}
