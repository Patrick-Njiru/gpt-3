import React from 'react'
import { Article } from '../../components'
import { blog1, blog2, blog3, blog4, blog5} from './imports'
import './blog.css'

const BLOGSDATA = [
  {
    image: blog2,
    date: 'Sep 26, 2021',
    title: 'GPT-3 and Open AI is the future. Let us explore how it is?'
  },
  {
    image: blog3,
    date: 'Sep 26, 2021',
    title: 'GPT-3 and Open AI is the future. Let us explore how it is?'
  },
  {
    image: blog4,
    date: 'Sep 26, 2021',
    title: 'GPT-3 and Open AI is the future. Let us explore how it is?'
  },
  {
    image: blog5,
    date: 'Sep 26, 2021',
    title: 'GPT-3 and Open AI is the future. Let us explore how it is?'
  }
]

const Blog = () => {
  return (
    <div className='blog section__padding' id='blog'>
      <div className='blog-heading'>
        <h1 className='gradient__text'>
          A lot is happening. We are blogging about it.
        </h1>
      </div>
      <div className='blog-container'>
        <div className='blog-groupA'>
          <Article imgURL={blog1} date={BLOGSDATA[0].date} title={BLOGSDATA[0].title} />
        </div>
        <div className='blog-groupB'>
          { BLOGSDATA.map((data, i) => <Article imgURL={data.image} date={data.date} title={data.title} key={i} />) }
        </div>
      </div>
    </div>
  )
}

export default Blog