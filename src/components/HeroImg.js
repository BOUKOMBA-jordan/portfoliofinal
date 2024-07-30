import React, { useEffect } from 'react';
import "./HeroImgStyles.css";
import IntroImg from "../assets/accueil.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
    useEffect(() => {
        // Ajouter le script de Google Tag Manager
        const script1 = document.createElement('script');
        script1.src = "https://www.googletagmanager.com/gtag/js?id=G-DC2JEL6QX5";
        script1.async = true;
        document.body.appendChild(script1);

        const script2 = document.createElement('script');
        script2.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DC2JEL6QX5');
        `;
        document.body.appendChild(script2);

        // Nettoyer les scripts lorsque le composant est démonté
        return () => {
            document.body.removeChild(script1);
            document.body.removeChild(script2);
        };
    }, []);

    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={IntroImg} alt="IntroImg" />
            </div>
            <div className="content">
                <p>HELLO JE SUIS FREELANCER</p>
                <h1>Développeur <br /> Full stack</h1>
                <div>
                    <Link to="/project" className="btn">Projet</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
            </div>
        </div>
    );
}

export default HeroImg;
