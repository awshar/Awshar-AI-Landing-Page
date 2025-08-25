"use client";

import { motion } from "framer-motion";
import { LiveDashboardAnimation } from "./LiveDashboardAnimation";
import { Play, TrendingUp, Users, Eye, Zap } from "lucide-react";
import { Button } from "./ui/button";

export function LiveDashboardDemoSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-gray-50 via-white to-red-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div
          className="absolute top-20 -left-20 w-40 h-40 bg-red-100 rounded-full opacity-20"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-32 h-32 bg-gray-200 rounded-full opacity-30"
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Play className="w-4 h-4" />
            <span>Live Demo</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            See Awshar AI in Action
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto mb-8"
          >
            Experience our live dashboard with real-time social listening, sentiment analysis, 
            and actionable insights - exactly what you'll use to grow your business.
          </motion.p>

          {/* Key highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <div className="flex items-center space-x-2 text-gray-700">
              <TrendingUp className="w-5 h-5 text-red-600" />
              <span className="text-sm font-medium">Real-time Analytics</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Users className="w-5 h-5 text-red-600" />
              <span className="text-sm font-medium">Social Listening</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Eye className="w-5 h-5 text-red-600" />
              <span className="text-sm font-medium">Sentiment Analysis</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Zap className="w-5 h-5 text-red-600" />
              <span className="text-sm font-medium">Actionable Insights</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Live Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-200/30 to-transparent rounded-2xl blur-3xl"></div>
          
          {/* Dashboard container */}
          <div className="relative">
            <LiveDashboardAnimation />
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg"
              onClick={() => scrollToSection("contact")}
            >
              Join Beta Waitlist
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600 px-8 py-4 text-lg"
              onClick={() => scrollToSection("features")}
            >
              Explore Features
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}