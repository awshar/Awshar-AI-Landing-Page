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
  Activity
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { FloatingParticles } from "./FloatingParticles";
import { Card } from "./ui/card";
import geofencingImage from "figma:asset/b626cb661810e12fd76b204dc20bace02e248a0f.png";

const geofencingFeatures = [
  {
    icon: Map,
    title: "Maps",
    description: "Help explore the world with detailed custom maps products",
    color: "bg-blue-600"
  },
  {
    icon: Target,
    title: "Geofencing",
    description: "A location-based technology to create a virtual boundary around a specific geographic area",
    color: "bg-green-600"
  },
  {
    icon: Camera,
    title: "Geo Tag",
    description: "GPS tagged photos, documents stamped with live location, date, and time",
    color: "bg-purple-600"
  },
  {
    icon: Play,
    title: "Playback",
    description: "Playback lets you visualize movement, track stop durations, and repeat past routes",
    color: "bg-red-600"
  },
  {
    icon: Monitor,
    title: "Monitor",
    description: "Awshar dashboard centralizes tracking, reporting, geo-tagging, and user management",
    color: "bg-orange-600"
  }
];

export function GeofencingSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519302959554-a75be0afc82a?w=1200&h=600&fit=crop')] bg-cover bg-center opacity-5"></div>
      <FloatingParticles count={30} color="bg-green-400" size={2} />
      
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
            <span className="text-white">Awshar AI</span>{" "}
            <span className="text-green-400">geofencing</span>
          </h2>
          <h3 className="text-2xl font-semibold text-gray-300 mb-4">
            Find the right product for the job
          </h3>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Track and monitor with reliable, global maps using our products. No matter what kind of tracking tools your 
            business needs, you'll find them all right here with Awshar GeoFencing Services.
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
          <Card className="bg-gray-800/30 border-gray-700 p-8 backdrop-blur-sm">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Features showcase */}
              <div className="grid grid-cols-2 gap-6">
                {/* Maps Interface */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 rounded-xl p-4 border border-gray-600"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=300&h=200&fit=crop"
                    alt="Maps Interface"
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <div className="flex items-center">
                    <Map className="w-4 h-4 text-blue-400 mr-2" />
                    <span className="text-sm text-white font-medium">Interactive Maps</span>
                  </div>
                </motion.div>

                {/* Geofencing Visualization */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 rounded-xl p-4 border border-gray-600"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=300&h=200&fit=crop"
                    alt="Geofencing"
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <div className="flex items-center">
                    <Target className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-sm text-white font-medium">Virtual Boundaries</span>
                  </div>
                </motion.div>

                {/* Mobile App Preview */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="col-span-2 bg-gray-900/50 rounded-xl p-4 border border-gray-600"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <Smartphone className="w-4 h-4 text-purple-400 mr-2" />
                      <span className="text-sm text-white font-medium">Mobile Intelligence</span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="bg-green-500/20 px-2 py-1 rounded text-xs text-green-400">
                        Google Play
                      </div>
                      <div className="bg-blue-500/20 px-2 py-1 rounded text-xs text-blue-400">
                        App Store
                      </div>
                    </div>
                  </div>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=200&fit=crop"
                    alt="Mobile App"
                    className="w-full h-24 object-cover rounded-lg"
                  />
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                      <span className="text-white text-sm font-medium">Awshar AI</span>
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
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="bg-gray-800/30 border-gray-700 p-6 text-center hover:bg-gray-800/50 transition-all duration-300 backdrop-blur-sm h-full">
                  <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
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
            { icon: Globe, label: "Global Coverage", value: "200+", desc: "Countries Supported" },
            { icon: Shield, label: "Precision Tracking", value: "±3m", desc: "GPS Accuracy" },
            { icon: Clock, label: "Real-time Updates", value: "<1s", desc: "Location Refresh" },
            { icon: Activity, label: "Battery Optimized", value: "24hrs+", desc: "Continuous Tracking" }
          ].map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <motion.div 
                  className="text-2xl font-bold text-white mb-1"
                  animate={{
                    textShadow: ["0 0 0px rgba(34,197,94,0)", "0 0 10px rgba(34,197,94,0.5)", "0 0 0px rgba(34,197,94,0)"]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                >
                  {metric.value}
                </motion.div>
                <div className="text-gray-400 text-sm">{metric.desc}</div>
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
          <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border-green-600/30 p-8 backdrop-blur-sm">
            <Navigation className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Location Intelligence?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join businesses worldwide who trust Awshar AI geofencing for precise location tracking, 
              smart monitoring, and intelligent geo-analytics. Start your journey with our beta program.
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
                onClick={() => window.open("https://deepsense.awshar.in/", "_blank")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
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