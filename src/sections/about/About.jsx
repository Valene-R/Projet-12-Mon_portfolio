import React from 'react';
import { Section, Title, Subtitle, Description, Undraw } from './about.styled';
import illustration from '../../assets/undraw.png';


const About = () => {
  return (
    <Section id="about">
      <div>
        <Title>A PROPOS</Title>
        <Subtitle>En savoir plus sur moi</Subtitle>
        <Undraw src={illustration} alt="Illustration" />
        <Description>
        Je m'appelle Valène et je suis actuellement étudiante dans le parcours Intégrateur web. 
        Passionnée par les nouvelles technologies et le design, j'aspire à combiner créativité et technicité pour créer des expériences web fluides et esthétiques.
        Chaque projet est pour moi l'occasion d'apprendre et de parfaire mes compétences. 
          <br />
        Mon ambition est de transformer chaque idée en une réalité numérique qui répond aux besoins des utilisateurs tout en offrant une navigation intuitive.
        </Description>
      </div>
    </Section>
  );
}

export default About;
