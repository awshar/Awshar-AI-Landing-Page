"use client";

import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { LiveDashboardDemoSection } from "./components/LiveDashboardDemoSection";
import { AboutSection } from "./components/AboutSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { IndustriesSection } from "./components/IndustriesSection";
import { GeofencingSection } from "./components/GeofencingSection";
import { VideoSection } from "./components/VideoSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { PricingSection } from "./components/PricingSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

// AI Interactive Components
import { AIProcessingIndicator } from "./components/AIProcessingIndicator";
import { NeuralNetworkMini } from "./components/NeuralNetworkMini";
import { AIChatPreview } from "./components/AIChatPreview";
import { SmartInsightsTicker } from "./components/SmartInsightsTicker";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />

        {/* AI-Powered Intelligence in Action - Combined Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                AI-Powered Intelligence in Action
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience our advanced AI systems working in
                real-time to process, analyze, and deliver
                actionable insights from your data.
              </p>
            </div>

            {/* Three AI Components in a Single Row */}
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-8 items-start justify-items-center">
              {/* AI Processing Indicator */}
              <div className="w-full flex justify-center">
                <AIProcessingIndicator />
              </div>

              {/* Neural Network Mini */}
              <div className="w-full flex justify-center">
                <NeuralNetworkMini />
              </div>

              {/* AI Chat Preview */}
              <div className="w-full flex justify-center xl:col-span-1 lg:col-span-2 xl:col-start-auto lg:col-start-1">
                <AIChatPreview />
              </div>
            </div>
          </div>
        </section>

        <LiveDashboardDemoSection />

        {/* Smart Insights Ticker - between dashboard and about */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SmartInsightsTicker />
          </div>
        </section>

        <AboutSection />
        <FeaturesSection />
        <IndustriesSection />
        <VideoSection />
        <HowItWorksSection />
        <GeofencingSection />
        <PricingSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "white",
            border: "1px solid #e5e7eb",
            color: "#374151",
          },
        }}
      />
    </div>
  );
}