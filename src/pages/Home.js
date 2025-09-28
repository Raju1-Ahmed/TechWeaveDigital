import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import { motion } from "framer-motion";
import ServicesSection from "../components/ServicesSection";
import PortfolioSection from "../components/PortfolioSection";


const Home = () => {

  return (
    <div>
      <Hero/>
      <AboutSection/>
      <ServicesSection/>
      <PortfolioSection/>
     
    </div>
       
  ); 
};

export default Home;