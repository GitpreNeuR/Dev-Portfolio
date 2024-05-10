import React from 'react'
import {motion} from 'framer-motion'
import styled from 'styled-components'
import Skill from '../components/Skill'
import SkillData from '../components/SkillData'


function Skills() {

  return (
   <>
   <StyledSkills id="skills">
   <Header><span>02.</span> SKILLS</Header>
   {/*<SkillPieChart/>*/}
   <SkillGrid>
   {
        SkillData.map((data,index)=>{
          return(
            <>
          <Skill key={index} image={data.image} progress={data.progress} />
          </>
          )
        })
      }
   </SkillGrid>
   </StyledSkills>
   </>
  )
}

export default Skills

const StyledSkills = styled(motion.div)`
  max-width: 100%;
  height:100%;
  padding: 5rem 2rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Header = styled(motion.h2)`
  padding-bottom: 2rem;
  display: inline-block;
`;

const SkillGrid=styled.div`
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:16px;

  @media (max-width: 700px) {
    grid-template-columns:repeat(3,1fr);

  }
`;