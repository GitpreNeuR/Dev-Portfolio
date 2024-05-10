import React from 'react';
import styled,{keyframes} from 'styled-components';
import { motion } from 'framer-motion';


const StyledCirclesContainer = styled(motion.div)`

  display: flex;
  justify-content: center;
  align-items: center;
  margin:auto;
  
 
`;

const pingAnimation = keyframes`
from {
  transform: scale(0.9);
 
  -webkit-transform: scale(0.9);
  /* Safari and Chrome */
  
  
  opacity: 1;
}
to {
  color: white;
  transform: scale(1.3);
  
  -webkit-transform: scale(1.3);
  /* Safari and Chrome */
  
  
  opacity: 0;
}
`;

const Circle = styled.div`
  position: absolute;
  border: 1px solid ${props => props.theme.mainColor};
  border-radius: 50%;
 z-index:-99;

  &.circle-1 {
    height: 600px;
    width: 600px;
    opacity: 0.3;
    animation: ${pingAnimation} 1.5s ease-out infinite;
  }

  

  &.circle-2 {
    height: 1200px;
    width: 1200px;
    opacity: 0.25;
  }
`;



function Circles() {
  return (
    <>
      <StyledCirclesContainer
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: [0.4, 0.6, 0.8, 0.3, 1],
          scale: [1, 2, 2, 3, 1],
        }}
        transition={{ duration: 3 }}
      >
        <Circle className="circle-1" />
        
        <Circle className="circle-2" />
      </StyledCirclesContainer>
    </>
  );
}

export default Circles;
