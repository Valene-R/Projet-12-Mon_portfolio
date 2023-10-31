import React from 'react';
import { Container, Title, Subtitle, Description, Undraw } from './about.styled';
import illustration from '../../assets/undraw.png';


const About = () => {
  return (
    <Container id="about">
      <div>
        <Title>A PROPOS</Title>
        <Subtitle>En savoir plus sur moi</Subtitle>
        <Undraw src={illustration} alt="Illustration" />
        <Description>
        Je m'appelle <strong>Valène</strong> et je suis actuellement étudiante dans le parcours <strong>Intégrateur web</strong>. 
        Passionnée par les <strong>nouvelles technologies</strong> et le <strong>design</strong>, j'aspire à combiner <strong>créativité</strong> et <strong>technicité</strong> pour créer des expériences web fluides et esthétiques.
        Chaque projet est pour moi l'occasion d'apprendre et de parfaire mes compétences. 
        </Description>
        <Description>
        Mon ambition est de transformer chaque idée en une réalité numérique qui répond aux besoins des utilisateurs tout en offrant une <strong>navigation intuitive</strong>.
        </Description>
      </div>
    </Container>
  );
}

export default About;
