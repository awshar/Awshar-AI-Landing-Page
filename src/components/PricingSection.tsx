"use client";

import { motion } from "framer-motion";
import { Check, Star, Zap, Building2, Gift } from "lucide-react";
import { Button } from "./ui/button";

const plans = [
  {
    name: "Early Bird",
    price: "Hold Tight!",
    period: "Beta Access",
    description: "Limited time beta access for early adopters",
    icon: Gift,
    color: "text-green-600",
    bgColor: "bg-green-50",
    buttonStyle: "bg-green-600 hover:bg-green-700 text-white",
    features: [
      "Full platform access during beta",
      "Up to 5,000 social mentions",
      "Basic sentiment analysis",
      "3 brand monitoring keywords",
      "Weekly email reports",
      "Community support",
      "Shape our product roadmap",
      "Early access to new features",
      "Available in 20+ Indian languages",
    ],
    limitations: [],
    popular: true,
  },
  {
    name: "Startup",
    price: "Coming Soon!",
    period: "Startup Special",
    description: "Special pricing for startups and small teams",
    icon: Zap,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    buttonStyle: "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
    features: [
      "Up to 15,000 social mentions",
      "Advanced sentiment analysis",
      "10 brand monitoring keywords",
      "Real-time alerts",
      "5 user accounts",
      "Basic geo-fencing",
      "Email & chat support",
      "Priority customer success",
      "Available in 20+ Indian languages",
    ],
    limitations: [],
    popular: false,
    comingSoon: true,
  },
  {
    name: "Enterprises",
    price: "Stay Tuned!",
    period: "Enterprise Scale",
    description: "For growing businesses ready to scale",
    icon: Building2,
    color: "text-gray-700",
    bgColor: "bg-gray-50",
    buttonStyle: "border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white",
    features: [
      "Up to 50,000 social mentions",
      "AI-powered insights",
      "25 brand monitoring keywords",
      "Real-time dashboard",
      "15 user accounts",
      "Advanced geo-fencing",
      "Custom reports",
      "Priority support",
      "API access (coming soon)",
      "Available in 20+ Indian languages",
    ],
    limitations: [],
    popular: false,
    comingSoon: true,
  },
];

const betaFeatures = [
  "Help shape our product development",
  "Exclusive access to beta features",
  "Direct line to our founding team",
  "Community of early adopters",
  "First to know about pricing",
  "Beta testing feedback rewards",
];

export function PricingSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-red-600">Something Amazing</span> is Coming
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're putting the finishing touches on our pricing plans. 
            Join our beta program now and be the first to know when we launch!
          </p>
          <div className="inline-flex items-center bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
            <Check className="w-4 h-4 mr-2" />
            Beta access available now • Pricing reveal coming soon!
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl border-2 p-8 ${
                  plan.popular
                    ? "border-green-600 shadow-xl scale-105"
                    : "border-gray-200 shadow-lg"
                } hover:shadow-xl transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Beta Access
                    </div>
                  </div>
                )}

                {plan.comingSoon && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gray-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Coming Soon
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-8">
                  <div
                    className={`w-16 h-16 ${plan.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <IconComponent className={`w-8 h-8 ${plan.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-gray-900 mb-1">
                      {plan.price}
                    </span>
                    <span className="text-red-600 text-sm font-medium">{plan.period}</span>
                  </div>

                </div>

                {/* Features */}
                <div className="mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full py-3 ${plan.buttonStyle} transition-all duration-200 ${
                    plan.comingSoon ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={plan.comingSoon ? undefined : scrollToContact}
                  disabled={plan.comingSoon}
                >
                  {plan.comingSoon 
                    ? "Coming Soon" 
                    : plan.name === "Early Bird" 
                      ? "Join Beta Waitlist" 
                      : "Get Notified"
                  }
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Beta Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Beta Program Benefits
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {betaFeatures.map((feature, index) => (
              <div key={index} className="flex items-center">
                <Star className="w-5 h-5 text-yellow-500 mr-3" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Startup CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gray-900 rounded-2xl p-8 lg:p-12 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Building Something Amazing?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We're a startup too! If you're building something exciting and think 
            Awshar AI could help, let's talk. We love supporting fellow entrepreneurs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToContact}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3"
            >
              Join Beta Program
            </Button>
            <Button
              onClick={scrollToContact}
              className="border-2 border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900 px-8 py-3"
            >
              Partner With Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}