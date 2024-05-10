import React from 'react'
// animations
import {motion} from "framer-motion"
import { Container, Div, Hide} from "../styles/styles";
import { slideAnim, staggerAnim } from "../animation"
import styled,{keyframes} from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import { useScroll } from '../util/useScroll';
import { faPhone } from '@fortawesome/fontawesome-free-solid';
import {  faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';




const Contact = () => { 
  const [ref, controls] = useScroll();

  return (
    <>
      
      <ContactStyle animate={controls} ref={ref} variants={staggerAnim} id="contact">
        <div>
          <Hide>
            <motion.h2 variants={slideAnim.up}><span>04.</span> CONTACT</motion.h2>
          </Hide>
        </div>
        <ContactInfo>
          <Hide>
            <Info>
            <IconContainer variants={slideAnim.up}>
                <FontAwesomeIcon icon={faEnvelope}/>
            </IconContainer>
            <motion.p variants={slideAnim.up}>devangbanta44@gmail.com</motion.p>
            </Info>
          </Hide>
          <Hide>
            <Info>
              <IconContainer variants={slideAnim.up}>
                  <FontAwesomeIcon icon={faPhone }/>
              </IconContainer>
              <motion.p variants={slideAnim.up}>+91 787-604-3626</motion.p>
            </Info>
          </Hide>
          <Hide>
            <Info>
              <IconContainer variants={slideAnim.up}>
                  <FontAwesomeIcon icon={faLinkedinIn }/>
              </IconContainer>
              <motion.p variants={slideAnim.up}><Link to="https://www.linkedin.com/in/devang-banta-9501b5207/" target='_blank'>https://www.linkedin.com/in/devang-banta-9501b5207/</Link></motion.p>
            </Info>
          </Hide>
          <Hide>
            <Info>
              <IconContainer variants={slideAnim.up}>
                  <FontAwesomeIcon icon={faGithubAlt}/>
              </IconContainer>
              <motion.p variants={slideAnim.up}><Link to="https://github.com/GitpreNeuR" target='_blank'>https://github.com/GitpreNeuR</Link></motion.p>
            </Info>
          </Hide>
          
          
        </ContactInfo>
    
        </ContactStyle>

      
    </>
  )
};

const ContactStyle = styled(Container)`
height:100vh;
flex-direction: column;
align-items: flex-start;
justify-content: center;

@media (max-width: 650px){
  padding: 2rem;
  h3{
    font-size: 1.6rem;
  }
}
`
const ContactInfo = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 100%;
button{
  margin-top: 1rem;
}
`
const IconContainer = styled(motion.div)`
background: var(--color-bg-2);
height: 3rem;
width: 3rem;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
`

const Info = styled(motion.div)`
display: flex;
align-items: center;
justify-content: center;
gap: 1rem;
margin-bottom: 2rem;

p{
  color:var(--color-text);
}



`;




export default Contact;