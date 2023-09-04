import React from 'react'
import './about.css'
import Me3 from '../../assets/navy.png'
import CTA from '../header/CTA'
import {useState} from 'react'

const About = () => {

  return (
    <section className='about-container'>

      <h5>A Little Bit</h5>
      <h2>About Me</h2>
      <div className="about-me">
        
        <div          className='about-me-image-container'>
          <div className="about-me-image">
              <img src={Me3} alt="Me 3 Image" />
          </div>
        </div>

        <div className="about-text-container">
          <div className='about-text'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

      </div>
        
      <div className='cta'>
        <CTA btnName = "Get In Touch!"/>
      </div>

    </section>
  )
}

export default About