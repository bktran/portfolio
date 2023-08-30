import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/Me.jpg'
import me2 from '../../assets/me-2.png'
import me3 from '../../assets/me-3.png'
import me4 from '../../assets/me-4.png'
import meHan from '../../assets/me-han.png'

import HeaderSocials from './HeaderSocials'
import {useState} from 'react'

const Header = () => {
  const imgArr = [Me, me2, me3, me4, meHan]
  const [index, setIndex] = useState(0)
  const [myImage, setMyImage] = useState(imgArr[0])

  const changeImg = () => {
    let newIndex = (index + 1) % imgArr.length; 
    setIndex(newIndex);
    setMyImage(imgArr[newIndex]);
}
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Bao Khanh Tran</h1>
        <h5 className="text-light fullstack_dev">FullStack Developer | 
        Navy Veteran</h5>
        <HeaderSocials />
        <CTA />

        <div className="me">
          <img src={myImage} alt="me" className="me_img" onClick={changeImg}/>
        </div>

        <a href="#contact" className="scroll__down"></a>
      </div>
    </header>
  )
}

export default Header