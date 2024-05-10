import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-header: ${props => props.theme.headerColor};
    --color-text: ${props => props.theme.textColor};
    --color-main: ${props => props.theme.mainColor};
    --color-bg: ${props => props.theme.backgroundColor};
    --color-nav: ${props => props.theme.navBackground};
    --color-bg-2: ${props => props.theme.secondBackground};
    --color-border: ${props => props.theme.borderColor};
    --color-second: ${props => props.theme.secondColor};
    --color-gradient: ${props => props.theme.gradientColor};
    --font-mono: "Roboto Mono", sans-serif;
    --font-sans: 'Poppins', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  html {
    scroll-behavior: smooth;  
    overflow-x:hidden;

  }

  ::-webkit-scrollbar {
    display: none;
  }


  body {
    transition: all 0.2s ease;
    letter-spacing: 1px;
    overflow-x: hidden;
    font-family: var(--font-sans);
    background-color: var(--color-bg);
    color: var(--color-header);
  }

  button {
    letter-spacing: 1px;
    color: var(--color-main);
    cursor: pointer;
    font-weight:semibold;
    font-size:1.15rem;
    padding: 1rem 1.5rem;
    border: none;
    border-radius: 5px;
    background: var(--color-second);
    transition: all 0.2s ease-in-out;
    &:hover {
      background: var(--color-main);
      color: var(--color-second)
    }
  }

  .loader-boxes {
    --size: 32px;
    --duration: 800ms;
    height: calc(var(--size) * 2);
    width: calc(var(--size) * 3);
    position: relative;
    transform-style: preserve-3d;
    transform-origin: 50% 50%;
    margin-top: calc(var(--size) * 1.5 * -1);
    transform: rotateX(60deg) rotateZ(45deg) rotateY(0deg) translateZ(0px);
  }
  
  .loader-boxes .loader-box {
    width: var(--size);
    height: var(--size);
    top: 0;
    left: 0;
    position: absolute;
    transform-style: preserve-3d;
  }
  
  .loader-boxes .loader-box:nth-child(1) {
    transform: translate(100%, 0);
    -webkit-animation: box1 var(--duration) linear infinite;
    animation: box1 var(--duration) linear infinite;
  }
  
  .loader-boxes .loader-box:nth-child(2) {
    transform: translate(0, 100%);
    -webkit-animation: box2 var(--duration) linear infinite;
    animation: box2 var(--duration) linear infinite;
  }
  
  .loader-boxes .loader-box:nth-child(3) {
    transform: translate(100%, 100%);
    -webkit-animation: box3 var(--duration) linear infinite;
    animation: box3 var(--duration) linear infinite;
  }
  
  .loader-boxes .loader-box:nth-child(4) {
    transform: translate(200%, 0);
    -webkit-animation: box4 var(--duration) linear infinite;
    animation: box4 var(--duration) linear infinite;
  }
  
  
  .loader-boxes .loader-box > div {
    --background: #54DAC5;
    --top: auto;
    --right: auto;
    --bottom: auto;
    --left: auto;
    --translateZ: calc(var(--size) / 2);
    --rotateY: 0deg;
    --rotateX: 0deg;
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--background);
    top: var(--top);
    right: var(--right);
    bottom: var(--bottom);
    left: var(--left);
    transform: rotateY(var(--rotateY)) rotateX(var(--rotateX)) translateZ(var(--translateZ));
  }
  
  .loader-boxes .loader-box > div:nth-child(1) {
    --top: 0;
    --left: 0;
  }
  
  .loader-boxes .loader-box > div:nth-child(2) {
    --background: #145af2;
    --right: 0;
    --rotateY: 90deg;
  }
  
  .loader-boxes .loader-box > div:nth-child(3) {
    --background: #447cf5;
    --rotateX: -90deg;
  }
  
  .loader-boxes .loader-box > div:nth-child(4) {
    --background: #DBE3F4;
    --top: 0;
    --left: 0;
    --translateZ: calc(var(--size) * 3 * -1);
  }
  
  @-webkit-keyframes box1 {
    0%, 50% {
      transform: translate(100%, 0);
    }
  
    100% {
      transform: translate(200%, 0);
    }
  }
  
  @keyframes box1 {
    0%, 50% {
      transform: translate(100%, 0);
    }
  
    100% {
      transform: translate(200%, 0);
    }
  }
  
  @-webkit-keyframes box2 {
    0% {
      transform: translate(0, 100%);
    }
  
    50% {
      transform: translate(0, 0);
    }
  
    100% {
      transform: translate(100%, 0);
    }
  }
  
  @keyframes box2 {
    0% {
      transform: translate(0, 100%);
    }
  
    50% {
      transform: translate(0, 0);
    }
  
    100% {
      transform: translate(100%, 0);
    }
  }
  
  @-webkit-keyframes box3 {
    0%, 50% {
      transform: translate(100%, 100%);
    }
  
    100% {
      transform: translate(0, 100%);
    }
  }
  
  @keyframes box3 {
    0%, 50% {
      transform: translate(100%, 100%);
    }
  
    100% {
      transform: translate(0, 100%);
    }
  }
  
  @-webkit-keyframes box4 {
    0% {
      transform: translate(200%, 0);
    }
  
    50% {
      transform: translate(200%, 100%);
    }
  
    100% {
      transform: translate(100%, 100%);
    }
  }
  
  @keyframes box4 {
    0% {
      transform: translate(200%, 0);
    }
  
    50% {
      transform: translate(200%, 100%);
    }
  
    100% {
      transform: translate(100%, 100%);
    }
  }
  
  
  
  

  a {
    text-decoration: none;
    color: var(--color-header);
    &:hover {
      color: var(--color-main);
    }
  }

  p {
    color: var(--color-text);
    line-height: 150%;
  }

  p span {
    color: var(--color-header);
  }

  h1 {
    font-size: 4rem;
  }

  h2{
    font-weight: bolder;
    font-size: 1.6rem;
    color: var(--color-header);    
    margin-bottom: 2rem;
    span{
        font-family: var(--font-mono);
        font-size: 1.2rem;
        background-image: var(--color-gradient);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
  } 

  h3 {
    font-size: 1.2rem;
  }

  h4 {
    font-weight: bold;
    font-size: 1rem;
  }
  li{
    list-style: none;
  }
  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background-color: var(--color-bg-2);
  }

  *::-webkit-scrollbar-thumb {
    background: var(--color-header);
    border: transparent;
    border-radius: 8px;
  }

  textarea, input{
    padding: 1rem;
    font-size: 0.8rem;
    font-family: var(--font-sans);
    width: 100%;
    margin-bottom: 1rem;
    border: none;
    background: var(--color-bg);
    border-radius: 10px;
      color: var(--color-text);
  }

  input::placeholder,  textarea::placeholder {
  color: var(--color-text);
  }

  table{
    width: 100%;
    font-size: 0.8rem;
  }
  th, td{
      padding: 0.5rem;
  }
  th{
      text-align: left;
      color: var(--color-header);
  }
  td{
      span, a{
          margin-right: 1rem;
          color: var(--color-header);
      }
  }
  td:first-child{
      color: var(--color-text);
  }
  @media (max-width: 650px) {
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }
  tr{
    padding: 1rem 0;
    border-bottom: 2px solid var(--color-bg-2);
  }
}
`;

export default GlobalStyle;