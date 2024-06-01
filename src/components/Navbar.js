import { Link } from "react-router-dom"
import "./NavbarStyles.css"

import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 1) {
            setColor(true);
        } else {
            setColor(false)
        }
    };

    window.addEventListener("scroll", changeColor);


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
    )
}

export default Navbar
