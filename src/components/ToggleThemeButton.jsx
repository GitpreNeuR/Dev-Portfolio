import styled from 'styled-components';
import { motion } from 'framer-motion';
import {  faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ToggleContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  width: 48px;
  height: 24px;
  background: ${({ theme }) => theme.backgroundColor};
  border-radius: 999px;
`;

const ToggleSlider = styled(motion.div)`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  transition: 0.3s ease-in-out;
  border-radius: 999px;

  transform: ${({ isChecked }) => (isChecked ? 'translateX(100%)' : 'none')};
`;

const SunIcon = styled(faSun)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  color:yellow;
  opacity: ${({ isChecked }) => (isChecked ? 0 : 1)};
`;

const MoonIcon = styled(faMoon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  opacity: ${({ isChecked }) => (isChecked ? 1 : 0)};
`;

const ToggleThemeButton = ({ isChecked, onToggle }) => {
  return (
    <ToggleContainer onClick={onToggle}>
      <ToggleSlider isChecked={isChecked} layoutId="slider" />
      
      
      <FontAwesomeIcon icon={SunIcon}  isChecked={isChecked}/>
      <FontAwesomeIcon icon={ MoonIcon} isChecked={isChecked} />

    </ToggleContainer>
  );
};

export default ToggleThemeButton;