import React from 'react'
import './article.css'

const Article = ({ imgURL, date, title }) => (
    <div className='article'>
      <div className='article-image'>
        <img src={imgURL} alt='blog-image' />
      </div>
      <div className='article-content'>
        <p>{date}</p>
        <h3>{title}</h3>
        <p>Read Full Article</p>
      </div>
    </div>
  )

export default Article