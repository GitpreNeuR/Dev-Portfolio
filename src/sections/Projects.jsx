import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import { Container, Div} from "../styles/styles";

import Featured from '../components/Featured';
import {ProjectData} from '../components/ProjectData'

function Projects() {
  const [viewMore, setViewMore] = useState(false);

  const visibleProjects =  ProjectData ;

  const toggleViewMore = () => {
    setViewMore(!viewMore);
  };

  return (
    <Div>
    <StyledProjects id="projects">
      <Header><span>03.</span> PROJECTS</Header>
      <FeaturedContainer>
        {visibleProjects.map((data) => (
          <Featured
            link={data.link}
            key={data.id}
            technologies={data.technologies}
            text={data.text}
            title={data.title}
            imgSrc={data.imgSrc}
          />
        ))}
      </FeaturedContainer>
      {/*<button onClick={toggleViewMore}>
        {viewMore ? 'View Less' : 'View More'}
        </button>*/}
      {/*<Archive />*/}
    </StyledProjects>
    </Div>
  )
};

const StyledProjects = styled(motion.div)`
  max-width: 1200px;
  min-height: 100vh;
  padding: 5rem 2rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Header = styled(motion.h2)`
  display: inline-block;
  padding-bottom: 2rem;
`;

const FeaturedContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr)); 
  gap: 1.3em;
`;



export default Projects;
