import React,{useState} from 'react'
import styled from 'styled-components'
import Hero from "../sections/Hero"
import About from "../sections/About";
import Projects from "../sections/Projects";
import Technologies from '../sections/Technologies';
import Contact from "../sections/Contact";
import ScrollToTop from '../components/ScrollToTop';
import Skills from '../sections/Skills';
import Loader from '../components/Loader';


function Home() {

  return (
    <>
   

      <>
        <Hero/>    
        <About/>
       
        <Skills/>
        <Projects />
        <Contact/>
        <ScrollToTop/>
        </>
  
    </>
  )
}

export default Home

