import React, { useState } from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion'
import { faPlayCircle,faPauseCircle } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SongBar from './SongBar';

const PlaySong = ({ songUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef();

  const togglePlay = () => {
    const audioElement = audioRef.current;

    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <>
    <StyledPlaySong>
        
      <audio ref={audioRef} src={songUrl} />
      <button>
        {isPlaying ? <FontAwesomeIcon icon={faPauseCircle} onClick={togglePlay}/> : <FontAwesomeIcon icon={faPlayCircle}onClick={togglePlay}/>}
       
      </button>
      
      <SongBar/>
    </StyledPlaySong>
   
    </>
  );
};



const StyledPlaySong = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0.5em;
  transform: scale(0.87);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  outline: none;
  margin: 2rem 0;

  button {
    background: none;
    color: var(--color-main);
    border: none;
    outline:none;
    cursor: pointer;
    font-size: 2.3rem;
    transition: none;
    
    &:hover {
      color: var(--color-main);
      background: none;
    }
  }

  @media(max-width: 700px) {
    position: absolute;
    
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default PlaySong;
