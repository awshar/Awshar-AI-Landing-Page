"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import awsharLogo from "figma:asset/3e9a73de8150b5520fda5ae01e2158cbd26b5750.png";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <motion.img
              src={awsharLogo}
              alt="Awshar AI"
              className="h-14 w-auto"
              animate={{
                filter: [
                  "drop-shadow(0 0 0px rgb(220, 38, 38))",
                  "drop-shadow(0 0 8px rgb(220, 38, 38, 0.3))",
                  "drop-shadow(0 0 0px rgb(220, 38, 38))",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-red-600 transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("demo")}
              className="text-gray-700 hover:text-red-600 transition-colors duration-200"
            >
              Demo
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-700 hover:text-red-600 transition-colors duration-200"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("industries")}
              className="text-gray-700 hover:text-red-600 transition-colors duration-200"
            >
              Industries
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-gray-700 hover:text-red-600 transition-colors duration-200"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("geofencing")}
              className="text-gray-700 hover:text-green-600 transition-colors duration-200"
            >
              Geofencing
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-700 hover:text-red-600 transition-colors duration-200"
            >
              Pricing
            </button>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-red-600 hover:bg-red-700 text-white relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">
                  Get Started
                </span>
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() =>
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }
              className="text-gray-700"
            >
              {isMobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-gray-700 hover:text-red-600 w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("demo")}
                className="block px-3 py-2 text-gray-700 hover:text-red-600 w-full text-left"
              >
                Demo
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="block px-3 py-2 text-gray-700 hover:text-red-600 w-full text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("industries")}
                className="block px-3 py-2 text-gray-700 hover:text-red-600 w-full text-left"
              >
                Industries
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="block px-3 py-2 text-gray-700 hover:text-red-600 w-full text-left"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("geofencing")}
                className="block px-3 py-2 text-gray-700 hover:text-green-600 w-full text-left"
              >
                Geofencing
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="block px-3 py-2 text-gray-700 hover:text-red-600 w-full text-left"
              >
                Pricing
              </button>
              <div className="px-3 py-2">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-red-600 hover:bg-red-700 text-white w-full"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}