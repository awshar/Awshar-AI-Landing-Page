"use client";

import { motion } from "framer-motion";
import { features } from "./data/features";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function FeatureCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
      {features.map((feature, index) => {
        const IconComponent = feature.icon;
        const isHovered = hoveredCard === index;
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.4, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
            className={`group relative cursor-pointer ${
              feature.title === "Multi-Language Support" 
                ? "md:col-span-2 xl:col-span-1" 
                : ""
            }`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{ 
              y: -4,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
          >
            {/* Clean Card Container */}
            <motion.div 
              className="relative h-full bg-white border border-gray-100 rounded-2xl p-6 overflow-hidden"
              animate={{
                borderColor: isHovered ? feature.color.replace('text-', '').replace('-600', '') + '40' : 'rgba(229, 231, 235, 1)',
                boxShadow: isHovered 
                  ? `0 8px 32px -4px ${feature.color.replace('text-', '').replace('-600', '') + '20'}` 
                  : "0 1px 3px rgba(0, 0, 0, 0.05)"
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Subtle Background Accent */}
              <motion.div
                className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-5"
                style={{
                  background: feature.color.replace('text-', '').replace('-600', '')
                }}
                animate={{
                  scale: isHovered ? 1.2 : 1,
                  opacity: isHovered ? 0.08 : 0.05
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Icon */}
              <motion.div 
                className="relative mb-4 inline-flex"
                animate={{
                  scale: isHovered ? 1.05 : 1
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative">
                  <motion.div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: isHovered 
                        ? feature.color.replace('text-', '').replace('-600', '') 
                        : feature.bgColor.replace('bg-', '').replace('-50', '') + '40'
                    }}
                    animate={{
                      backgroundColor: isHovered 
                        ? feature.color.replace('text-', '').replace('-600', '') 
                        : feature.bgColor.replace('bg-', '').replace('-50', '') + '40'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent 
                      className={`w-6 h-6 transition-colors duration-300`}
                      style={{
                        color: isHovered ? 'white' : feature.color.replace('text-', '').replace('-600', '')
                      }}
                    />
                  </motion.div>
                  
                  {/* Minimal glow effect on hover */}
                  {isHovered && (
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      style={{
                        boxShadow: `0 0 20px ${feature.color.replace('text-', '').replace('-600', '') + '30'}`
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              </motion.div>

              {/* Content */}
              <div className="space-y-3">
                <motion.h3 
                  className="font-semibold text-gray-900 leading-tight"
                  animate={{
                    color: isHovered ? feature.color.replace('text-', '').replace('-600', '') : '#111827'
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {feature.title}
                </motion.h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Interactive Arrow */}
              <motion.div
                className="absolute top-6 right-6"
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1 : 0.8,
                  rotate: isHovered ? 0 : -45
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <motion.div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{
                    backgroundColor: feature.color.replace('text-', '').replace('-600', '') + '10'
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowUpRight 
                    className="w-4 h-4"
                    style={{
                      color: feature.color.replace('text-', '').replace('-600', '')
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Bottom accent line */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 rounded-full"
                style={{
                  backgroundColor: feature.color.replace('text-', '').replace('-600', '')
                }}
                animate={{
                  width: isHovered ? "100%" : "0%"
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />

              {/* Subtle animated dots */}
              <motion.div
                className="absolute bottom-4 right-6 flex space-x-1"
                animate={{
                  opacity: isHovered ? 0.6 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 h-1 rounded-full"
                    style={{
                      backgroundColor: feature.color.replace('text-', '').replace('-600', '')
                    }}
                    animate={{
                      scale: isHovered ? [1, 1.2, 1] : 1,
                      opacity: isHovered ? [0.6, 1, 0.6] : 0
                    }}
                    transition={{
                      duration: 1.2,
                      delay: i * 0.2,
                      repeat: isHovered ? Infinity : 0,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}