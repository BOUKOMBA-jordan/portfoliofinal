import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact-Jordan Talla</title>
      </Helmet>
      <Navbar />
      <HeroImg2 heading="CONTACT" text="Veuillez me contacter" />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact
