import React, { useState, useEffect } from 'react';
import { Container, Title, Subtitle, Form, Label, Input, Textarea, Button, Paragraph, Toast } from './contact.styled';

import emailjs from '@emailjs/browser';

// Variables d'environnement
const EMAILJS_KEY = process.env.REACT_APP_EMAILJS_KEY;
const EMAILJS_SERVICE = process.env.REACT_APP_EMAILJS_SERVICE;
const EMAILJS_TEMPLATE = process.env.REACT_APP_EMAILJS_TEMPLATE;

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
	const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
		// Initialise EmailJS avec clé utilisateur
		emailjs.init(EMAILJS_KEY);
		
		// Envoi du formulaire via EmailJS
		emailjs.sendForm(EMAILJS_SERVICE, EMAILJS_TEMPLATE, e.target)
	
    .then(function() {
			setShowToast(true);
      setName('');
      setEmail('');
      setMessage('');
    }, function(error) {
      alert("Échec de l'envoi. Veuillez réessayer.");
    });
	};

	// Gére la disparition automatique du toast après 5 secondes
	useEffect(() => {
		if (showToast) {
		  const timer = setTimeout(() => {
			  setShowToast(false);
		  }, 5000);
			return () => clearTimeout(timer); 
		}
	}, [showToast]);

  return (
		<Container id="contact">
			<Title>Contactez-moi</Title>
			<Subtitle>Prêt à collaborer et à transformer vos idées en réalité ? Discutons-en.</Subtitle>
			<Form onSubmit={handleSubmit}>
				<Label htmlFor="nameField">Nom</Label>
				<Input id="nameField" name="name" type="text" value={name} onChange={e => setName(e.target.value)} required/>
					
				<Label htmlFor="emailField">Email</Label>
				<Input id="emailField" name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required/>
					
				<Label htmlFor="messageField">Message</Label>
				<Textarea id="messageField" name="message" value={message} onChange={e => setMessage(e.target.value)} required/>

				<Button type="submit">Envoyer</Button>
				<Paragraph>* Vos données sont confidentielles et ne seront pas conservées.</Paragraph>
			</Form>
			{showToast && (
    		<Toast>Message envoyé avec succès !</Toast>
			)}
		</Container>
  );
}

export default Contact;