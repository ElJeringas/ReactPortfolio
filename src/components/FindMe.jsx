import React from 'react'
import findMebg from '../assets/images/findMe.svg'
import '../styles/findMe.css'
import github from '../assets/images/social networks/github.svg'
import linkedIn from '../assets/images/social networks/linkedIn.svg'
import whatsapp from '../assets/images/social networks/whatsapp.svg'

function FindMe() {
  return (
    <section className='findme-container' id='contact'>
      <div className='findme-content'>
        <div className='findme-title'>
          <h1>Find Me Elsewhere</h1>
        </div>
        <div className='social'>
        <a href="https://github.com/ElJeringas" target="_blank" rel="noopener noreferrer" alt="Github Profile">
          <img className='social-image' src={github} />
        </a>
        <a href="https://www.linkedin.com/in/santiago-sarmiento-064255178/" target="_blank" rel="noopener noreferrer" alt="LinkedIn Profile">
          <img className='social-image' src={linkedIn}/>
        </a>
        <a href="https://wa.me/593978996751" target="_blank" rel="noopener noreferrer" alt="Chat on WhatsApp">
          <img className='social-image' src={whatsapp}/>
        </a>
        </div>
      </div>
      <div className='findme-background'>
        <img src={findMebg} className='findme-image' alt=''/>
      </div>
    </section>
  )
}

export default FindMe