import React from "react";
import { motion } from "framer-motion";
// Importing icons with a more unified style (e.g., Fi or simple Fa)
import { FaBullhorn, FaLaptopCode, FaMobileAlt, FaSearch, FaPalette, FaRocket } from "react-icons/fa";

// ---------------------
// 1. Updated Service Data for Clarity and Productivity
// ---------------------
const services = [
  {
    icon: FaBullhorn, // Passing the component reference
    title: "Digital Marketing Strategy",
    desc: "We craft targeted campaigns, from social media to paid ads, ensuring maximum brand visibility and **high-impact conversions**.",
  },
  {
    icon: FaLaptopCode,
    title: "Full-Stack Web Development",
    desc: "Building lightning-fast, secure, and responsive websites using modern frameworks to create seamless, **future-proof digital experiences**.",
  },
  {
    icon: FaMobileAlt,
    title: "Native Mobile App Solutions",
    desc: "Developing custom, user-centric iOS and Android applications that streamline business processes and **engage your user base** effectively.",
  },
  {
    icon: FaSearch,
    title: "Advanced SEO & Analytics",
    desc: "Dominate search results and grow your organic traffic with data-driven **SEO strategies and precise performance tracking**.",
  },
  {
    icon: FaPalette,
    title: "UX/UI Design & Branding",
    desc: "We deliver memorable creative branding and intuitive user interfaces that **elevate your credibility and customer satisfaction**.",
  },
  {
    icon: FaRocket, // Adding one more service for a more complete grid (6 is common)
    title: "Cloud & DevOps Integration",
    desc: "Optimize your infrastructure with scalable cloud solutions and DevOps practices for **faster deployment and unmatched reliability**.",
  },
];

// ---------------------
// 2. Framer Motion Variants (for cleaner code)
// ---------------------
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1, // Faster stagger for a snappier feel
    },
  }),
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-6 md:px-12 text-center">
        
        {/* Title Block */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <p className="text-sm font-semibold uppercase text-blue-600 mb-3 tracking-widest">
            What We Deliver
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Comprehensive **Digital Solutions** That Drive Results
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon; // Get the component reference
            return (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                
                // Modern, attractive card styling: Gradient border and lift effect
                className="relative p-8 bg-white rounded-2xl shadow-xl border border-gray-100 group overflow-hidden 
                           hover:shadow-2xl hover:border-blue-500/50 transition duration-300 transform hover:-translate-y-2"
              >
                {/* Visual Accent: Blue circle for the icon */}
                <div className="mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-blue-500/10 group-hover:bg-blue-600 transition duration-300 mx-auto">
                  <IconComponent className="text-3xl text-blue-600 group-hover:text-white transition duration-300" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
        
        {/* CTA after services */}
        <div className="mt-16">
            <a
                href="/contact"
                className="inline-flex items-center px-10 py-4 bg-blue-600 text-white font-bold text-lg rounded-full shadow-lg shadow-blue-500/50 
                           hover:bg-blue-700 hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
                Start Your Project Today
            </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;