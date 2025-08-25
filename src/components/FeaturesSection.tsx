"use client";

import { motion } from "framer-motion";
import { FeatureCards } from "./FeatureCards";
import { UseCasesPhotos } from "./UseCasesPhotos";
import { FeatureHighlight } from "./FeatureHighlight";

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for{" "}
            <span className="text-red-600">Complete Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of AI-powered tools provides everything you
            need to understand, analyze, and act on digital conversations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FeatureCards />
        </motion.div>
        <UseCasesPhotos />
        <FeatureHighlight />
      </div>
    </section>
  );
}