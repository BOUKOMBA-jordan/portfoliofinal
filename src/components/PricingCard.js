import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import "./PricingCardStyles.css";

const PricingCard = () => {
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
        <div className="pricing">
            <div className="card-container">
                <div className="card">
                    <h3>Basic -</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 200</p>
                    <p>- 4 jours -</p>
                    <p>- 3 Pages -</p>
                    <p>- Design Responsif -</p>
                    <Link to="/contact" className="btn">
                        ACHETEZ MAINTENANT
                    </Link>
                </div>
                <div className="card">
                    <h3>Premium -</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 300</p>
                    <p>- 5 jours -</p>
                    <p>- 4 Pages -</p>
                    <p>- Design Responsif -</p>
                    <Link to="/contact" className="btn">
                        ACHETEZ MAINTENANT
                    </Link>
                </div>
                <div className="card">
                    <h3>Business -</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 400</p>
                    <p>- 7 jours -</p>
                    <p>- 6 Pages -</p>
                    <p>- Design Responsif -</p>
                    <Link to="/contact" className="btn">
                        ACHETEZ MAINTENANT
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;
