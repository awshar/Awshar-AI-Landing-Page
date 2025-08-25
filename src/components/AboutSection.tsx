"use client";

import { motion } from "framer-motion";
import { Award, Brain, Users2, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { FloatingParticles } from "./FloatingParticles";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Revolutionizing Digital Intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Awshar AI, we combine cutting-edge artificial intelligence with
            deep industry expertise to deliver unparalleled social listening
            and geo-fencing solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We empower businesses to understand the digital conversation
              around their brand, competitors, and industry. Our AI-powered
              platform transforms vast amounts of unstructured data into
              actionable insights that drive strategic decision-making.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From startups looking to understand their market position to
              enterprise organizations managing complex campaigns, Awshar AI
              provides the intelligence you need to stay ahead of the curve.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-red-50 to-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    AI Expertise
                  </h4>
                  <p className="text-sm text-gray-600">
                    Advanced machine learning algorithms
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users2 className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Expert Team
                  </h4>
                  <p className="text-sm text-gray-600">
                    Digital marketing professionals
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Real-Time
                  </h4>
                  <p className="text-sm text-gray-600">
                    Instant insights and monitoring
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Recognized
                  </h4>
                  <p className="text-sm text-gray-600">
                    Industry-leading solutions
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>



        {/* Building the Future Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-600 to-black rounded-2xl p-8 lg:p-12 text-white text-center relative overflow-hidden mb-8"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&h=600&fit=crop')] bg-cover bg-center opacity-10"></div>
          <FloatingParticles count={15} color="bg-white" size={2} />
          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Building the Future of Social Intelligence
            </h3>
            <p className="text-red-100 text-lg max-w-3xl mx-auto mb-8">
              Our cutting-edge platform combines advanced AI with multilingual capabilities 
              to deliver unprecedented insights across diverse markets and communities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
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
                    delay: 0.1
                  }}
                >
                  50+
                </motion.div>
                <div className="text-red-200 group-hover:text-white transition-colors duration-300">
                  Data Sources
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
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
                    delay: 0.2
                  }}
                >
                  20+
                </motion.div>
                <div className="text-red-200 group-hover:text-white transition-colors duration-300">
                  Indian Languages
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
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
                    delay: 0.3
                  }}
                >
                  &lt;1s
                </motion.div>
                <div className="text-red-200 group-hover:text-white transition-colors duration-300">
                  Real-time Analysis
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
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
                    delay: 0.4
                  }}
                >
                  AI
                </motion.div>
                <div className="text-red-200 group-hover:text-white transition-colors duration-300">
                  Powered
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Recognition Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-2xl p-8 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop')] bg-cover bg-center opacity-10"></div>
          <FloatingParticles count={10} color="bg-red-400" size={3} />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-gray-300 mb-6">
              Our team includes AI experts, digital marketing professionals, and
              industry veterans who have worked with top-tier organizations
              globally.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-sm text-gray-400">
              <span>✓ Former Google AI Researchers</span>
              <span>✓ Ex-Facebook Data Scientists</span>
              <span>✓ Marketing Industry Veterans</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}