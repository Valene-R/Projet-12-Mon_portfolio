import React, { useState, useEffect } from 'react';
import { Root, TypingText } from './typingAnimation.styled';

const sentences = ["Je suis intégratrice web.", "Je suis développeuse front-end."];

const TypingAnimation = () => {
  // État pour l'index actuel de la phrase
  const [index, setIndex] = useState(0);
  // État pour l'index actuel du caractère
  const [subIndex, setSubIndex] = useState(0);
  // État pour savoir si on supprime ou ajoute des caractères
  const [reverse, setReverse] = useState(false);
  // État pour la barre de clignotement
  const [blink, setBlink] = useState(true);

  // Effet pour gérer le "typing"
  useEffect(() => {
    if (index === sentences.length) return;

    // Lorsque la phrase est affichée, commence à la supprimer
    if (subIndex === sentences[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    // Lorsque toute la phrase est affichée, passe à la phrase suivante
		if (subIndex === 0 && reverse) {
			setReverse(false);
			if (index === sentences.length - 1) { // Si à la dernière phrase
				setIndex(0); // Revenir à la première phrase
			} else {
				setIndex((prevIndex) => prevIndex + 1); // Sinon, passer à la phrase suivante
			}
			return;
		}

    // Crée un délai pour le "typing"
    const timeout = setTimeout(() => {
      setSubIndex((prevSubIndex) => prevSubIndex + (reverse ? -1 : 1));
    }, 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // Effet pour gérer le clignotement de la barre
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <Root>
      <TypingText width={subIndex} $animationDuration={0.5}>
        {/* Affiche un segment de la phrase et un curseur si "blink" est vrai */}
        {`${sentences[index].substring(0, subIndex)}${blink ? "|" : " "}`}
      </TypingText>
    </Root>
  );
}

export default TypingAnimation;