import { Link } from "react-router-dom";
import "./PricingCardStyles.css";

import React from 'react';

const PricingCard = () => {
    return (
        <div className="pricing">
            <div className="card-container">
                <div className="card">
                    <h3>Basic -</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 100</p>
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
                    <p className="btc">$ 200</p>
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
                    <p className="btc">$ 300</p>
                    <p>- 7 jours -</p>
                    <p>- 6 Pages -</p>
                    <p>- Design Responsif -</p>
                    <Link to="/contact" className="btn">
                        ACHETEZ MAINTENANT
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default PricingCard;
