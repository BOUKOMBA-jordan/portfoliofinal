import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [color, setColor] = useState(false);

    const handleClick = () => setClick(!click);

    const changeColor = () => {
        if (window.scrollY >= 1) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeColor);

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
            window.removeEventListener("scroll", changeColor);
            document.body.removeChild(script1);
            document.body.removeChild(script2);
        };
    }, []);

    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to={"/"}>
                <h1>Jordanbrel</h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to={"/"}>Accueil</Link>
                </li>
                <li>
                    <Link to={"/project"}>Projet</Link>
                </li>
                <li>
                    <Link to={"/about"}>A propos</Link>
                </li>
                <li>
                    <Link to={"/contact"}>Contact</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: "#fff" }} />
                ) : (
                    <FaBars size={20} style={{ color: "#fff" }} />)}
            </div>
        </div>
    );
};

export default Navbar;
