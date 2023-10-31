import React from 'react';
import ExperienceItem from './experienceItem/ExperienceItem';
import { Container, Description, Title, Subtitle } from './experience.styled';
import experienceData from './experienceData.json';

const Experience = () => (
  <Container id="experience">
    <Description>
      <Title>Expérience</Title>
      <Subtitle>Parcours de mon évolution professionnelle</Subtitle>
    </Description>
    {experienceData.map(exp => (
      <ExperienceItem
        key={exp.date}
        date={exp.date}
        title={exp.title}
        description={exp.description}
      />
    ))}
  </Container>
);

export default Experience;