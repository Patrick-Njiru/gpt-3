import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../components'

const WhatGPT3 = () => {
  return (
    <div className='whatgpt3 section__margin' id='wgpt3'>
      <div className='whatgpt3-feature'>
        <Feature 
          id='whatgpt3-feature'
          title='What is GPT-3' 
          text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, provident accusantium? Accusantium repellat repudiandae labore distinctio tenetur ab voluptas iusto? Ducimus blanditiis laudantium harum, tempora dolor laboriosam sit cum nobis voluptatem! Quisquam corporis facilis recusandae eligendi eos cumque unde saepe.' 
        />
      </div>   
      <div className='whatgpt3-heading'>
        <h1 className='gradient__text'> The possibilities are beyond your imagination </h1>
        <p> Explore The Library </p>
      </div>
      <div className='whatgpt3-container'>
        <Feature 
          title='Chatbots' 
          text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea repellat, enim eos repellendus magni officia doloremque quod id in porro et nam molestias saepe commodi excepturi, ab blanditiis rerum voluptates.' 
        />
        <Feature 
          title='Knowledgebase' 
          text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea repellat, enim eos repellendus magni officia doloremque quod id in porro et nam molestias saepe commodi excepturi, ab blanditiis rerum voluptates.' 
        />
        <Feature 
          title='Education' 
          text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea repellat, enim eos repellendus magni officia doloremque quod id in porro et nam molestias saepe commodi excepturi, ab blanditiis rerum voluptates.' 
        />
      </div>
    </div>
  )
}

export default WhatGPT3