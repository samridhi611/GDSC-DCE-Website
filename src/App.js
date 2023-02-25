import {React,useState} from 'react'
import Footer from './components/Footer';
import Navbars from './components/Navbar';
import { Routes,Route } from 'react-router-dom';
// import Event from "./components/Event";
import Team from './components/Team';
import Aboutus from './components/Aboutus';
import REvent from './components/REvent';
import REvent2 from './components/ReEvent2';
import MainEvent from './components/MainEvent';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/Globalstyle";
import { lightTheme, darkTheme } from "./components/Themes"
import  {useDarkMode} from "./components/useDarkMode"
import Toggle from "./components/Toggler"
import REvent3 from './components/REvent3';
import CoviHack from './components/CoviHack';
const App = () => {
 
  const [theme, themeToggler, mountedComponent,tsrc,team,handshake] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

if(!mountedComponent) return <div/>
  return (
    <ThemeProvider theme={themeMode}>
    <>
    <GlobalStyles/>
    <div style={{width:"100%"}}>

      {/* <h1>Hello aliens this is DSC-DCE</h1> */}
      <Navbars/>
      <Toggle theme={theme} toggleTheme={themeToggler} tsrc={tsrc}/>
      <Routes>
        
        <Route exact path="/" element={<Aboutus theme={theme} handshake={handshake} team={team}/>}/>
        
        <Route path="/events" element={<MainEvent theme={theme}/>} />

        <Route path="/events/2021" element={<REvent theme={theme}/>} />

        <Route path="/events/2020" element={<REvent2 theme={theme}/>} />

        <Route path="/events/2022" element={<REvent3 theme={theme}/>} />

        <Route path="/team" element={<Team theme={theme}/>}/>

        <Route path="/hackathon" element={<CoviHack theme={theme}/>}/>
       
      </Routes>
      <Footer/>
    </div>
    </>
    </ThemeProvider>
  )
}

export default App
