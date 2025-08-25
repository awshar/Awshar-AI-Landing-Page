"use client";

import { motion } from "framer-motion";
import { FloatingParticles } from "./FloatingParticles";

const stats = [
  {
    value: "500TB+",
    label: "Data Processed Monthly"
  },
  {
    value: "50+",
    label: "Data Sources Monitored"
  },
  {
    value: "<1s",
    label: "Real-time Analysis"
  },
  {
    value: "20+",
    label: "Indian Languages"
  }
];

export function FeatureHighlight() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-16 bg-gradient-to-r from-red-600 to-black rounded-2xl p-8 lg:p-12 text-white text-center relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&h=600&fit=crop')] bg-cover bg-center opacity-10"></div>
      <FloatingParticles count={20} color="bg-white" size={1} />
      
      {/* Pulsing glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-red-400/30 to-red-600/30 rounded-2xl"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="relative z-10">
        <h3 className="text-2xl lg:text-3xl font-bold mb-4">
          All Features Work Together Seamlessly
        </h3>
        <p className="text-red-100 text-lg max-w-2xl mx-auto mb-8">
          Our integrated platform ensures that insights from social listening
          inform your geo-fencing strategies, while competitor analysis drives
          your content recommendations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <motion.div 
                className="text-3xl font-bold mb-2"
                animate={{
                  textShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 10px rgba(255,255,255,0.5)", "0 0 0px rgba(255,255,255,0)"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              >
                {stat.value}
              </motion.div>
              <div className="text-red-200 group-hover:text-white transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}