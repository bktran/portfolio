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
import { MdOutlineArrowLeft, MdOutlineArrowRight } from 'react-icons/md'
import { GoDotFill } from 'react-icons/go'
import { click } from '@testing-library/user-event/dist/click'

const Header = () => {
  const imgArr = [Me, me2, me3, me4, meHan]
  const [index, setIndex] = useState(0)
  const [myImage, setMyImage] = useState(imgArr[0])

  const changeImgFwd = () => {
    let newIndex = (index + 1) % imgArr.length
    setIndex(newIndex)
    setMyImage(imgArr[newIndex])
  }
  
  const changeImgBack = () => {
    let newIndex = index - 1
    if (newIndex < 0){
      newIndex = imgArr.length - 1
    }
    setIndex(newIndex)
    setMyImage(imgArr[newIndex])
  }

  const handleDotClick = (clickedIndex) => {
    console.log(clickedIndex)
    setIndex(clickedIndex)
    setMyImage(imgArr[clickedIndex])

  }

    // useEffect(() => {
    //   console.log('use effect ran')
    // })


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
          <img src={myImage} alt="me" className="me_img" onClick={() => {changeImgFwd()}}/>
        </div>


        <div className='picNav'>
          <a id='nav-arrow-left'><MdOutlineArrowLeft onClick={() => {changeImgBack()}}size='4rem'/></a>

          {imgArr.map( (image, idx) => (<a key={idx} onClick={() => {handleDotClick(idx)}}><GoDotFill size='2rem' className={idx === index ? 'active-dot' : 'pic-dot'}/></a>))}

          <a id='nav-arrow-right'><MdOutlineArrowRight onClick ={() => {changeImgFwd()}}size='4rem'/></a>
        </div>

        <a href="#contact" className="scroll__down"></a>
      </div>
    </header>
  )
}

export default Header