import React from 'react'
import './header.css'
import People from '../../assets/People.png'
import Ai from '../../assets/Ai.png'

const Header = () => {
  return (
    <div className='header section__padding' id='home'>
      <div className='header-content'>
        <h1 className='gradient__text'>
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <div className='header-input__container'>
          <input type='email' placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>
        <div className='header-people'>
          <img src={People} alt='people' width='181.79px' height='38px'/>
          <p>1600 people requested access a visit in the last 24 hours</p>
        </div>
      </div>
      <div className='header-image'>
        <img src={Ai} alt='Ai' width='100%' height='100%'/>
      </div>
    </div>
  )
}

export default Header