import React from 'react'
import './projects.css'
import ttt from '../../assets/tic-tac-toe.png'
import pigLatin from '../../assets/pig-latin.png'
import textBased from '../../assets/text-based-game.png'


const Projects = () => {
  return (
    <section className='projects-master-container'>
      <h5>What I've Done</h5>
      <h2>Projects</h2>

      <div className='projects-container'>
        <div className='tic-tac-toe-container'>
          Tic-Tac-Toe
         <img src={ttt} id='ttt-img'/>
        </div>

        <div className='pig-latin-container'>
          Pig Latin Translator
         <img src={pigLatin} id='pigLatin-img'/>

        </div>

        <div className='text-based-container'>
          Text Based Game
         <img src={textBased} id='text-based-img'/>

        </div>
        
        <div className='combat-bot-container'>
          Combat Bot
          <img alt='pic incoming'/>
        </div>
      </div>

    </section>
  )
}

export default Projects