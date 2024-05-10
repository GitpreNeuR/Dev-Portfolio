import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import useSound from 'use-sound';
import popSound from '../assets/videos/pop.mp3'
// Styled Components
const SkillContainer = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;
`;

const SkillImage = styled(motion.img)`
  border: 2px solid gray;
  border-radius: 50%;
  object-fit: cover;
  width: 8rem;
  height: 8rem;
  transition: filter 0.3s ease-in-out;

  display: grid;
  place-items: center; /* Center both horizontally and vertically */

  &:hover {
    filter: none;
  }

  @media (min-width: 768px) {
    width: 7rem;
    height: 7rem;
  }

  @media (min-width: 1280px) {
    width: 9rem;
    height: 9rem;
  }
`;

const SkillOverlay = styled.div`
  opacity: 0;
  background-color: white;
  height: 8rem; /* Adjust the size as needed */
  width: 8rem; /* Adjust the size as needed */
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: 768px) {
    height: 7rem;
    width: 7rem;
  }

  @media (min-width: 1280px) {
    height: 9rem;
    width: 9rem;
  }
`;

const SkillText = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
`;

function Skill(props) {
  const [playPop] = useSound(popSound);
  const [directionLeft, setDirectionLeft] = useState(false);

  return (
    <SkillContainer>
      <SkillImage
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={props.image}
      />
      <SkillOverlay>
        <SkillText>{props.progress}</SkillText>
      </SkillOverlay>
    </SkillContainer>
  );
}

export default Skill;
