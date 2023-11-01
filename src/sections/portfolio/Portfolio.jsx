import React, { useState } from 'react';
import projectsData from './data.json';
import { Root, Projects, Card, Modal, DetailedModal, TechList, TechItem, CloseButton, 
    ProjectLink, Icon, IconContainer, Description, Title, Subtitle, Button, ContainerBtn, LinkP } from './portfolio.styled';
import iconPlay from '../../assets/iconPlay.svg';
import iconGithub from '../../assets/iconGithub.svg';
import iconReport from '../../assets/iconReport.svg';
import DetailedItem from './detailedItem/DetailedItem';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showDetailedModal, setShowDetailedModal] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setShowDetailedModal(false);
  };

  return (
    <Root>
      <Description id="portfolio">
        <Title>Portfolio</Title>
        <Subtitle>Traversée créative : chaque projet, une histoire unique à raconter</Subtitle>
      </Description>
      <Projects>
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
                <Icon src={iconGithub} alt="Voir sur GitHub" />
                <LinkP>voir le repo sur GitHub</LinkP>
              </ProjectLink>
              {selectedProject.liveDemoLink && (
                <ProjectLink href={selectedProject.liveDemoLink}>
                  <Icon src={iconPlay} alt="Voir le site" />
                  <LinkP>voir le site</LinkP>
                </ProjectLink>
              )}
              {selectedProject.pdfLink && (
                <ProjectLink href={selectedProject.pdfLink} target="_blank" onClick={(e) => e.stopPropagation()}>
                  <Icon src={iconReport} alt="Voir le rapport d'oprtimisation" />
                  <LinkP>voir le rapport d'optimisation</LinkP>
                </ProjectLink>
              )}
            </IconContainer>
						<h3>Technologies utilisées :</h3>
						<TechList>
							{selectedProject.technologies.map(tech => (
								<TechItem key={tech}>{tech}</TechItem>
							))}
						</TechList>
            <ContainerBtn>
              <Button onClick={() => setShowDetailedModal(true)}>Plus de détails</Button>
            </ContainerBtn>
					</div>
				</Modal>
      )}
      {showDetailedModal && ( // Nouvelle modale détaillée
        <DetailedModal $show={!!showDetailedModal} onClick={closeModal}>
          <div onClick={e => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>x</CloseButton>
            <img src={selectedProject.picture} alt={`${selectedProject.title}`} />
            <DetailedItem title="Contexte:" description={selectedProject.context} />
            <DetailedItem title="Tâches:" description={selectedProject.tasks} />
            <DetailedItem title="Défis:" description={selectedProject.challenges} />
            <DetailedItem title="Solutions:" description={selectedProject.solutions} />
          </div>
        </DetailedModal>
      )}
    </Root>
  );
};

export default Portfolio;