"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, BarChart3, Target, Zap, Globe } from "lucide-react";

const useCases = [
  {
    title: "Marketing Teams",
    description: "Track campaign performance and optimize strategies in real-time",
    type: "illustration"
  },
  {
    title: "Enterprise Leaders", 
    description: "Make data-driven decisions with comprehensive market intelligence",
    type: "illustration"
  }
];

export function UseCasesPhotos() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-16 mb-16"
    >
      <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
        See Our Features in Action
      </h3>
      <div className="grid md:grid-cols-2 gap-8">
        {useCases.map((useCase, index) => (
          <motion.div 
            key={index} 
            className="relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-64 bg-gradient-to-br from-red-50 via-white to-gray-50 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden">
              {/* Custom Illustration based on use case */}
              {index === 0 ? (
                // Marketing Teams Illustration
                <div className="relative w-full h-full flex items-center justify-center p-8">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-8 h-8 bg-red-500 rounded-full"></div>
                    <div className="absolute top-12 right-8 w-4 h-4 bg-blue-500 rounded-full"></div>
                    <div className="absolute bottom-8 left-8 w-6 h-6 bg-green-500 rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-5 h-5 bg-purple-500 rounded-full"></div>
                  </div>
                  
                  {/* Central illustration */}
                  <div className="relative z-10 flex flex-col items-center">
                    {/* Chart/Analytics representation */}
                    <div className="relative mb-6">
                      <div className="w-24 h-16 bg-white rounded-lg shadow-md p-3 border border-gray-200">
                        <div className="flex items-end justify-between h-full space-x-1">
                          <div className="w-2 bg-red-500 rounded-t" style={{ height: '40%' }}></div>
                          <div className="w-2 bg-blue-500 rounded-t" style={{ height: '70%' }}></div>
                          <div className="w-2 bg-green-500 rounded-t" style={{ height: '90%' }}></div>
                          <div className="w-2 bg-purple-500 rounded-t" style={{ height: '60%' }}></div>
                          <div className="w-2 bg-orange-500 rounded-t" style={{ height: '80%' }}></div>
                        </div>
                      </div>
                      <TrendingUp className="absolute -top-2 -right-2 w-6 h-6 text-green-500 bg-white rounded-full p-1 shadow-sm" />
                    </div>
                    
                    {/* Team icons */}
                    <div className="flex space-x-4 mb-4">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
                    {/* Connection lines */}
                    <div className="flex space-x-2">
                      <div className="w-8 h-1 bg-red-300 rounded"></div>
                      <div className="w-6 h-1 bg-blue-300 rounded"></div>
                      <div className="w-10 h-1 bg-green-300 rounded"></div>
                    </div>
                  </div>
                </div>
              ) : (
                // Enterprise Leaders Illustration  
                <div className="relative w-full h-full flex items-center justify-center p-8">
                  {/* Background grid pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="grid grid-cols-8 grid-rows-6 gap-4 h-full">
                      {Array.from({ length: 48 }).map((_, i) => (
                        <div key={i} className="w-full h-full bg-gray-400 rounded-sm"></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Central illustration */}
                  <div className="relative z-10 flex flex-col items-center">
                    {/* Dashboard/Command center */}
                    <div className="relative mb-6">
                      <div className="w-32 h-20 bg-white rounded-lg shadow-lg border border-gray-200 p-3">
                        {/* Top metrics row */}
                        <div className="flex justify-between mb-2">
                          <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <div className="w-8 h-1 bg-gray-200 rounded"></div>
                          </div>
                          <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <div className="w-6 h-1 bg-gray-200 rounded"></div>
                          </div>
                        </div>
                        
                        {/* Chart area */}
                        <div className="flex items-end justify-between h-8 space-x-1">
                          <div className="w-1 bg-red-400 rounded-t" style={{ height: '50%' }}></div>
                          <div className="w-1 bg-blue-400 rounded-t" style={{ height: '75%' }}></div>
                          <div className="w-1 bg-green-400 rounded-t" style={{ height: '100%' }}></div>
                          <div className="w-1 bg-yellow-400 rounded-t" style={{ height: '60%' }}></div>
                          <div className="w-1 bg-purple-400 rounded-t" style={{ height: '85%' }}></div>
                          <div className="w-1 bg-pink-400 rounded-t" style={{ height: '40%' }}></div>
                          <div className="w-1 bg-indigo-400 rounded-t" style={{ height: '70%' }}></div>
                        </div>
                      </div>
                      
                      {/* Floating metrics */}
                      <div className="absolute -top-3 -right-3 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <Zap className="w-3 h-3 text-white" />
                      </div>
                      <div className="absolute -bottom-2 -left-3 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <Globe className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    
                    {/* Strategy/Decision elements */}
                    <div className="flex items-center space-x-6">
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mb-1">
                          <TrendingUp className="w-3 h-3 text-white" />
                        </div>
                        <div className="w-8 h-1 bg-red-300 rounded"></div>
                      </div>
                      
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                        <div className="w-3 h-3 bg-white rounded-sm"></div>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mb-1">
                          <Target className="w-3 h-3 text-white" />
                        </div>
                        <div className="w-8 h-1 bg-green-300 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Content overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-xl">
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h4 className="text-xl font-semibold mb-2">{useCase.title}</h4>
                <p className="text-gray-200">{useCase.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}