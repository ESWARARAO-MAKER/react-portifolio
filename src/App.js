import React from 'react';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './home/Home';
import Education from './components/education/Education';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import ContactMe from './components/contactMe/ContactMe';
import Navbar from './components/navbar/Navbar';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<ContactMe/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
