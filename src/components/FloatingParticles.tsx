"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingParticlesProps {
  count?: number;
  color?: string;
  size?: number;
}

export function FloatingParticles({ 
  count = 15, 
  color = "bg-red-400", 
  size = 2 
}: FloatingParticlesProps) {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    delay: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 4,
    }));
    setParticles(newParticles);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute ${color} rounded-full opacity-20`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${size}px`,
            height: `${size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, -10, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}