"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function DataStreamAnimation() {
  const [streams, setStreams] = useState<number[]>([]);

  useEffect(() => {
    setStreams(Array.from({ length: 8 }, (_, i) => i));
  }, []);

  const dataChars = ['0', '1', '⠁', '⠃', '⠇', '⠏', '⠟', '⠿', '⢿', '⣿'];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      {streams.map((stream) => (
        <div
          key={stream}
          className="absolute h-full"
          style={{
            left: `${(stream * 12.5)}%`,
            width: '2px',
          }}
        >
          {Array.from({ length: 20 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute text-xs font-mono text-red-600"
              initial={{ y: -20, opacity: 0 }}
              animate={{
                y: ['-20px', '100vh'],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.2 + stream * 0.1,
                ease: "linear",
              }}
              style={{
                top: `${i * 5}%`,
              }}
            >
              {dataChars[Math.floor(Math.random() * dataChars.length)]}
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
}