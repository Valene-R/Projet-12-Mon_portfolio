import React from 'react';
import { Root, Description, Title, Subtitle } from './skills.styled';
import skillsData from './skillsData.json'; 
import Skill from './skill/Skill';

// Pour mapper les noms des icônes aux composants d'icônes
import JavaScriptIcon from '../skills/iconsTechno/JavaScriptIcon';
import ReactIcon from '../skills/iconsTechno/ReactIcon';
import ReduxIcon from '../skills/iconsTechno/ReduxIcon';
import SaasIcon from '../skills/iconsTechno/SaasIcon';
import JestIcon from '../skills/iconsTechno/JestIcon';
import GitIcon from '../skills/iconsTechno/GitIcon';

const iconMapping = {
  "JavaScriptIcon": JavaScriptIcon,
  "ReactIcon": ReactIcon,
  "ReduxIcon": ReduxIcon,
  "SaasIcon": SaasIcon,
  "JestIcon": JestIcon,
  "GitIcon": GitIcon,
};


const Skills = () => (
  <Root id="skills">
    <Description>
      <Title>Compétences</Title>
      <Subtitle>Découvrez les technologies que je maîtrise et avec lesquelles je donne vie à vos projets</Subtitle>
    </Description>
    {skillsData.map(skill => 
      <Skill key={skill.id} icon={iconMapping[skill.icon] || skill.icon} color={skill.color} name={skill.name} description={skill.description} /> 
    )}
  </Root>
);

export default Skills;