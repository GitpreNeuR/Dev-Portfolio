import React from 'react';
import styled, { keyframes } from 'styled-components';

const SongBar = () => {
  return (
    <StyledLoadingWave>
      <LoadingBar height="10px" />
      <LoadingBar height="20px" />
      <LoadingBar height="10px" />
      <LoadingBar height="20px" />
      <LoadingBar height="10px" />
      <LoadingBar height="20px" />
      <LoadingBar height="20px" />
    </StyledLoadingWave>
  );
};

const loadingWaveAnimation = keyframes`
  0%, 100% {
    height: 10px;
  }

  50% {
    height: 50px;
  }
`;

const StyledLoadingWave = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
 column-gap:10px;
  justify-content: center;
  align-items: center;
  
`;

const LoadingBar = styled.div`
  width: 5px;
  height: ${({ height }) => height}; /* Use the specified height or default to 10px */
  margin: 0 5px;
  background: var(--color-main);
  border-radius: 5px;
  animation: ${loadingWaveAnimation} 1s ease-in-out infinite;

  &:nth-child(2) {
    animation-delay: 0.1s;
  }

  &:nth-child(3) {
    animation-delay: 0.2s;
  }

  &:nth-child(4) {
    animation-delay: 0.3s;
  }
`;

export default SongBar;


