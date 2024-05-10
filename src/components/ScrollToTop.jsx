import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { ChevronUp } from 'lucide-react';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <ScrollToTopButtonStyled isVisible={isVisible} onClick={scrollToTop}>
        <ChevronUp size={28} className="up-icon" strokeWidth={3} />
      </ScrollToTopButtonStyled>
    </>
  );
}

export default ScrollToTop;

const ScrollToTopButtonStyled = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  z-index: 99;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: 0.2s ease-in-out;

  .up-icon{
    position:absolute;
    right:25%;
    bottom:25%;
  }
  
`;

