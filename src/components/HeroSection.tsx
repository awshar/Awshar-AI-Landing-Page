"use client";

import { Button } from "./ui/button";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Zap,
  Brain,
  MapPin,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AIBackgroundAnimation } from "./AIBackgroundAnimation";
import { SparkleEffect } from "./SparkleEffect";
import { useState } from "react";
import supportedByLogos from "figma:asset/3ae94a40a8bc48fc59d5838507ad3cd84925544d.png";

export function HeroSection() {
  const [isSparkleActive, setIsSparkleActive] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-red-50">
      {/* Subtle Background Image - Digital Highway Concept */}
      <div className="absolute inset-0 z-0">
        {/* Left side - Digital/Social Media */}
        <div className="absolute left-0 top-0 w-1/2 h-full overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=960&h=1080&fit=crop"
            alt="Social Media Digital Background"
            className="w-full h-full object-cover opacity-4 blur-lg scale-110"
          />
        </div>

        {/* Right side - Highway/Roads */}
        <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=960&h=1080&fit=crop"
            alt="Highway Infrastructure Background"
            className="w-full h-full object-cover opacity-4 blur-lg scale-110"
          />
        </div>

        {/* Gradient overlay to blend and soften */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/95 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-transparent to-red-50/30 z-10"></div>
      </div>

      {/* AI Background Animation */}
      <AIBackgroundAnimation />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-red-100 rounded-full opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-64 h-64 bg-black opacity-5 rounded-full"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-32 h-32 bg-red-200 rounded-full opacity-10"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              From Hashtags to Highways
              <br />
              <span className="text-red-600">
                Decoded by Awshar Intelligence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              We're building the next generation of social
              listening and geo-fencing technology—designed to
              help businesses understand their customers like
              never before. Not just AI; it's Awshar
              Intelligence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-4 text-lg"
                onClick={() => scrollToSection("contact")}
              >
                Join Beta Waitlist
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-6 py-4 text-lg"
                onClick={() =>
                  window.open(
                    "https://deepsense.awshar.in/",
                    "_blank",
                  )
                }
              >
                <Brain className="w-5 h-5 mr-2" />
                DeepSense
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:border-green-600 hover:text-green-600 px-6 py-4 text-lg"
                onClick={() =>
                  window.open(
                    "https://geofencing.awshar.in",
                    "_blank",
                  )
                }
              >
                <MapPin className="w-5 h-5 mr-2" />
                Geofencing
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12 pt-8 border-t border-gray-200"
            >
              {/* Data Sources */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left min-h-[90px]">
                <div className="flex items-center justify-center lg:justify-start mb-2 h-[32px]">
                  <TrendingUp className="w-6 h-6 text-red-600 mr-2" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  50+
                </div>
                <div className="text-sm text-gray-600">
                  Data Sources
                </div>
              </div>

              {/* Indian Languages */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left min-h-[90px]">
                <div className="flex items-center justify-center lg:justify-start mb-2 h-[32px]">
                  <div className="flex items-center space-x-1 text-red-600 mr-2">
                    <span className="text-xs font-medium border border-red-200 bg-red-50 px-1.5 py-0.5 rounded">
                      हिंदी
                    </span>
                    <span className="text-xs font-medium border border-red-200 bg-red-50 px-1.5 py-0.5 rounded">
                      ਪੰਜਾਬੀ
                    </span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  20+
                </div>
                <div className="text-sm text-gray-600">
                  Indian Languages
                </div>
              </div>

              {/* Early Access */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left min-h-[90px]">
                <div className="flex items-center justify-center lg:justify-start mb-2 h-[32px]">
                  <Users className="w-6 h-6 text-red-600 mr-2" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  Beta
                </div>
                <div className="text-sm text-gray-600">
                  Early Access
                </div>
              </div>

              {/* AI Powered */}
              <div
                className="flex flex-col items-center lg:items-start text-center lg:text-left min-h-[90px] relative"
                onMouseEnter={() => setIsSparkleActive(true)}
                onMouseLeave={() => setIsSparkleActive(false)}
              >
                <div className="flex items-center justify-center lg:justify-start mb-2 h-[32px]">
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Zap className="w-6 h-6 text-red-600 mr-2" />
                  </motion.div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  AI
                </div>
                <div className="text-sm text-gray-600">
                  Powered
                </div>
                <SparkleEffect trigger={isSparkleActive} />
              </div>

              {/* Partners */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left min-h-[90px] sm:col-span-2 lg:col-span-1">
                <div className="flex items-center justify-center lg:justify-start mb-2 h-[32px]">
                  <div className="text-sm font-medium text-red-600">
                    Supported by
                  </div>
                </div>
                <div className="flex items-center justify-center lg:justify-start mb-1 flex-1">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-center overflow-hidden"
                  >
                    <ImageWithFallback
                      src={supportedByLogos}
                      alt="Supported by Google, AWS, and Startup India"
                      className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto object-contain max-w-none scale-110"
                      style={{
                        objectPosition: "center",
                        clipPath: "inset(15% 0 15% 0)",
                      }}
                    />
                  </motion.div>
                </div>
                <div className="text-sm text-gray-600">
                  Partners
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
                alt="AI Technology Background"
                className="w-full h-full object-cover rounded-2xl opacity-10"
              />
            </div>

            <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 transform rotate-1 hover:rotate-0 transition-all duration-500 border border-gray-200 hover:shadow-red-200/50 hover:shadow-2xl overflow-hidden group">
              {/* Glowing border effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900">
                    Social Listening Dashboard
                  </h3>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-600 font-medium">
                    Live
                  </span>
                </div>
              </div>

              {/* Mini Profile Cards */}
              <div className="grid grid-cols-3 gap-3 mb-4 relative z-10">
                <div className="bg-gray-50 rounded-lg p-2 text-center">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                    alt="User"
                    className="w-6 h-6 rounded-full mx-auto mb-1"
                  />
                  <div className="text-xs text-gray-600">
                    +mention
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-2 text-center">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
                    alt="User"
                    className="w-6 h-6 rounded-full mx-auto mb-1"
                  />
                  <div className="text-xs text-gray-600">
                    +review
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-2 text-center">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                    alt="User"
                    className="w-6 h-6 rounded-full mx-auto mb-1"
                  />
                  <div className="text-xs text-gray-600">
                    +share
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg p-4 mb-4 relative z-10">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Sentiment Score
                    </span>
                    <span className="text-sm font-semibold text-green-600">
                      +85%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-green-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 2, delay: 1 }}
                    ></motion.div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-white rounded p-3 text-center shadow-sm">
                      <div className="text-lg font-bold text-red-600">
                        1.2K
                      </div>
                      <div className="text-xs text-gray-500">
                        Mentions
                      </div>
                    </div>
                    <div className="bg-white rounded p-3 text-center shadow-sm">
                      <div className="text-lg font-bold text-blue-600">
                        892
                      </div>
                      <div className="text-xs text-gray-500">
                        Engagement
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trending Topics */}
              <div className="space-y-2 relative z-10">
                <div className="text-xs text-gray-500 mb-2">
                  Trending Topics
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs">
                    #AI
                  </span>
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
                    #Social
                  </span>
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs">
                    #Analytics
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}