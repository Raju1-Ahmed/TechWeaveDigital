import React from "react";
import { motion } from "framer-motion";

const PortfolioSection = () => {
  // Use better, themed placeholders for visual attraction
  const projects = [
    { id: 1, title: "LuxeMart Retail Platform", category: "E-Commerce", img:    "https://i.ibb.co.com/1fvnGKcN/Tech-Weave-Digital-1.png" },
    { id: 2, title: "VaultPay Mobile Finance", category: "Mobile App", img:     "https://i.ibb.co.com/ccsMjptH/Tech-Weave-Digital-2.png" },
    { id: 3, title: "GrowFast Organic Search", category: "SEO & Content", img:  "https://i.ibb.co.com/My93hGTj/Tech-Weave-Digital-3.png" },
    { id: 4, title: "Nexus Corporate Identity", category: "Branding", img:      "https://i.ibb.co.com/rXX4Thx/Tech-Weave-Digital-4.png" },
    { id: 5, title: "Creative Developer Portfolio", category: "Web Design", img:"https://i.ibb.co.com/PZK92R62/Tech-Weave-Digital-5.png" },
    { id: 6, title: "DineNow Delivery Service", category: "Mobile App", img:    "https:https://i.ibb.co.com/PZK92R62/Tech-Weave-Digital-5.png" },
  ];
  
  // Framer Motion Variants for Staggered Grid Animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-white text-gray-900">
      <div className="container mx-auto px-6 md:px-12 text-center">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <p className="text-sm font-semibold uppercase text-blue-600 mb-3 tracking-widest">
            Showcase of Excellence
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Our **Featured Projects** That Deliver Value
          </h2>
          <p className="text-lg mt-4 text-gray-600">
            Explore diverse examples of our strategic thinking, design expertise, and technical execution.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={`/project/${project.id}`} // Use anchor tag for project link
              variants={itemVariants}
              className="relative block overflow-hidden rounded-2xl shadow-xl border border-gray-100 group cursor-pointer aspect-video"
            >
              {/* Image */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-in-out"
                // Placeholder error handler
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/60A5FA/ffffff?text=PROJECT+IMAGE" }}
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 transition duration-300">
                {/* Text revealed on hover */}
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 opacity-80 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition duration-300">
                  {project.category}
                </span>
                <h3 className="text-white text-2xl font-bold leading-snug transform translate-y-2 group-hover:translate-y-0 transition duration-300 delay-100">
                  {project.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <a
            href="/projects"
            className="inline-block px-10 py-4 bg-blue-600 text-white font-bold text-lg rounded-full shadow-lg shadow-blue-500/50 
                       hover:bg-blue-700 hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
          >
            View Full Case Studies →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;






// https://i.ibb.co.com/1fvnGKcN/Tech-Weave-Digital-1.png
// https://i.ibb.co.com/ccsMjptH/Tech-Weave-Digital-2.png
// https://i.ibb.co.com/My93hGTj/Tech-Weave-Digital-3.png
// https://i.ibb.co.com/rXX4Thx/Tech-Weave-Digital-4.png
// https://i.ibb.co.com/PZK92R62/Tech-Weave-Digital-5.png