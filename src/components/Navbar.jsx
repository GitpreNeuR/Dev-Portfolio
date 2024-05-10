import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faBars, faTimes, faSun } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ toggleTheme, theme }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);


  const { pathname } = useLocation();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMenuToggle = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <Container>
      <StyledNav>
        <Logo onClick={scrollTop}>
          <Link to="/">
            <h1>
              {'<'}<span>Devang </span>/{'>'}
            </h1>
          </Link>
        </Logo>
        {pathname === "/" && (
          <>
            <NavLinks className={isMenuActive ? "active" : ""}>
              <NavLink>
                <a href="#about" onClick={() => setIsMenuActive(false)}><span>01.</span> ABOUT</a>
              </NavLink>
              <NavLink>
                <a href="#skills" onClick={() => setIsMenuActive(false)}><span>02.</span> SKILLS</a>
              </NavLink>
              <NavLink>
                <a href="#projects" onClick={() => setIsMenuActive(false)}><span>03.</span> PROJECTS</a>
              </NavLink>
              <NavLink>
                <a href="#contact" onClick={() => setIsMenuActive(false)}><span>04.</span> CONTACT</a>
              </NavLink>
              <ThemeToggle>
                <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} onClick={toggleTheme} />
              </ThemeToggle> 

              
              
            </NavLinks>

            {/* MOBILE BURGER */}
            
            <Burger onClick={handleMenuToggle}>
              <FontAwesomeIcon icon={!isMenuActive ? faBars : faTimes} />
            </Burger>
           
          </>
        )}
       
      </StyledNav>
      
    </Container>
  );
};

const Container = styled(motion.div)`
  z-index: 1;
  position: fixed;
  left: 0;
  right: 0;
  background: linear-gradient(to bottom, var(--color-bg) 0%, rgba(0, 0, 0, 0) 100%);
  backdrop-filter: blur(40px);
`;

const StyledNav = styled(motion.nav)`
  max-width: 1400px;
  margin: auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;

  
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  background: transparent;
  padding: 1rem 2rem;

  @media (max-width: 700px) {
    background:var(--color-second);
    
    transform: translateX(${({ className }) => (className === "active" ? '0%' : '100%')});
    transition: 0.3s ease-in-out;
    flex-direction: column;
    
    z-index: 90;
    justify-content: center;
    position: fixed;
    left:0;
    top:0;
  
    width: 100%;
    height: 70vh;
  }
`;

const NavLink = styled.li`
  font-size: 0.8rem;
  transition:all 0.3s ease-in-out;
  font-weight:500;
  a span {
    color: var(--color-main);
    font-family: var(--font-mono);
    font-size: 0.7rem;
  }

  @media (max-width: 700px) {
    font-size: 1.6rem;
    
    a span {
      font-size: 1.2rem;
    }

    &:hover{
      transform: translateX(0.5rem);
    }
  }
`;

const Burger = styled.div`
  display: none;
  color: var(--color-main);
  font-size: 1.2rem;
  cursor:pointer;
  @media (max-width: 700px) {
    display: flex;
    align-items: center;
    background: var(--color-second);
    height: 40px;
    width: 40px;
    border-radius: 50%;
    z-index: 99;
    justify-content: center;
  }
`;

const ThemeToggle = styled.label`
  cursor: pointer;

  .fa-sun {
    color: yellow;
  }

  .fa-moon {
    color: grey;
  }
  @media (max-width: 700px) {
    display:none;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: 1.7rem;
    font-weight: semibold;
  }

  h1 span {
    color: var(--color-main);
  }
 
`;

export default Navbar;
