import React from 'react'
import './about.css'
import Me3 from '../../assets/navy.png'
import CTA from '../header/CTA'
import {useState} from 'react'

const About = () => {

  return (
    <section className='about-container' id='about'>

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
            Hi, I'm Bao. After serving 6 years in the US Navy as a Nuclear Operator, I pursued Computer Science degree and transitioned into Full Stack Development. I have been developing skills in HTML/CSS/JavaScript, ReactJS, Ruby on Rails, and PostgreSQL to develope different apps. With a foundation in the Navy's precision and discipline, combined with my tech skills, I am committed to creating impactful and efficient web applications.
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