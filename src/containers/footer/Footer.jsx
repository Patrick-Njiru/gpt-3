import React from 'react'
import gpt3Logo from '../../assets/logo.svg'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer section__padding'>
      <div className='footer-heading'>
        <h1 className='gradient__text'> Do you want to step into the future before others </h1>
      </div>
      <div className='footer-btn'>
        <p> Request Early Access </p>
      </div>
      <div className='footer-links'>
        <div className='footer-logo'>
          <img src={gpt3Logo} alt='logo' />
          <p> Cretcherwood K12 182 DK Alknjkcb, All Rights Reserved </p>
        </div>
        <div className='footer-div'>
          <h4> Links </h4>
          <p> Overons </p>
          <p> Social Media </p>
          <p> Counters </p>
          <p> Contact </p>
        </div>
        <div className='footer-div'>
          <h4> Company </h4>
          <p> Terms and Conditions </p>
          <p> Privacy Policy </p>
          <p> Contact </p>
        </div>
        <div className='footer-div'>
          <h4> Get in Touch </h4>
          <p> Cretcherwood K12 182 DK Alknjkcb </p>
          <p> 085-123567 </p>
          <p> info@payme.net </p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2021 GPT-3, All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer