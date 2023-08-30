import React from 'react'
import './navigation.css'
import {useState} from 'react'


const Navigation = () => {

  const [activeNav, setActiveNav] = useState('#')
  
  return (
    <nav>
      <a href = "#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>🏠</a>

      <a href = "#about" onClick={() => setActiveNav('#about')}className={activeNav === '#about' ? 'active' : ''}>🙋‍♂️</a>

      <a href = "#projects"onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}>📂</a>

      <a href = "#contact"onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>☎</a>
    </nav>
  )
}

export default Navigation