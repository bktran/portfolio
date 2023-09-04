import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {SlSocialLinkedin} from 'react-icons/sl'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/baokhanhtran/" target="_blank" id='linkedin'> <SlSocialLinkedin size='2rem'/></a>
      <a href="https://github.com/bktran" target="_blank" id='github'> <FaGithub size="2rem"/></a>
    </div>
  )
}

export default HeaderSocials