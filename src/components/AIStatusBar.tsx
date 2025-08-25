"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Brain, Activity, Globe, Zap } from "lucide-react";

interface AIProcess {
  name: string;
  progress: number;
  icon: React.ComponentType<any>;
  color: string;
}

const aiProcesses: AIProcess[] = [
  { name: "Neural Networks", progress: 94, icon: Brain, color: "#8b5cf6" },
  { name: "Real-time Analysis", progress: 87, icon: Activity, color: "#10b981" },
  { name: "Global Processing", progress: 91, icon: Globe, color: "#3b82f6" },
  { name: "AI Models", progress: 96, icon: Zap, color: "#ef4444" }
];

export function AIStatusBar() {
  const [processes, setProcesses] = useState(aiProcesses);

  useEffect(() => {
    const interval = setInterval(() => {
      setProcesses(prev => prev.map(process => ({
        ...process,
        progress: Math.min(100, Math.max(80, process.progress + (Math.random() - 0.5) * 6))
      })));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl p-3 shadow-lg"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="w-5 h-5 bg-gradient-to-r from-red-500 to-purple-600 rounded-full flex items-center justify-center"
          >
            <Brain className="w-3 h-3 text-white" />
          </motion.div>
          <span className="text-sm font-medium text-gray-900">AI Systems</span>
        </div>
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full"
        >
          ACTIVE
        </motion.div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {processes.map((process, index) => {
          const IconComponent = process.icon;
          return (
            <motion.div
              key={process.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2 p-2 rounded-lg bg-gray-50"
            >
              <IconComponent 
                className="w-3 h-3 flex-shrink-0" 
                style={{ color: process.color }}
              />
              <div className="flex-1 min-w-0">
                <div className="text-xs text-gray-600 truncate">{process.name}</div>
                <div className="flex items-center gap-1">
                  <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: process.color }}
                      animate={{ width: `${process.progress}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 font-mono">
                    {Math.round(process.progress)}%
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}