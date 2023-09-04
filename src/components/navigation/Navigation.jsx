import React from 'react'
import './navigation.css'
import { useState } from 'react'
import { BiHome } from "react-icons/bi"
import { RxPerson } from "react-icons/rx"
import { AiOutlineProject } from "react-icons/ai"
import { TfiEmail } from "react-icons/tfi"


const Navigation = () => {

  const [activeNav, setActiveNav] = useState('#')
  
  return (
    <nav>
      <a href = "#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHome size='2rem'/></a>

      <a href = "#about" onClick={() => setActiveNav('#about')}className={activeNav === '#about' ? 'active' : ''}><RxPerson size='2rem'/></a>

      <a href = "#projects"onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><AiOutlineProject size='2rem'/></a>

      <a href = "#contact"onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TfiEmail size='2rem'/></a>
    </nav>
  )
}

export default Navigation