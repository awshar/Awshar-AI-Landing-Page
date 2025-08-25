"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, ChevronDown, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  interestLevel: string;
  message: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    interestLevel: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "info">("info");

  const interestOptions = [
    "Beta Program",
    "Partnership Opportunity",
    "Early Access When We Launch",
    "Investment Interest",
    "Provide Feedback",
    "Job Opportunities",
    "Other"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending your message...");
    setStatusType("info");

    try {
      // Validate required fields
      if (!formData.name.trim() || !formData.email.trim()) {
        throw new Error("Name and email are required");
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error("Please enter a valid email address");
      }

      console.log("Submitting form data to AWS backend:", formData);

      const requestPayload = {
        name: formData.name,
        email: formData.email,
        company: formData.company || '',
        interestLevel: formData.interestLevel || '',
        message: formData.message || '',
        source: 'website_beta_form',
        timestamp: new Date().toISOString(),
      };

      console.log("Request payload:", requestPayload);

      // Send to AWS Lambda backend with CORS headers
      const response = await fetch('https://3d3m62k7cumzquvql3bzo53nr40pjoob.lambda-url.ap-south-1.on.aws/', {
        method: 'POST',
        mode: 'cors', // Explicitly set CORS mode
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': window.location.origin, // Add origin header
        },
        body: JSON.stringify(requestPayload),
      });

      console.log("AWS Backend response status:", response.status);
      console.log("AWS Backend response headers:", Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const errorText = await response.text();
        console.error("AWS Backend error response:", errorText);
        throw new Error(`Server error: ${response.status}`);
      }

      const result = await response.json();
      console.log("AWS Backend success response:", result);

      setStatus("Thank you! We've received your message and will get back to you soon.");
      setStatusType("success");
      
      // Clear form on success
      setFormData({
        name: "",
        email: "",
        company: "",
        interestLevel: "",
        message: "",
      });

    } catch (error) {
      console.error("Form submission error:", error);
      console.error("Error details:", {
        name: error?.name,
        message: error?.message,
        stack: error?.stack,
      });
      
      let errorMessage = "Something went wrong. Please try again.";
      
      if (error instanceof Error) {
        console.log("Error type:", error.constructor.name);
        
        if (error.message.includes('Failed to fetch')) {
          errorMessage = "❌ CORS Error: Unable to connect to server. This is likely a backend configuration issue. Please contact us directly at hello@awshar.in";
          console.error("CORS Error Details:", {
            message: "The AWS Lambda function needs CORS configuration",
            solution: "Add CORS headers to Lambda response",
            currentOrigin: window.location.origin,
            lambdaUrl: "https://3d3m62k7cumzquvql3bzo53nr40pjoob.lambda-url.ap-south-1.on.aws/"
          });
        } else if (error.message.includes('network') || error.message.includes('NetworkError')) {
          errorMessage = "Network error. Please check your connection and try again.";
        } else if (error.message.includes('Server error')) {
          errorMessage = "Server temporarily unavailable. Please contact us directly at hello@awshar.in";
        } else {
          errorMessage = error.message;
        }
      }
      
      setStatus(errorMessage);
      setStatusType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStatusColor = () => {
    switch (statusType) {
      case "success": return "#059669";
      case "error": return "#dc2626";
      default: return "#6b7280";
    }
  };

  const getStatusIcon = () => {
    switch (statusType) {
      case "success": return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "error": return <AlertCircle className="w-4 h-4 text-red-600" />;
      default: return null;
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ready to Shape the <span className="text-red-600">Future?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our beta program and help build the next generation of social intelligence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h3 className="font-bold text-gray-900 mb-6">Join Our Beta Program</h3>
            
            {/* AWS Backend Wired Form */}
            <form id="betaForm" method="post" onSubmit={handleSubmit} className="space-y-4">
              {/* Name and Email - Side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-gray-700 mb-2 text-sm">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 bg-gray-100 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all duration-300 disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block font-medium text-gray-700 mb-2 text-sm">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 bg-gray-100 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all duration-300 disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label className="block font-medium text-gray-700 mb-2 text-sm">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company Name"
                  disabled={isSubmitting}
                  className="w-full px-3 py-2 bg-gray-100 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all duration-300 disabled:opacity-50"
                />
              </div>

              {/* Interest Level */}
              <div>
                <label className="block font-medium text-gray-700 mb-2 text-sm">
                  Interest Level
                </label>
                <div className="relative">
                  <select
                    name="interestLevel"
                    value={formData.interestLevel}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 bg-gray-100 border-0 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all duration-300 appearance-none cursor-pointer disabled:opacity-50"
                  >
                    <option value="" disabled>How can we help?</option>
                    {interestOptions.map((option, index) => (
                      <option key={index} value={option} className="text-gray-900">
                        {option}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block font-medium text-gray-700 mb-2 text-sm">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your business and how you'd like to get involved..."
                  required
                  rows={3}
                  disabled={isSubmitting}
                  className="w-full px-3 py-2 bg-gray-100 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all duration-300 resize-vertical disabled:opacity-50"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? "Sending..." : "Join Beta Waitlist"}
              </motion.button>

              {/* Status Message */}
              {status && (
                <div className="mt-3 p-3 bg-gray-50 rounded-lg border" id="betaStatus">
                  <div className="flex items-center justify-center gap-2">
                    {getStatusIcon()}
                    <p 
                      className="text-sm font-medium text-center"
                      style={{ color: getStatusColor() }}
                    >
                      {status}
                    </p>
                  </div>
                  
                  {/* Show direct contact for CORS errors */}
                  {statusType === "error" && status.includes("CORS Error") && (
                    <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-xs text-blue-700 text-center mb-2">
                        <strong>Alternative Contact Methods:</strong>
                      </p>
                      <div className="flex flex-col sm:flex-row gap-2 justify-center">
                        <a 
                          href="mailto:hello@awshar.in?subject=Beta Program Interest&body=Hi Awshar AI team,%0A%0AI'm interested in joining your beta program.%0A%0AName: [Your Name]%0ACompany: [Your Company]%0AInterest Level: [Your Interest]%0A%0AMessage:%0A[Your Message]"
                          className="text-xs text-blue-600 hover:text-blue-800 underline"
                        >
                          📧 Email Us
                        </a>
                        <a 
                          href="https://wa.me/919319312955?text=Hi%20Awshar%20AI%20team,%20I'm%20interested%20in%20your%20beta%20program"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-600 hover:text-blue-800 underline"
                        >
                          💬 WhatsApp
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </form>


          </motion.div>

          {/* Contact Information & Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Beta Program Benefits */}
            <div className="bg-gradient-to-br from-red-600 to-black rounded-xl p-6 text-white">
              <h4 className="font-bold text-white mb-4">🚀 Beta Program Benefits</h4>
              <ul className="space-y-2 text-red-100 text-sm">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-red-300 rounded-full mr-2"></div>
                  Priority customer support
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-red-300 rounded-full mr-2"></div>
                  Direct influence on product development
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-red-300 rounded-full mr-2"></div>
                  Exclusive community access
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-red-300 rounded-full mr-2"></div>
                  Special launch pricing when we go live
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-red-300 rounded-full mr-2"></div>
                  Early access to 20+ Indian languages
                </li>
              </ul>
            </div>

            {/* What to Expect */}
            <div className="bg-green-50 rounded-xl p-5 border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">
                📈 What to Expect
              </h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Weekly product updates and demos</li>
                <li>• Direct feedback sessions with our team</li>
                <li>• Custom use-case development</li>
                <li>• Integration support and training</li>
              </ul>
            </div>

            {/* Building Together */}
            <div className="bg-purple-50 rounded-xl p-5 border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-2">
                🤝 Building Together
              </h4>
              <p className="text-purple-700 text-sm">
                As a startup, we value every interaction. We personally respond to 
                all messages and love connecting with fellow entrepreneurs and innovators.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}