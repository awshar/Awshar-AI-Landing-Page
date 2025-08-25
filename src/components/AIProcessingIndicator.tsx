"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Brain, Zap, Eye, MessageSquare, BarChart3, Globe } from "lucide-react";

interface AITask {
  id: string;
  name: string;
  status: "processing" | "completed" | "pending";
  icon: React.ComponentType<any>;
  progress?: number;
}

const aiTasks: AITask[] = [
  { id: "sentiment", name: "Analyzing sentiment", icon: MessageSquare, status: "processing" },
  { id: "insights", name: "Generating insights", icon: Eye, status: "pending" },
  { id: "trends", name: "Detecting trends", icon: BarChart3, status: "pending" },
  { id: "language", name: "Processing 20+ languages", icon: Globe, status: "pending" },
  { id: "patterns", name: "Finding patterns", icon: Brain, status: "pending" },
  { id: "recommendations", name: "Creating recommendations", icon: Zap, status: "pending" },
];

export function AIProcessingIndicator() {
  const [currentTasks, setCurrentTasks] = useState<AITask[]>(aiTasks);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTasks(prev => {
        const newTasks = [...prev];
        const processingIndex = newTasks.findIndex(task => task.status === "processing");
        
        if (processingIndex !== -1) {
          // Complete current processing task
          newTasks[processingIndex].status = "completed";
          
          // Start next pending task
          const nextPendingIndex = newTasks.findIndex(task => task.status === "pending");
          if (nextPendingIndex !== -1) {
            newTasks[nextPendingIndex].status = "processing";
          } else {
            // Reset all tasks to pending and start over
            newTasks.forEach((task, index) => {
              task.status = index === 0 ? "processing" : "pending";
            });
          }
        }
        
        return newTasks;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 p-4 shadow-lg w-full max-w-sm"
    >
      <div className="flex items-center gap-2 mb-3">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-5 h-5 rounded-full bg-gradient-to-r from-red-500 to-purple-600 flex items-center justify-center"
        >
          <Brain className="w-3 h-3 text-white" />
        </motion.div>
        <span className="font-medium text-gray-900 text-sm">AI Engine Status</span>
      </div>

      <div className="space-y-2">
        {currentTasks.slice(0, 4).map((task) => {
          const IconComponent = task.icon;
          return (
            <motion.div
              key={task.id}
              layout
              className="flex items-center gap-2 p-2 rounded-lg transition-colors duration-300"
              style={{
                backgroundColor: task.status === "processing" ? "#fef2f2" : 
                                task.status === "completed" ? "#f0fdf4" : "#fafafa"
              }}
            >
              <div className="relative">
                <IconComponent 
                  className={`w-3 h-3 ${
                    task.status === "processing" ? "text-red-600" :
                    task.status === "completed" ? "text-green-600" : "text-gray-400"
                  }`}
                />
                {task.status === "processing" && (
                  <motion.div
                    className="absolute -inset-1 rounded-full border-2 border-red-200"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </div>

              <span className={`text-xs flex-1 ${
                task.status === "processing" ? "text-red-800 font-medium" :
                task.status === "completed" ? "text-green-800" : "text-gray-600"
              }`}>
                {task.name}
              </span>

              {task.status === "processing" && (
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-1 bg-red-500 rounded-full"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ 
                        duration: 0.8, 
                        repeat: Infinity, 
                        delay: i * 0.2 
                      }}
                    />
                  ))}
                </div>
              )}

              {task.status === "completed" && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center text-white text-xs"
                >
                  ✓
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      <motion.div 
        className="mt-3 pt-3 border-t border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>AI Models Active</span>
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 bg-green-400 rounded-full"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  delay: i * 0.3 
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}