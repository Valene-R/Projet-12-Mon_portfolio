import React from 'react';
import { Root, SkillText, SkillName } from './skill.styled'; 


const Skill = ({ icon, color, name, description }) => (
  <Root>
    {
      typeof icon === "string"
      ? <img src={icon} alt={description} width="84" height="50" />
      : React.createElement(icon, { size: "48", color: color })
    }
    <SkillName>{name}</SkillName>
    <SkillText>{description}</SkillText>
  </Root>
);

export default Skill;
