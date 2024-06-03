import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import React from 'react';
import React1 from "../assets/jordan.jpg";

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Qui suis-je?</h1>
                <p>Je suis Jordan Boukomba Talla, un développeur Fullstack passionné par le monde numérique et doté d'une grande polyvalence dans l'adoption et la maîtrise de diverses technologies. Mon expertise s'étend sur plusieurs domaines, notamment la maintenance logiciel, la programmation, et bien d'autres encore. Fort de mon expérience, je suis convaincu que ma contribution à vos projets sera synonyme de réussite. Ma confiance en mes compétences et mon engagement sans faille garantissent un travail de qualité. En me confiant vos projets, vous bénéficiez d'un partenaire dévoué et compétent, prêt à relever tous les défis qui se présentent.</p>
                <Link to="/contact">
                    <button className="btn">CONTACT</button>
                </Link>
            </div>

            <div className="right">
                <div className="img-container">
                    <img src={React1} className="img" alt="true"/>
                </div>
            </div>
        </div>
    )
};

export default AboutContent;
