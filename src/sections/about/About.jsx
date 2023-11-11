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
          Je m'appelle <strong>Valène</strong> et je suis <strong>développeuse front-end</strong>. 
          Passionnée par les <strong>nouvelles technologies</strong> et le <strong>design</strong>, j'aspire à combiner <strong>créativité</strong> et <strong>technicité</strong> pour créer des expériences web fluides et esthétiques.
          Chaque projet est pour moi l'occasion d'apprendre et de parfaire mes compétences. 
        </Description>
        <Description>
          Mon ambition est de transformer chaque idée en une réalité numérique qui répond aux besoins des utilisateurs tout en offrant une <strong>navigation intuitive</strong>.
        </Description>
        <Description>
          Au cours de mes études, j'ai eu l'opportunité de me familiariser avec divers outils technologiques. J'ai notamment développé des compétences en <strong>JavaScript</strong>, <strong>React</strong> et d'<strong>autres technologies front-end</strong>. 
          <br /><br />
          <span>Pour en savoir plus sur l'étendue de <strong>mes connaissances techniques</strong>, je vous invite à explorer la section compétences.</span>
        </Description>
      </div>
    </Container>
  );
}

export default About;
