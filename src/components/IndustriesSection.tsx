"use client";

import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  Pill, 
  Trophy, 
  Tv, 
  Building2, 
  Monitor, 
  Briefcase,
  Megaphone,
  Share2,
  BarChart3,
  Search,
  Users,
  AlertTriangle,
  Bell,
  Shield,
  TrendingUp,
  MapPin,
  Package
} from "lucide-react";

const industries = [
  { name: "Consumer goods", icon: ShoppingCart },
  { name: "Pharma & Healthcare", icon: Pill },
  { name: "Sports", icon: Trophy },
  { name: "Media", icon: Tv },
  { name: "Financial Services", icon: Building2 },
  { name: "Technology", icon: Monitor },
];

const teams = [
  { name: "PR & Comms", icon: Megaphone },
  { name: "Social Marketing", icon: Share2 },
  { name: "Digital Marketing", icon: BarChart3 },
  { name: "Consumer Insights", icon: Search },
  { name: "Customer Experience", icon: Users },
  { name: "Agencies", icon: Briefcase },
];

const useCases = [
  { name: "Reputation Management", icon: Bell },
  { name: "Crisis Management", icon: AlertTriangle },
  { name: "Competitive Intelligence", icon: Shield },
  { name: "Trend Research", icon: TrendingUp },
  { name: "Location Insights", icon: MapPin },
  { name: "Product Insights", icon: Package },
];

interface CategoryProps {
  title: string;
  items: Array<{ name: string; icon: any }>;
  color: string;
  bgColor: string;
}

function Category({ title, items, color, bgColor }: CategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-8">{title}</h3>
      <div className="space-y-4">
        {items.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group cursor-pointer"
            >
              <div className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                <IconComponent className={`w-6 h-6 ${color}`} />
              </div>
              <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
                {item.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export function IndustriesSection() {
  return (
    <section id="industries" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Built for <span className="text-red-600">Every Industry</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Awshar AI adapts to your specific industry needs, team structure, and use cases. 
            Our platform is designed to deliver relevant insights no matter your sector or goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          <Category
            title="For Industries"
            items={industries}
            color="text-blue-600"
            bgColor="bg-blue-50"
          />
          <Category
            title="For Teams"
            items={teams}
            color="text-green-600"
            bgColor="bg-green-50"
          />
          <Category
            title="Use Cases"
            items={useCases}
            color="text-purple-600"
            bgColor="bg-purple-50"
          />
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 max-w-4xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Don't See Your Industry or Use Case?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Our AI-powered platform is highly adaptable. We're constantly expanding our 
              capabilities and would love to discuss how Awshar AI can work for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Discuss Your Needs
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                onClick={() => {
                  const element = document.getElementById("features");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Explore Features
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}