import React from 'react'
import styled from 'styled-components'
import { Technologies } from '../styles/styles'
import { motion } from "framer-motion"
import { useScroll } from '../util/useScroll';
import { slideAnim } from "../animation"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/fontawesome-free-solid'

function Featured({title, imgSrc, text, link, technologies}) {
  const [ref, controls] = useScroll();

  return (
      <FeaturedProject animate={controls} ref={ref} variants={slideAnim.up}>
         
          <ImageWrapper>
         {/** */} <Image src={imgSrc} alt="project_image" />
          </ImageWrapper>
         <About>
           <Header>
             <p>Featured</p>
             <a href={link} target="_blank" rel="noreferrer"><h3>{title}</h3></a>
           </Header>
           <AboutText>
         <p>{text}</p>
           </AboutText>
           <More>
             <Technologies>
             {technologies?.map((technology) => (
               <li key={technology}>{technology}</li>
             ))}
             </Technologies>
             <a href={link} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCode}></FontAwesomeIcon></a>
           </More>
         </About>
      </FeaturedProject>
  )
}

const ImageWrapper=styled.div`


display:flex;
align-items:center;
justify-items:center;
border-radius:10px;
flex:1;

`;

const FeaturedProject = styled(motion.div)`
  margin-bottom: 2.5rem;
  
  
`;

const Header = styled.div`
padding: 1rem 2rem;
p{
  font-weight: bold;
  font-size: 0.7rem;
  color: var(--color-main)
}
`
const AboutText = styled.div`
  padding: 2rem;
height:fit-content;
  padding-bottom:1rem;
  background: var(--color-bg);
  overflow-y:scroll;
`
const More = styled.div`
padding: 1rem;
display: flex;
gap: 0.75rem;
align-items: center;
`

const About = styled.div`
  flex: 1;
`;



const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius:10px;
    
box-shadow:0px 0px 3px 3px var(--color-main);
   
    
`;

export default Featured;
