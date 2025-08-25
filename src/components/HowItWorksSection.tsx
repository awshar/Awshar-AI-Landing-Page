"use client";

import { motion } from "framer-motion";
import { Database, Cog, TrendingUp, Rocket } from "lucide-react";
import { DataStreamAnimation } from "./DataStreamAnimation";


const steps = [
  {
    icon: Database,
    title: "Data Collection",
    description:
      "Our AI continuously gathers data from social media, news sources, and your field operations in real-time.",
    details: [
      "50+ social platforms monitored",
      "News and blog coverage tracking",
      "Field team geo-location data",
      "Competitor activity monitoring",
    ],
  },
  {
    icon: Cog,
    title: "AI Processing",
    description:
      "Advanced machine learning algorithms analyze sentiment, extract insights, and identify patterns from massive datasets.",
    details: [
      "Natural language processing",
      "Sentiment analysis algorithms",
      "Pattern recognition",
      "Anomaly detection",
      "20+ Indian languages supported",
    ],
  },
  {
    icon: TrendingUp,
    title: "Insights Generation",
    description:
      "Transform raw data into actionable insights with comprehensive reports, alerts, and recommendations.",
    details: [
      "Real-time dashboards",
      "Automated alerts",
      "Trend analysis",
      "Competitive intelligence",
    ],
  },
  {
    icon: Rocket,
    title: "Strategic Action",
    description:
      "Use data-driven insights to optimize campaigns, improve brand perception, and make informed business decisions.",
    details: [
      "Campaign optimization",
      "Brand reputation management",
      "Market positioning",
      "ROI improvement",
    ],
  },
];

export function HowItWorksSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How <span className="text-red-600">Awshar AI</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our sophisticated AI pipeline transforms raw data into actionable
            business intelligence through a seamless four-step process.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mt-8"></div>
        </motion.div>

        {/* Desktop Flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Fixed Connection Line - properly positioned */}
            <div className="absolute top-[4rem] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent z-0"></div>
            
            {/* Step Connection Dots */}
            <div className="absolute top-[4rem] left-[10%] right-[10%] flex justify-between z-10">
              {steps.map((_, index) => (
                <div key={index} className="w-4 h-4 bg-red-600 rounded-full transform -translate-y-1/2"></div>
              ))}
            </div>

            <div className="grid grid-cols-4 gap-8 relative z-20">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    {/* Step Number Circle */}
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-16 h-16 bg-white border-4 border-red-600 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-red-600 font-bold text-lg">
                          {index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Step Illustration */}
                    <div className="relative mb-6">
                      <div className="w-full h-48 rounded-xl shadow-lg overflow-hidden">
                        {index === 0 && (
                          // Data Collection Illustration
                          <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative">
                            <div className="grid grid-cols-3 gap-4 p-6">
                              {/* Social Media Icons */}
                              <div className="space-y-2">
                                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                                  <div className="w-4 h-4 bg-white rounded"></div>
                                </div>
                                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                                  <div className="w-4 h-4 bg-white rounded-full"></div>
                                </div>
                                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                                  <div className="w-4 h-4 bg-white rounded"></div>
                                </div>
                              </div>
                              {/* Data Streams */}
                              <div className="flex flex-col items-center justify-center">
                                <div className="flex space-x-1 mb-2">
                                  <div className="w-1 h-6 bg-blue-400 rounded animate-pulse"></div>
                                  <div className="w-1 h-8 bg-purple-400 rounded animate-pulse" style={{animationDelay: '0.2s'}}></div>
                                  <div className="w-1 h-4 bg-green-400 rounded animate-pulse" style={{animationDelay: '0.4s'}}></div>
                                </div>
                                <div className="text-xs text-gray-600">Streaming</div>
                              </div>
                              {/* Central Hub */}
                              <div className="flex items-center justify-center">
                                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center relative">
                                  <Database className="w-6 h-6 text-white" />
                                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {index === 1 && (
                          // AI Processing Illustration
                          <div className="w-full h-full bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center relative">
                            <div className="relative">
                              {/* Central Brain/Processor */}
                              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center relative">
                                <Cog className="w-8 h-8 text-white animate-spin" style={{animationDuration: '3s'}} />
                              </div>
                              {/* Neural Network Connections */}
                              <div className="absolute -inset-8">
                                {[...Array(6)].map((_, i) => (
                                  <div
                                    key={i}
                                    className="absolute w-2 h-2 bg-purple-400 rounded-full animate-pulse"
                                    style={{
                                      top: `${Math.sin(i * Math.PI / 3) * 40 + 50}%`,
                                      left: `${Math.cos(i * Math.PI / 3) * 40 + 50}%`,
                                      animationDelay: `${i * 0.2}s`
                                    }}
                                  ></div>
                                ))}
                              </div>
                              {/* Processing Text */}
                              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                                <div className="text-xs text-purple-600 font-medium">AI Processing</div>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {index === 2 && (
                          // Insights Generation Illustration
                          <div className="w-full h-full bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center relative">
                            <div className="relative">
                              {/* Dashboard Grid */}
                              <div className="grid grid-cols-2 gap-2 p-4 bg-white rounded-lg shadow-sm border">
                                <div className="h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded flex items-center justify-center">
                                  <TrendingUp className="w-4 h-4 text-white" />
                                </div>
                                <div className="h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded flex items-center justify-center">
                                  <div className="w-3 h-3 bg-white rounded-full"></div>
                                </div>
                                <div className="col-span-2 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded flex items-center px-2">
                                  <div className="flex space-x-1">
                                    <div className="w-1 h-3 bg-white rounded"></div>
                                    <div className="w-1 h-2 bg-white rounded"></div>
                                    <div className="w-1 h-4 bg-white rounded"></div>
                                  </div>
                                </div>
                              </div>
                              {/* Floating Insights */}
                              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
                              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-red-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                            </div>
                          </div>
                        )}
                        
                        {index === 3 && (
                          // Strategic Action Illustration
                          <div className="w-full h-full bg-gradient-to-br from-orange-50 to-red-100 flex items-center justify-center relative">
                            <div className="relative">
                              {/* Rocket Launch */}
                              <div className="flex flex-col items-center">
                                <div className="w-12 h-16 bg-gradient-to-t from-red-600 to-orange-500 rounded-t-full rounded-b-sm relative">
                                  <Rocket className="w-6 h-6 text-white absolute top-2 left-1/2 transform -translate-x-1/2" />
                                  {/* Flame Trail */}
                                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                                    <div className="w-2 h-3 bg-yellow-400 rounded-b-full animate-pulse"></div>
                                  </div>
                                </div>
                                {/* Action Items */}
                                <div className="mt-4 flex space-x-2">
                                  <div className="w-6 h-2 bg-green-500 rounded animate-pulse"></div>
                                  <div className="w-4 h-2 bg-blue-500 rounded animate-pulse" style={{animationDelay: '0.3s'}}></div>
                                  <div className="w-5 h-2 bg-purple-500 rounded animate-pulse" style={{animationDelay: '0.6s'}}></div>
                                </div>
                              </div>
                              {/* Growth Arrow */}
                              <div className="absolute -top-4 -right-4 text-green-600">
                                <TrendingUp className="w-6 h-6 animate-pulse" />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{step.description}</p>

                    {/* Details */}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <ul className="space-y-2 text-sm text-gray-600">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Flow */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-red-600 to-gray-300 z-0"></div>
                )}

                <div className="flex items-start space-x-6 relative z-10">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                      <span className="text-white font-bold text-lg">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Step Illustration */}
                    <div className="relative mb-4">
                      <div className="w-full h-40 rounded-xl shadow-lg overflow-hidden">
                        {index === 0 && (
                          // Data Collection Illustration
                          <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative">
                            <div className="grid grid-cols-3 gap-3 p-4">
                              {/* Social Media Icons */}
                              <div className="space-y-2">
                                <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center">
                                  <div className="w-3 h-3 bg-white rounded"></div>
                                </div>
                                <div className="w-6 h-6 bg-purple-500 rounded-lg flex items-center justify-center">
                                  <div className="w-3 h-3 bg-white rounded-full"></div>
                                </div>
                                <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center">
                                  <div className="w-3 h-3 bg-white rounded"></div>
                                </div>
                              </div>
                              {/* Data Streams */}
                              <div className="flex flex-col items-center justify-center">
                                <div className="flex space-x-1 mb-1">
                                  <div className="w-0.5 h-4 bg-blue-400 rounded animate-pulse"></div>
                                  <div className="w-0.5 h-5 bg-purple-400 rounded animate-pulse" style={{animationDelay: '0.2s'}}></div>
                                  <div className="w-0.5 h-3 bg-green-400 rounded animate-pulse" style={{animationDelay: '0.4s'}}></div>
                                </div>
                                <div className="text-xs text-gray-600">Data</div>
                              </div>
                              {/* Central Hub */}
                              <div className="flex items-center justify-center">
                                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center relative">
                                  <Database className="w-4 h-4 text-white" />
                                  <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {index === 1 && (
                          // AI Processing Illustration
                          <div className="w-full h-full bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center relative">
                            <div className="relative">
                              {/* Central Brain/Processor */}
                              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center relative">
                                <Cog className="w-6 h-6 text-white animate-spin" style={{animationDuration: '3s'}} />
                              </div>
                              {/* Neural Network Connections */}
                              <div className="absolute -inset-6">
                                {[...Array(6)].map((_, i) => (
                                  <div
                                    key={i}
                                    className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"
                                    style={{
                                      top: `${Math.sin(i * Math.PI / 3) * 30 + 50}%`,
                                      left: `${Math.cos(i * Math.PI / 3) * 30 + 50}%`,
                                      animationDelay: `${i * 0.2}s`
                                    }}
                                  ></div>
                                ))}
                              </div>
                              {/* Processing Text */}
                              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                                <div className="text-xs text-purple-600 font-medium">Processing</div>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {index === 2 && (
                          // Insights Generation Illustration
                          <div className="w-full h-full bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center relative">
                            <div className="relative">
                              {/* Dashboard Grid */}
                              <div className="grid grid-cols-2 gap-1.5 p-3 bg-white rounded-lg shadow-sm border">
                                <div className="h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded flex items-center justify-center">
                                  <TrendingUp className="w-3 h-3 text-white" />
                                </div>
                                <div className="h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded flex items-center justify-center">
                                  <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                                <div className="col-span-2 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded flex items-center px-1">
                                  <div className="flex space-x-0.5">
                                    <div className="w-0.5 h-2 bg-white rounded"></div>
                                    <div className="w-0.5 h-1.5 bg-white rounded"></div>
                                    <div className="w-0.5 h-3 bg-white rounded"></div>
                                  </div>
                                </div>
                              </div>
                              {/* Floating Insights */}
                              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
                              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                            </div>
                          </div>
                        )}
                        
                        {index === 3 && (
                          // Strategic Action Illustration
                          <div className="w-full h-full bg-gradient-to-br from-orange-50 to-red-100 flex items-center justify-center relative">
                            <div className="relative">
                              {/* Rocket Launch */}
                              <div className="flex flex-col items-center">
                                <div className="w-8 h-12 bg-gradient-to-t from-red-600 to-orange-500 rounded-t-full rounded-b-sm relative">
                                  <Rocket className="w-4 h-4 text-white absolute top-1 left-1/2 transform -translate-x-1/2" />
                                  {/* Flame Trail */}
                                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                                    <div className="w-1.5 h-2 bg-yellow-400 rounded-b-full animate-pulse"></div>
                                  </div>
                                </div>
                                {/* Action Items */}
                                <div className="mt-2 flex space-x-1">
                                  <div className="w-4 h-1.5 bg-green-500 rounded animate-pulse"></div>
                                  <div className="w-3 h-1.5 bg-blue-500 rounded animate-pulse" style={{animationDelay: '0.3s'}}></div>
                                  <div className="w-3.5 h-1.5 bg-purple-500 rounded animate-pulse" style={{animationDelay: '0.6s'}}></div>
                                </div>
                              </div>
                              {/* Growth Arrow */}
                              <div className="absolute -top-2 -right-2 text-green-600">
                                <TrendingUp className="w-4 h-4 animate-pulse" />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <ul className="space-y-2 text-sm text-gray-600">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-900 via-red-900 to-gray-900 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&h=600&fit=crop')] bg-cover bg-center opacity-10"></div>
            <DataStreamAnimation />
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to Experience This Powerful AI Process?
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses already using Awshar AI to transform their data
                into actionable insights through our intelligent 4-step process.
              </p>
              <button 
                onClick={() => scrollToSection("contact")}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg"
              >
                Join Beta Waitlist
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}