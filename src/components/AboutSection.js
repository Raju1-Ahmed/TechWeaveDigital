import React from "react";
import { motion } from "framer-motion";
import { FiTarget, FiZap, FiCode } from 'react-icons/fi'; // Importing icons for visual interest

// ---------------------
// 1. Data Array for Scannable Content
// ---------------------
const keyValues = [
  {
    icon: FiTarget,
    title: "Strategic Marketing",
    description: "Data-driven campaigns that target your ideal customer and maximize ROI.",
    color: "text-red-500"
  },
  {
    icon: FiCode,
    title: "Full-Stack Development",
    description: "Robust, scalable, and secure web and mobile applications built with modern frameworks.",
    color: "text-green-500"
  },
  {
    icon: FiZap,
    title: "Cutting-Edge Solutions",
    description: "Future-proof technology integration, from cloud services to AI-powered features.",
    color: "text-blue-500"
  },
];

// ---------------------
// 2. Framer Motion Variants
// ---------------------
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Stagger the feature cards
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const AboutSection = () => {
  return (
    <section id="about-preview" className="py-24 md:py-32 bg-white text-gray-800 relative overflow-hidden">
      {/* Background Gradient Effect - Modern touch */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title and Subtitle Block */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20 max-w-3xl mx-auto"
        >
          <p className="text-sm font-semibold uppercase text-blue-600 mb-2 tracking-widest">
            Our Mission & Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            We Weave **Digital Excellence** into Your Business
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Image and CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-8 sticky top-8" // Made sticky for larger screens to stay in view
          >
            <img
              src="https://i.ibb.co/W47y2C3t/Tech-Weave-Digital.png"
              alt="TechWeave Digital Illustration"
              className="w-full object-contain rounded-3xl shadow-2xl hover:shadow-blue-300/50 transition duration-500 ease-in-out"
            />
            
            {/* Call to Action Button */}
            <a
              href="/about"
              className="w-full text-center px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-full shadow-lg shadow-blue-500/50 
                         hover:bg-blue-700 hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              Discover Our Full Story &rarr;
            </a>
          </motion.div>

          {/* Right: Key Value Propositions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-10"
          >
            <p className="text-lg leading-relaxed text-gray-600 border-l-4 border-blue-500 pl-4 italic">
              **TechWeave Digital** is a forward-thinking IT agency dedicated to
              powering business growth. We combine **creativity** with **data**
              to deliver digital strategies that don't just look good—they **perform**.
            </p>

            {keyValues.map((value, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="flex items-start p-6 bg-gray-50 rounded-2xl shadow-lg border-l-4 border-blue-500/50 hover:bg-white transition duration-300"
              >
                <value.icon className={`w-8 h-8 mr-4 flex-shrink-0 ${value.color}`} />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-base text-gray-600">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;