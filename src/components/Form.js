import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./FormStyles.css";

const ContactUs = () => {
  const form = useRef();

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
