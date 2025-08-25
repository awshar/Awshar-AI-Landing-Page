"use client";

import { motion } from "framer-motion";
import { Play, Users, Award, TrendingUp, CheckCircle, X } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import mandeepPhoto from "figma:asset/cc5bb6c4ebe698f3ee97f6c2cf7a913ea55190fe.png";

export function VideoSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // YouTube video ID extracted from the provided URL
  const videoId = "75Xv76zPEZ0";
  const videoTitle = "Awshar AI Demo";
  const videoDuration = "Demo Video";

  const stats = [
    { icon: Users, value: "Beta", label: "Testing Phase" },
    { icon: TrendingUp, value: "50+", label: "Data Sources" },
    { icon: Award, value: "AI-Powered", label: "Technology" },
    { icon: CheckCircle, value: "24/7", label: "Development" },
  ];

  const features = [
    "Real-time social media monitoring",
    "Advanced sentiment analysis",
    "Competitor benchmarking",
    "Geo-location insights",
    "Automated reporting",
    "Custom dashboards",
    "Available in 20+ Indian languages"
  ];

  return (
    <section id="video" className="py-20 bg-gradient-to-br from-gray-50 via-white to-red-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            See <span className="text-red-600">Awshar AI</span> in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch our demo video to see how AI-powered social listening 
            will transform business decision-making.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              {!isVideoPlaying ? (
                <>
                  {/* YouTube Video Thumbnail */}
                  <ImageWithFallback
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt="Awshar AI Demo Video"
                    className="w-full h-80 lg:h-96 object-cover"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      className="w-20 h-20 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
                    >
                      <Play className="w-8 h-8 text-white ml-1" />
                    </button>
                  </div>

                  {/* Video Info */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                      <h3 className="font-semibold mb-1">{videoTitle}</h3>
                      <p className="text-sm text-gray-300">{videoDuration} • Awshar AI Platform Demo</p>
                    </div>
                  </div>
                </>
              ) : (
                /* YouTube Video Player */
                <div className="relative w-full h-80 lg:h-96">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                    title="Awshar AI Demo Video"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                  
                  {/* Close Button */}
                  <button
                    onClick={() => setIsVideoPlaying(false)}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center transition-all duration-300 z-10"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>
              )}
            </div>

            {/* Development Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                <div className="text-2xl font-bold text-red-600 mb-1">V1.0</div>
                <div className="text-sm text-gray-600">In Development</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                <div className="text-2xl font-bold text-red-600 mb-1">Early</div>
                <div className="text-sm text-gray-600">Access Soon</div>
              </div>
            </div>
          </motion.div>

          {/* Features & Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Everything You Need in One Platform
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-4">From Our Founders</h4>
              <blockquote className="text-gray-600 italic mb-4">
                "We're building Awshar AI because businesses deserve better insights. 
                Our vision is to democratize AI-powered social listening for everyone."
              </blockquote>
              <div className="flex items-center">
                <img
                  src={mandeepPhoto}
                  alt="Mandeep Singh Gulia"
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Mandeep Singh Gulia</div>
                  <div className="text-gray-500 text-xs">Co-Founder & CEO</div>
                </div>
              </div>
            </div>

            <Button className="bg-red-600 hover:bg-red-700 text-white w-full py-3">
              Join Beta Waitlist
            </Button>
          </motion.div>
        </div>

        {/* Platform Screenshots Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Early Platform Previews
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* DeepSense Dashboard */}
            <motion.div 
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-48 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden">
                {/* DeepSense Illustration - AI/Sentiment Analysis focused */}
                <div className="relative w-full h-full flex items-center justify-center p-6">
                  {/* Background circuit pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-16 h-1 bg-blue-500 rounded"></div>
                    <div className="absolute top-6 left-6 w-1 h-8 bg-purple-500 rounded"></div>
                    <div className="absolute bottom-8 right-6 w-12 h-1 bg-indigo-500 rounded"></div>
                    <div className="absolute bottom-12 right-8 w-1 h-6 bg-blue-400 rounded"></div>
                    <div className="absolute top-12 right-4 w-8 h-1 bg-purple-400 rounded"></div>
                  </div>
                  
                  {/* Central AI brain representation */}
                  <div className="relative z-10 flex flex-col items-center">
                    {/* AI Neural Network */}
                    <div className="relative mb-4">
                      <div className="w-24 h-20 bg-white rounded-lg shadow-md p-3 border border-blue-200">
                        {/* Neural network nodes */}
                        <div className="grid grid-cols-4 gap-2 h-full">
                          {/* Input layer */}
                          <div className="flex flex-col justify-center space-y-1">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          </div>
                          {/* Hidden layer 1 */}
                          <div className="flex flex-col justify-center space-y-1">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                          </div>
                          {/* Hidden layer 2 */}
                          <div className="flex flex-col justify-center space-y-1">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                          </div>
                          {/* Output layer */}
                          <div className="flex flex-col justify-center space-y-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating sentiment indicators */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">😊</span>
                      </div>
                      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">😕</span>
                      </div>
                    </div>
                    
                    {/* Data flow indicators */}
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                      <div className="text-xs text-gray-600 font-medium">AI Processing</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">DeepSense Dashboard</h4>
                  <p className="text-sm text-gray-300">AI-powered sentiment analysis</p>
                </div>
              </div>
            </motion.div>
            
            {/* GeoFencing Dashboard */}
            <motion.div 
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-48 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden">
                {/* GeoFencing Illustration - Map/Location focused */}
                <div className="relative w-full h-full flex items-center justify-center p-6">
                  {/* Background map grid */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-6 grid-rows-4 gap-1 h-full">
                      {Array.from({ length: 24 }).map((_, i) => (
                        <div key={i} className={`w-full h-full ${Math.random() > 0.7 ? 'bg-green-400' : 'bg-gray-300'} rounded-sm`}></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Central map with geofences */}
                  <div className="relative z-10 flex flex-col items-center">
                    {/* Map container */}
                    <div className="relative mb-4">
                      <div className="w-28 h-20 bg-white rounded-lg shadow-md p-3 border border-green-200">
                        {/* Map with location markers and boundaries */}
                        <div className="relative w-full h-full bg-green-50 rounded">
                          {/* Road/path lines */}
                          <div className="absolute top-2 left-0 right-0 h-0.5 bg-gray-400 rounded"></div>
                          <div className="absolute bottom-2 left-0 right-0 h-0.5 bg-gray-400 rounded"></div>
                          <div className="absolute top-0 bottom-0 left-2 w-0.5 bg-gray-400 rounded"></div>
                          <div className="absolute top-0 bottom-0 right-2 w-0.5 bg-gray-400 rounded"></div>
                          
                          {/* Geofence boundaries (circles) */}
                          <div className="absolute top-1 left-1 w-8 h-8 border-2 border-green-500 rounded-full opacity-60"></div>
                          <div className="absolute bottom-1 right-1 w-6 h-6 border-2 border-blue-500 rounded-full opacity-60"></div>
                          
                          {/* Location pins */}
                          <div className="absolute top-3 left-3 w-2 h-2 bg-red-500 rounded-full"></div>
                          <div className="absolute top-5 right-4 w-2 h-2 bg-blue-500 rounded-full"></div>
                          <div className="absolute bottom-3 left-5 w-2 h-2 bg-green-500 rounded-full"></div>
                          <div className="absolute bottom-4 right-2 w-2 h-2 bg-purple-500 rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Floating location indicators */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Status indicators */}
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-gray-600">Active</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-xs text-gray-600">Tracked</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">GeoFencing Dashboard</h4>
                  <p className="text-sm text-gray-300">Location-based insights</p>
                </div>
              </div>
            </motion.div>
            
            {/* SmartTeam360 Dashboard */}
            <motion.div 
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-48 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden">
                {/* SmartTeam360 Illustration - Team/Productivity focused */}
                <div className="relative w-full h-full flex items-center justify-center p-6">
                  {/* Background productivity pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-4 h-4 bg-orange-500 rounded-full"></div>
                    <div className="absolute top-8 right-6 w-3 h-3 bg-amber-500 rounded-full"></div>
                    <div className="absolute bottom-6 left-6 w-5 h-5 bg-yellow-500 rounded-full"></div>
                    <div className="absolute bottom-8 right-4 w-4 h-4 bg-orange-400 rounded-full"></div>
                    <div className="absolute top-12 left-12 w-3 h-3 bg-amber-400 rounded-full"></div>
                  </div>
                  
                  {/* Central team dashboard */}
                  <div className="relative z-10 flex flex-col items-center">
                    {/* Team dashboard container */}
                    <div className="relative mb-4">
                      <div className="w-28 h-20 bg-white rounded-lg shadow-md p-3 border border-orange-200">
                        {/* Team member indicators */}
                        <div className="grid grid-cols-4 grid-rows-2 gap-1 h-full">
                          {/* Team member status indicators */}
                          <div className="bg-green-500 rounded-full"></div>
                          <div className="bg-yellow-500 rounded-full"></div>
                          <div className="bg-green-500 rounded-full"></div>
                          <div className="bg-red-500 rounded-full"></div>
                          
                          {/* Activity bars */}
                          <div className="bg-green-400 rounded" style={{ height: '80%' }}></div>
                          <div className="bg-yellow-400 rounded" style={{ height: '60%' }}></div>
                          <div className="bg-green-400 rounded" style={{ height: '90%' }}></div>
                          <div className="bg-red-400 rounded" style={{ height: '30%' }}></div>
                        </div>
                      </div>
                      
                      {/* Floating productivity metrics */}
                      <div className="absolute -top-2 -right-2 w-7 h-6 bg-green-500 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">95%</span>
                      </div>
                      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Team performance indicators */}
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-gray-600">Online</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-xs text-gray-600">Busy</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-gray-600">Active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">SmartTeam360™ Dashboard</h4>
                  <p className="text-sm text-gray-300">Team productivity & activity monitoring</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Startup Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Building the Future of Social Intelligence
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-red-600" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}