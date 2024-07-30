import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./FormStyles.css";

const ContactUs = () => {
  const form = useRef();

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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_sskhkvh', 'template_ioyyv6j', form.current, '5zkGGDOCZjFSkTLG8')
      .then(
        () => {
          console.log('SUCCESS!');
          resetForm();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const resetForm = () => {
    form.current.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Nom</label>
      <input type="text" name="to_name" />
      <label>Email</label>
      <input type="email" name="from_name" />
      <label>Message</label>
      <textarea name="message" rows="6" placeholder="Ici votre message" />
      <input type="submit" className="btn" value="Envoyer" />
    </form>
  );
};

export default ContactUs;
