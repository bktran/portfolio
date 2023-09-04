import React from 'react'
import './projects.css'
import ttt from '../../assets/tic-tac-toe.png'
import pigLatin from '../../assets/pig-latin.png'
import textBased from '../../assets/text-based-game.png'
import {FaGithub} from 'react-icons/fa'



const Projects = () => {
  return (
    <section className='projects-master-container' id='projects'> 
      <h5>What I've Done</h5>
      <h2>Projects</h2>

      <div className='projects-container'>
        <div className='tic-tac-toe-container'>
          <a href='https://github.com/bktran/Tic-Tac-Toe' target='_blank'> 
            <h3>
              <FaGithub size='.9rem'/> 
              Tic-Tac-Toe
            </h3>
          </a>
          <a href='https://github.com/bktran/Tic-Tac-Toe' target='_blank'>
            <img src={ttt} id='ttt-img'/>
          </a>
        </div>

        <div className='pig-latin-container'>
          <a href='https://github.com/bktran/Pig-Latin-Translator' target='_blank' >
            <h3>
              <FaGithub size='0.9rem'/>Pig Latin Translator
            </h3>
          </a>
          <a href='https://github.com/bktran/Pig-Latin-Translator' target='_blank'>
            <img src={pigLatin} id='pigLatin-img'/>
          </a>
        </div>

        <div className='text-based-container'>
          <a href='https://github.com/bktran/Text-based-game' target='_blank' >
            <h3>
              <FaGithub size='0.9rem'/> Text Based Story Game
            </h3> 
          </a>
           <a href='https://github.com/bktran/Text-based-game' target='_blank'>
            <img src={textBased} id='text-based-img'/>
           </a>
        </div>
        
        <div className='combat-bot-container'>
          <a > 
            <h3>
              <FaGithub size='0.9rem'/>Combat Bot
            </h3>
          </a>
          <a>
            <img id='combat-bot-img'alt='pic incoming'/>
          </a>
        </div>
      </div>

    </section>
  )
}

export default Projects