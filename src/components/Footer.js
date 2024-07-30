import React, { useEffect } from 'react';
import "./FooterStyles.css";
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
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
        <div className="footer">
            <div className="background"></div>
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} className="home-icon" />
                        <div>
                            <p>
                                <a href="https://www.google.fr/maps/place/SEEG/@-1.5502893,13.2140915,1049m/data=!3m1!1e3!4m6!3m5!1s0x1a7a6a2da9bc7eed:0x3930772356036b9a!8m2!3d-1.5486248!4d13.2172079!16s%2Fg%2F1hdyy40dv?entry=ttu" target="_blank" rel="noopener noreferrer">Alliance Moanda</a>
                            </p>
                            <p>
                                <a href="https://www.google.fr/maps/place/Gabon/@-0.922764,8.8323136,7z/data=!3m1!4b1!4m6!3m5!1s0x107f3b8a5438f3ed:0x7b0cc30e36786b15!8m2!3d-0.803689!4d11.609444!16zL20vMDM1NDg?entry=ttu" target="_blank" rel="noopener noreferrer">Gabon</a>
                            </p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} className="phone-icon" />
                            <a href="tel:+241074790932" target="_blank" rel="noopener noreferrer">+241 07 479 0932</a> / <a href="tel:+241076218187" target="_blank" rel="noopener noreferrer">076218187</a>
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} className="email-icon" />
                            <a href="mailto:jordantalla43@gmail.com" target="_blank" rel="noopener noreferrer">Laissez moi un mail</a>
                        </h4>
                    </div>
                </div>

                <div className="right">
                    <h4>À propos de l'entreprise</h4>
                    <p>Je suis Jordan BOUKOMBA, PDG de la future JB Tech. Bien plus qu'un service, nous incarnons votre vision.</p>
                    <div className="social">
                        <a href="https://www.fb.com/l/6lp1kJRRR" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} className="facebook-icon" /></a>
                        <a href="https://wa.me/24176218187" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={30} className="whatsapp-icon" /></a>
                        <a href="https://www.linkedin.com/in/jordan-talla-250009284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} className="linkedin-icon" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
