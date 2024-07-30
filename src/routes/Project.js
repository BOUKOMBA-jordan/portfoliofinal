import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import PricingCard from '../components/PricingCard';
import Work from '../components/Work';


const Project = () => {
  return (
    <div>
      <Helmet>
        <title>Project-Jordan Talla</title>
      </Helmet>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Certains de mes travaux les plus récents" />
      <Work />
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Project;
