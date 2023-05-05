import React from 'react'
import './features.css'
import { Feature } from '../../components'


const Features = () => {
  const featuresData = [
    {
      title: 'Improving end distrusts instantly',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eos dolorum beatae sit deserunt repellat possimus, et earum fugit harum.'
    },
    {
      title: 'Become the tended active',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eos dolorum beatae sit deserunt repellat possimus, et earum fugit harum.'
    },
    {
      title: 'Message or am nothing',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eos dolorum beatae sit deserunt repellat possimus, et earum fugit harum.'
    },
    {
      title: 'Really boy low county',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eos dolorum beatae sit deserunt repellat possimus, et earum fugit harum.'
    },
  ]

  return (
    <div className='features section__padding' id='features'>
      <div className='features-heading'>
        <h1 className='gradient__text'>
          The future is now and you just need to realize it. Step into the future today & make it happen.
        </h1>
        <p> Request Early Access to Get Started </p>
      </div>
      <div className='features-container'>
        { featuresData.map((data, i) => <Feature title={data.title} text={data.text} key={i} />) }
      </div>
    </div>
  )
}

export default Features