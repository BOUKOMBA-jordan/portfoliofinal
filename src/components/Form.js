import "./FormStyles.css";
import React, { useState } from 'react';
import axios from 'axios'; // Importation de la bibliothèque Axios

const Form = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    objet: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(formData);
  };

  const sendEmail = (data) => {
    // Effectuer une requête POST avec Axios
    axios.post('/send-email', data)
      .then(response => {
        console.log(response);
        // Si l'e-mail est envoyé avec succès, actualiser la page
        window.location.reload();
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Nom</label>
        <input type="text" name="nom" value={formData.nom} onChange={handleChange}></input>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange}></input>
        <label>Objet</label>
        <input type="text" name="objet" value={formData.objet} onChange={handleChange}></input>
        <label>Message</label>
        <textarea rows="6" name="message" value={formData.message} onChange={handleChange} placeholder="Ici votre message"></textarea>
        <button type="submit" className="btn">Envoyer</button>
      </form>
    </div>
  );
}

export default Form;
