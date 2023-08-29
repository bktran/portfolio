import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/Me.jpg'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Bao Khanh Tran</h1>
        <h5 className="text-light fullstack_dev">FullStack Developer</h5>
        <HeaderSocials />
        <CTA />

        <div className="me">
          <img src={Me} alt="me" className="me_img"/>
        </div>

        <a href="#contact" className="scroll__down"></a>
      </div>
    </header>
  )
}

export default Header