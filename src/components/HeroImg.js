import "./HeroImgStyles.css";

import React from 'react';
import IntroImg from "../assets/accueil.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={IntroImg} alt="IntoImg" />
            </div>
            <div className="content">
                <p>HELLO JE SUIS FREELANCER</p>
                <h1>Développeur Full stack</h1>
                <div>
                    <Link to="/project" className="btn">Projet</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImg
