import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section className='contact-container' id='contact'>
      <h2>Contact Me!</h2>
      <form action="https://formspree.io/f/xaygjbrk"
      method="POST">
        <input type='text' name='Name' placeholder='Full Name' required/>
        
        <input type='email' name='Email' placeholder='Email' required/>
        <textarea name='Message' placeholder='Message' required></textarea>
        
        <button type='submit'>Send</button>
      </form>

    </section>
  )
}

export default Contact