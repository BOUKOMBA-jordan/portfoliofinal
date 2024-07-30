import React from 'react'
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import HeroImg from "../components/HeroImg";
import Work from "../components/Work";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Accueil-Jordan Talla</title>
      </Helmet>
      <Navbar />
      <HeroImg />
      <Work />
      <Footer />
    </div>
  )
}

export default Home
