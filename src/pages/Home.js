import React from "react";
import { motion } from "framer-motion";
import { Zap, Code, Layout } from "lucide-react"; // Import a tech icon for visual appeal

// Configuration for staggered entrance animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

// --- Typing Animation Logic ---
// We'll simulate a typing effect for the main headline for better impact
const headlineText = "Weaving Technology with Creativity";

const Hero = () => {
  return (
    <section className="mt-2 relative min-h-screen flex items-center bg-gray-50 dark:bg-gray-900 text-white overflow-hidden">
      {/* MODERN BACKGROUND: Subtle Gradient Overlay and Animated Bubbles 
      */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-blue-800 opacity-95"></div>

      {/* Animated Background Element (more subtle and focused) */}
      <div className="absolute top-0 left-0 w-full h-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute w-[800px] h-[800px] rounded-full bg-cyan-400 blur-3xl opacity-10 top-[-200px] right-[-300px]"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1.2 }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", delay: 2 }}
          className="absolute w-[500px] h-[500px] rounded-full bg-indigo-400 blur-3xl opacity-10 bottom-[-100px] left-[-200px]"
        ></motion.div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center px-6 py-20 md:py-0">
        
        {/* Left Side: Text and CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left p-4"
        >
          {/* Main Headline with Typing Effect */}
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-5 leading-tight tracking-tight"
          >
            {/* Split the headline into individual motion.span for the typing effect */}
            {headlineText.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.05,
                  delay: 0.5 + index * 0.05,
                }}
                className={char === "T" || char === "C" ? "text-cyan-400" : ""}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-10 text-gray-300 max-w-xl mx-auto lg:mx-0"
          >
            Crafting bespoke digital experiences through *strategic marketing* and *cutting-edge development*.
          </motion.p>

          {/* Service List (More attractive and scannable) */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
            <span className="flex items-center text-sm font-medium text-cyan-400 bg-cyan-900/40 px-3 py-1 rounded-full border border-cyan-700">
              <Zap size={16} className="mr-2" /> Digital Marketing
            </span>
            <span className="flex items-center text-sm font-medium text-cyan-400 bg-cyan-900/40 px-3 py-1 rounded-full border border-cyan-700">
              <Code size={16} className="mr-2" /> Web Development
            </span>
            <span className="flex items-center text-sm font-medium text-cyan-400 bg-cyan-900/40 px-3 py-1 rounded-full border border-cyan-700">
              <Layout size={16} className="mr-2" /> App Solutions
            </span>
          </motion.div>

          {/* CTA Buttons with whileHover */}
          <motion.div variants={itemVariants} className="flex gap-4 justify-center lg:justify-start">
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)" }}
              className="px-8 py-4 bg-cyan-400 text-indigo-900 font-extrabold rounded-full shadow-xl transition-colors duration-300"
            >
              Start a Project ✨
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full shadow-lg transition-colors duration-300"
            >
              Get a Quote 🚀
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Right Side: Visual Element (Icon/Illustration) */}
        <div className="hidden lg:flex justify-center items-center p-8">
          <motion.div
            animate={{ 
              y: [0, -15, 0], // Floating effect
              rotate: [0, 5, -5, 0] // Subtle rotation
            }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-cyan-400/90"
          >
            {/* Placeholder for a complex Illustration or a large Icon */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[450px] h-[450px]">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-6h-2v6zm0-8h2V7h-2v2z" opacity="0.4" />
              <path d="M15 11h-2V7h2m-2 8h2v-4h-2m-2-4H7v4h2m-2 4h2v-6H7m6 8H7v2h6v-2zm-6 0H5v2h2v-2zm10 0h-2v2h2v-2zm-2-2h-2v-2h2v2zm2 0h2v-2h-2v2zm-2-2h-2v-2h2v2zm2-2h2v-2h-2v2zm-2-2h-2V7h2v2zm2-2h2V7h-2v2z" opacity="0.6"/>
              <path d="M17 17h-2v-4h2v4zm-4 0h-2v-4h2v4zm-4 0H7v-4h2v4z" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;