import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Theme from './styles/Theme';
import GlobalStyle from './styles/GlobalStyles';
import CustomCursor from './components/Cursor';
import IndexPage from './pages/IndexPage';
import ArchivePage from './pages/ArchivePage';
import Loader from './components/Loader';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const [theme, setTheme] = useState('dark');
  const [isLoading,setIsLoading]=useState(true);
  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }



  useEffect(()=>{

    setTimeout(()=>{
      
      setIsLoading(false);
    },2000);
  },[]);

  return (
   <>
   
    <div className="App">
      <Theme theme={theme}>
        <CustomCursor />
        <GlobalStyle />
        {isLoading ? <Loader/> :
        <>
        <Navbar toggleTheme={toggleTheme} theme={theme}/>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/archive" element={<ArchivePage />} />
        </Routes>
        <Footer/>
        </>
        }
        
      </Theme>
    </div>

    </>
  
  );
}

export default App;