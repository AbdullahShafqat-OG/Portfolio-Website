import './App.css';
import NavbarCustom from './Components/NavbarCustom.js';
import AboutMe from './Components/AboutMe.js';
import Projects from './Components/Projects.js';
import Contact from './Components/Contact.js';
import Footer from './Components/Footer.js';

import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

import './App.css';

function App() {
  return (
    <div className='bg-blue'>
      <NavbarCustom />
      <AboutMe/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
