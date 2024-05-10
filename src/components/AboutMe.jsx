import React from 'react'
import {Description, Social, Circle} from "../styles/styles";
import styled from 'styled-components';
import { motion } from "framer-motion";

function AboutMe() {

  return (
    <StyledAboutMe>
     <motion.p > I am a dedicated and ambitious individual who holds a <span> Master's degree from Chitkara University</span>, where I also completed my undergraduate studies in Computer Science as part of the Class of 2019.<br/><br/> I possess a deep passion for <span>web development and app development</span>, particularly <span>front-end development</span>, while also having strong<span>full-stack development skills.</span>  I have a strong foundation in full stack web development concepts, having diligently studied them to gain a thorough understanding.</motion.p><br/>
   
        
    </StyledAboutMe>  
)}

const StyledAboutMe = styled(Description)`
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex:1;
margin-right: 3rem;


p span, .bold{
  font-family: var(--font-sans);
  color: var(--color-header);
}

`


export default AboutMe;