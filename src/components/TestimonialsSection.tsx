"use client";

import { motion } from "framer-motion";
import { Quote, X, Expand } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogClose, DialogTitle, DialogDescription } from "./ui/dialog";
import manishSisodiaTestimonial from "figma:asset/6c87cfd01a47ba330a46949039a23cc6ce16a89a.png";
import deependerHoodaTestimonial from "figma:asset/5bba9da0788180f580f0ce9b1af7fc9f2a14086a.png";
import swarajShettyTestimonial from "figma:asset/4be642e9f065bac9c5b810488d3b2cc79bccf84b.png";
import jagdeepSinghTestimonial from "figma:asset/52c24cf78beb7869233e3fc2addf20edc880f084.png";

const testimonials = [
  {
    image: manishSisodiaTestimonial,
    alt: "Manish Sisodia Testimonial"
  },
  {
    image: deependerHoodaTestimonial,
    alt: "Deepender Hooda Testimonial"
  },
  {
    image: swarajShettyTestimonial,
    alt: "Swaraj Shetty Testimonial"
  },
  {
    image: jagdeepSinghTestimonial,
    alt: "Jagdeep Singh Kaka Brar Testimonial"
  },
];

export function TestimonialsSection() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(null);

  return (
    <section id="testimonials" className="py-12 bg-gradient-to-br from-gray-50 via-white to-red-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-red-600">Industry Leaders</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Awshar AI has received recognition and support from prominent political leaders and industry experts
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedTestimonial(index)}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] overflow-hidden border border-gray-100">
                {/* Quote Icon */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-red-50 rounded-full flex items-center justify-center z-10 group-hover:bg-red-100 transition-colors duration-300">
                  <Quote className="w-4 h-4 text-red-600" />
                </div>

                {/* Expand Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
                  <Expand className="w-4 h-4 text-white" />
                </div>
                
                {/* Testimonial Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.alt}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Hover overlay with click hint */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-sm font-medium text-gray-900 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Click to read
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 max-w-3xl mx-auto">
            Endorsed by prominent political leaders and industry experts who recognize Awshar AI's potential to transform governance, campaigning, and public engagement through advanced social intelligence
          </p>
        </motion.div>

        {/* Testimonial Modal */}
        <Dialog open={selectedTestimonial !== null} onOpenChange={() => setSelectedTestimonial(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto p-0">
            {/* Hidden accessibility elements */}
            <DialogTitle className="sr-only">
              {selectedTestimonial !== null ? testimonials[selectedTestimonial].alt : "Testimonial"}
            </DialogTitle>
            <DialogDescription className="sr-only">
              View testimonial endorsement for Awshar AI
            </DialogDescription>
            
            <DialogClose className="absolute right-4 top-4 w-10 h-10 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center transition-all duration-300 z-50">
              <X className="w-5 h-5 text-white" />
            </DialogClose>
            
            {selectedTestimonial !== null && (
              <div className="relative">
                <img
                  src={testimonials[selectedTestimonial].image}
                  alt={testimonials[selectedTestimonial].alt}
                  className="w-full h-auto object-contain"
                />
                
                {/* Quote decoration */}
                <div className="absolute top-6 left-6 w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-red-600" />
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}