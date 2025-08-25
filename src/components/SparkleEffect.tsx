"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface SparkleEffectProps {
  trigger?: boolean;
  className?: string;
}

export function SparkleEffect({ trigger = false, className = "" }: SparkleEffectProps) {
  const sparkles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    delay: i * 0.1,
    x: (Math.random() - 0.5) * 100,
    y: (Math.random() - 0.5) * 100,
  }));

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute top-1/2 left-1/2"
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={
            trigger
              ? {
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: sparkle.x,
                  y: sparkle.y,
                }
              : { opacity: 0, scale: 0, x: 0, y: 0 }
          }
          transition={{
            duration: 0.8,
            delay: sparkle.delay,
            ease: "easeOut",
          }}
        >
          <Sparkles className="w-3 h-3 text-red-400" />
        </motion.div>
      ))}
    </div>
  );
}