import React,{useState} from "react";

import { Container, Div} from "../styles/styles";
import styled from "styled-components";

import AboutMe from "../components/AboutMe";
import Namespace from "../components/Namespace";
// import animations
import { useScroll } from "../util/useScroll";
import { motion } from "framer-motion";
import { slideAnim } from "../animation";


const About = () => {
    const [ref, controls] = useScroll();
    const [directionLeft, setDirectionLeft] = useState(false);
    
    return(
    <Div>
        <StyledAbout animate={controls} ref={ref} id="about" variants={slideAnim.up}>
            <motion.h2><span>01.</span> ABOUT</motion.h2>
            <AboutContainer >
                <AboutMe initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, x: 0 }}/>
                <Namespace initial={{
          x: directionLeft ? 200 : -200,
          opacity: 0,
        }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, x: 0 }}/>
            </AboutContainer>
        </StyledAbout>
    </Div>
    )
};




const StyledAbout = styled(Container)`
    padding: 0rem 2rem;
    padding-top: 6rem;
    max-width: 1080px;
    height:100vh;
    z-index:3;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 700px) {
    }
   
`
const AboutContainer = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    @media (max-width: 850px){
        display: block;
}
`

export default About;