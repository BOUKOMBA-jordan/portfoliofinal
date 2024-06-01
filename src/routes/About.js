import React from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="À PROPOS" text="Je suis développeur FULLSTACK"/>
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About
