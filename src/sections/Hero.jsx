import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Description, Hide } from "../styles/styles";
import { slideAnim, staggerAnim } from "../animation";

import PlaySong from "../components/PlaySong";
import song from "../assets/videos/heatwaves.mp3";

import Circles from "../components/Circles";

const HeroSection = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Replace with the actual path to your CV file
    link.download = "resume.pdf"; // Set the desired filename
    link.click();
  };
  return (
    <>
      <StyledHero variants={staggerAnim} initial="hidden" animate="show">
        <Circles />

        <Section>
          <Description>
            <motion.div>
              <Hide>
                <motion.h2 variants={slideAnim.up}>Hi, my name is </motion.h2>
              </Hide>
              <Hide>
                <motion.h2 variants={slideAnim.up}>
                  <span>Devang Banta</span>
                </motion.h2>
              </Hide>
            </motion.div>

            <ButtonContainer>
              <Hide>
                <motion.button
                  onClick={handleDownload}
                  variants={slideAnim.left}
                >
                  Resume
                </motion.button>
              </Hide>
            </ButtonContainer>
          </Description>
        </Section>
        <PlaySong songUrl={song} />
      </StyledHero>
    </>
  );
};

const StyledHero = styled(motion.div)`
  height: 100vh;
  display: flex;
  position: relative;

  align-items: center;
  justify-content: center;

  padding: 5rem 2rem;

  p {
    padding: 0 0 1.5rem;
  }
  h2 {
    font-size: 1.12rem;
    font-weight:400;
    margin-bottom: 0rem;
    span {
      font-family: "Poppins", sans-serif;
      font-size: 4rem;
      font-weight: 800;
    }
  }
  
`;

const ButtonContainer = styled.div`
  display: flex;
`;
const Section = styled(motion.div)`
  position: absolute;
  padding: 1.2rem;
`;
export default HeroSection;
