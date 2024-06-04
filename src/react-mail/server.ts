import { Resend } from 'resend';

// Initialisation de Resend en dehors de la fonction sendEmail pour éviter les réinitialisations inutiles
const resend = new Resend('Jordan');

export const sendEmail = async (formData) => {
  try {
    const { data } = await resend.emails.send({
      from: formData.email,
      to: 'jordantalla43@gmail.com', // Adresse e-mail de destination
      subject: formData.objet,
      html: formData.message,
    });
    console.log(data);
  } catch (error) {
    console.error(error);
    throw error; // Renvoyer l'erreur pour la gérer dans le composant Form
  }
};
