import React from 'react';
import { Root, SkillText } from './skill.styled'; 


const Skill = ({ icon, color, description }) => (
  <Root>
    {
      typeof icon === "string"
      ? <img src={icon} alt={description} width="84" height="50" />
      : React.createElement(icon, { size: "48", color: color })
    }
    <SkillText>{description}</SkillText>
  </Root>
);

export default Skill;
