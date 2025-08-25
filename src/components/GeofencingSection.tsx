"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Map,
  Camera,
  Play,
  Monitor,
  Smartphone,
  Globe,
  Shield,
  Clock,
  Navigation,
  Target,
  Activity,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { FloatingParticles } from "./FloatingParticles";
import { Card } from "./ui/card";
import geofencingImage from "figma:asset/b626cb661810e12fd76b204dc20bace02e248a0f.png";
import interactiveMapsImage from "figma:asset/e1a3a4df7f1f50dbe51164b4c4d439bfb11c45e2.png";
import virtualBoundariesImage from "figma:asset/c57f0f913d34f604e9b63fa55a54105a8df53fd8.png";

const geofencingFeatures = [
  {
    icon: Map,
    title: "Maps",
    description:
      "Help explore the world with detailed custom maps products",
    color: "bg-blue-600",
  },
  {
    icon: Target,
    title: "Geofencing",
    description:
      "A location-based technology to create a virtual boundary around a specific geographic area",
    color: "bg-green-600",
  },
  {
    icon: Camera,
    title: "Geo Tag",
    description:
      "GPS tagged photos, documents stamped with live location, date, and time",
    color: "bg-purple-600",
  },
  {
    icon: Play,
    title: "Playback",
    description:
      "Playback lets you visualize movement, track stop durations, and repeat past routes",
    color: "bg-red-600",
  },
  {
    icon: Monitor,
    title: "Monitor",
    description:
      "Awshar dashboard centralizes tracking, reporting, geo-tagging, and user management",
    color: "bg-orange-600",
  },
];

export function GeofencingSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="geofencing"
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519302959554-a75be0afc82a?w=1200&h=600&fit=crop')] bg-cover bg-center opacity-5"></div>
      <FloatingParticles
        count={30}
        color="bg-green-400"
        size={2}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-900">Awshar AI</span>{" "}
            <span className="text-green-600">geofencing</span>
          </h2>
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Find the right product for the job
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Track and monitor with reliable, global maps using
            our products. No matter what kind of tracking tools
            your business needs, you'll find them all right here
            with Awshar GeoFencing Services.
          </p>
        </motion.div>

        {/* Main Geofencing Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-gray-50/50 border-gray-200 p-8 backdrop-blur-sm">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Features showcase */}
              <div className="grid grid-cols-2 gap-6">
                {/* Interactive Maps */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/80 rounded-xl p-4 border border-gray-200 shadow-sm"
                >
                  <ImageWithFallback
                    src={interactiveMapsImage}
                    alt="Interactive Maps with Location Pins and Routes"
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <div className="flex items-center">
                    <Map className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-sm text-gray-900 font-medium">
                      Interactive Maps
                    </span>
                  </div>
                </motion.div>

                {/* Virtual Boundaries */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/80 rounded-xl p-4 border border-gray-200 shadow-sm"
                >
                  <div className="w-full h-32 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
                    {/* Geometric illustration for virtual boundaries */}
                    <div className="relative">
                      {/* Outer boundary circle */}
                      <div className="w-20 h-20 border-2 border-green-500 rounded-full flex items-center justify-center">
                        {/* Inner boundary circle */}
                        <div className="w-12 h-12 border-2 border-green-600 rounded-full flex items-center justify-center">
                          {/* Center point */}
                          <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                      {/* Corner markers */}
                      <div className="absolute -top-1 -left-1 w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-sm text-gray-900 font-medium">
                      Virtual Boundaries
                    </span>
                  </div>
                </motion.div>

                {/* Mobile App Download Buttons */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="col-span-2 bg-white/80 rounded-xl p-6 border border-gray-200 shadow-sm"
                >
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center mb-3">
                      <Smartphone className="w-6 h-6 text-gray-700 mr-2" />
                      <span className="text-lg font-semibold text-gray-900">
                        Download Awshar App
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Get real-time location tracking on your
                      mobile device
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {/* Google Play Button */}
                    <motion.button
                      onClick={() =>
                        window.open(
                          "https://play.google.com/store/apps/details?id=in.awshar.location_app&pli=1",
                          "_blank",
                        )
                      }
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-md"
                    >
                      {/* Google Play Icon */}
                      <svg
                        className="w-6 h-6 mr-3"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                      <div className="flex flex-col items-start">
                        <span className="text-xs text-gray-300">
                          Get it on
                        </span>
                        <span className="text-sm font-semibold">
                          Google Play
                        </span>
                      </div>
                    </motion.button>

                    {/* Apple App Store Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-md"
                    >
                      {/* Apple Logo Icon */}
                      <svg
                        className="w-6 h-6 mr-3"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                      </svg>
                      <div className="flex flex-col items-start">
                        <span className="text-xs text-gray-300">
                          Download on the
                        </span>
                        <span className="text-sm font-semibold">
                          App Store
                        </span>
                      </div>
                    </motion.button>
                  </div>

                  <div className="text-center mt-4">
                    <span className="text-xs text-gray-500">
                      Coming soon to iOS
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Right side - Reference image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative">
                  <ImageWithFallback
                    src={geofencingImage}
                    alt="Awshar AI Geofencing Overview"
                    className="w-full rounded-xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                      <span className="text-gray-900 text-sm font-medium">
                        Awshar AI
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Card>
        </motion.div>

        {/* Geofencing Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16"
        >
          {geofencingFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="bg-white border-gray-200 p-6 text-center hover:shadow-lg transition-all duration-300 backdrop-blur-sm h-full">
                  <div
                    className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Key Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {[
            {
              icon: Globe,
              label: "Global Coverage",
              value: "200+",
              desc: "Countries Supported",
            },
            {
              icon: Shield,
              label: "Precision Tracking",
              value: "±3m",
              desc: "GPS Accuracy",
            },
            {
              icon: Clock,
              label: "Real-time Updates",
              value: "<1s",
              desc: "Location Refresh",
            },
            {
              icon: Activity,
              label: "Battery Optimized",
              value: "24hrs+",
              desc: "Continuous Tracking",
            },
          ].map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <motion.div
                  className="text-2xl font-bold text-gray-900 mb-1"
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(34,197,94,0)",
                      "0 0 10px rgba(34,197,94,0.5)",
                      "0 0 0px rgba(34,197,94,0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  {metric.value}
                </motion.div>
                <div className="text-gray-600 text-sm">
                  {metric.desc}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200 p-8 backdrop-blur-sm">
            <Navigation className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Location Intelligence?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join businesses worldwide who trust Awshar AI
              geofencing for precise location tracking, smart
              monitoring, and intelligent geo-analytics. Start
              your journey with our beta program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg"
              >
                Start Geofencing Beta
              </motion.button>
              <motion.button
                onClick={() =>
                  window.open(
                    "https://deepsense.awshar.in/",
                    "_blank",
                  )
                }
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Explore DeepSense
              </motion.button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}