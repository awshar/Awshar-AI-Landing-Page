"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Eye, Target, Zap, Globe } from "lucide-react";

const insights = [
  {
    icon: TrendingUp,
    text: "Engagement increased 45% after implementing AI recommendations",
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    icon: Eye,
    text: "AI detected 3 emerging trends in customer behavior patterns",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: Target,
    text: "Sentiment analysis reveals 89% positive brand perception",
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    icon: Zap,
    text: "Real-time insights processed from 50K+ social conversations",
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  },
  {
    icon: Globe,
    text: "Multi-language analysis covering 20+ global markets",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50"
  },
  {
    icon: TrendingDown,
    text: "AI predicted market shift 72 hours before competitors",
    color: "text-red-600",
    bgColor: "bg-red-50"
  }
];

export function SmartInsightsTicker() {
  return (
    <div className="w-full bg-gradient-to-r from-gray-50 via-white to-gray-50 border border-gray-200 rounded-2xl p-4 overflow-hidden shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-6 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg flex items-center justify-center"
          >
            <Zap className="w-3 h-3 text-white" />
          </motion.div>
          <span className="font-medium text-gray-900">AI Insights Stream</span>
        </div>
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full"
        >
          LIVE
        </motion.div>
      </div>

      {/* Scrolling insights */}
      <div className="relative overflow-hidden h-16">
        <motion.div
          animate={{ x: [0, -100 * insights.length + "rem"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="flex gap-4 absolute"
          style={{ width: `${insights.length * 100}rem` }}
        >
          {[...insights, ...insights].map((insight, index) => {
            const IconComponent = insight.icon;
            return (
              <motion.div
                key={index}
                className={`flex items-center gap-3 ${insight.bgColor} px-4 py-2 rounded-xl border border-gray-200 min-w-96 shadow-sm`}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className={`p-2 rounded-lg bg-white shadow-sm`}
                >
                  <IconComponent className={`w-4 h-4 ${insight.color}`} />
                </motion.div>
                <span className="text-sm text-gray-800 font-medium">
                  {insight.text}
                </span>
                <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  className="w-2 h-2 bg-blue-400 rounded-full ml-auto"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom metrics */}
      <div className="mt-4 flex justify-between items-center text-xs text-gray-500">
        <div className="flex items-center gap-4">
          <span>📊 50.2K data points</span>
          <span>🌍 20+ languages</span>
          <span>⚡ Real-time processing</span>
        </div>
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="flex items-center gap-1"
        >
          <div className="w-2 h-2 bg-green-400 rounded-full" />
          <span className="text-green-600">AI Active</span>
        </motion.div>
      </div>
    </div>
  );
}