import React, { useState } from 'react';
import projectsData from '../../data/data.json';
import { Root, Projects, Card, Modal, TechList, TechItem, CloseButton, ProjectLink, GithubIcon, PlayIcon, IconContainer } from './portfolio.styled';
import iconPlay from '../../assets/iconPlay.svg';
import iconGithub from '../../assets/iconGithub.svg';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <Root>
      <Projects id="portfolio">
        {projectsData.map(project => (
          <Card key={project.id} onClick={() => openModal(project)}>
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
          </Card>
        ))}
      </Projects>
      {selectedProject && (
				<Modal $show={!!selectedProject} onClick={closeModal}>
					<div onClick={e => e.stopPropagation()}> 
      			<CloseButton onClick={closeModal}>x</CloseButton>
						<h2>{selectedProject.title}</h2>
						<p>{selectedProject.description}</p>
						<IconContainer>
              <ProjectLink href={selectedProject.githubLink}>
                <GithubIcon src={iconGithub} alt="Voir sur GitHub" />
              </ProjectLink>
              {selectedProject.liveDemoLink && (
                <ProjectLink href={selectedProject.liveDemoLink}>
                  <PlayIcon src={iconPlay} alt="Voir la démo" />
                </ProjectLink>
              )}
            </IconContainer>
						<h3>Technologies utilisées :</h3>
						<TechList>
							{selectedProject.technologies.map(tech => (
								<TechItem key={tech}>{tech}</TechItem>
							))}
						</TechList>
					</div>
				</Modal>
      )}
    </Root>
  );
};

export default Portfolio;