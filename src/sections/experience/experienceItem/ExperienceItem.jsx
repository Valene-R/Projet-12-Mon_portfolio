import React from 'react';
import { Root, Date, Title, Description } from './experienceItem.styled';

const ExperienceItem = ({ date, title, description }) => (
  <Root>
    <Date>{date}</Date>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Root>
);

export default ExperienceItem;