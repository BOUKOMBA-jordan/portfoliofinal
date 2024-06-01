import { Link } from "react-router-dom";
import "./FormStyles.css";

import React from 'react'

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Nom</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Objet</label>
        <input type="text"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Ici votre message" />
        <button className="btn">
            <Link to="">Envoyer</Link>
        </button>
      </form>
    </div>
  )
}

export default Form
