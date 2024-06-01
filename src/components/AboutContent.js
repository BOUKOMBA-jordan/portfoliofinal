import "./AboutContentStyles.css";

import { Link } from "react-router-dom";
import "./AboutContentStyles.css";

import React from 'react';
import React1 from "../assets/jordan.jpg";
import Js from "../assets/Js.jpg";

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Qui suis-je?</h1>
                <p>Je suis Jordan BOUKOMBA TALLA, un développeur Fullstack ayant une grande capacité d'adaptation à une variété de technologies.</p>
                <Link to="/contact">
                    <button className="btn">CONTACT</button>
                </Link>
            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={React1} className="img" alt="true"/>
                    </div>
                    <div className="img-stack bottom">
                        <img src={Js} className="img" alt="true"/>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default AboutContent;
