import React from 'react';
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

const linkStyle = {
  textDecoration: 'none',
  color: 'white'
}

function App() {
  return ( 
    <div className='App'>
      <BrowserRouter>
        <div>
           <ul className="nav-bar">
              <li>
                <Link to='/'>
                  <img src={require('../src/images/vm-logo.png')} alt='logo' id='logo' />
                </Link>
              </li>
              <li className='pageLink'>
                <Link to='/#' style={linkStyle}>Home</Link>
              </li>
              <li className="pageLink">
                <Link to='/about' style={linkStyle}>About</Link>
              </li>
              <li className="pageLink">
                <Link to='/projects' style={linkStyle}>Projects</Link>
              </li>
              <li className="pageLink">
                <Link to='/contact' id="contact" style={linkStyle}>Contact</Link>
              </li>
          </ul>
        </div>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;