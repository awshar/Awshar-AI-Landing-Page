"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Sparkles, Brain, Zap } from "lucide-react";

export function AICursorCompanion() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(0);

  const icons = [Sparkles, Brain, Zap];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsActive(true);
      
      // Hide after inactivity
      const timer = setTimeout(() => setIsActive(false), 2000);
      return () => clearTimeout(timer);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const IconComponent = icons[currentIcon];

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] mix-blend-difference"
      animate={{
        x: mousePosition.x - 20,
        y: mousePosition.y - 20,
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1 : 0.5
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
        opacity: { duration: 0.2 }
      }}
    >
      <motion.div
        className="w-10 h-10 bg-gradient-to-r from-red-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{
          rotate: { duration: 3, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity }
        }}
      >
        <IconComponent className="w-5 h-5 text-white" />
      </motion.div>
      
      {/* Orbit particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{
            left: "50%",
            top: "50%",
            marginLeft: "-4px",
            marginTop: "-4px",
          }}
          animate={{
            rotate: [0, 360],
            x: [0, 25 * Math.cos((i * 120 * Math.PI) / 180)],
            y: [0, 25 * Math.sin((i * 120 * Math.PI) / 180)],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.2
          }}
        />
      ))}
    </motion.div>
  );
}