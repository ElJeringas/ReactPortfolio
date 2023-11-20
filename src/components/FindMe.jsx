import React from 'react'
import findMebg from '../assets/images/findMe.svg'
import '../styles/findMe.css'
import github from '../assets/images/social networks/github.svg'
import linkedIn from '../assets/images/social networks/linkedIn.svg'
import whatsapp from '../assets/images/social networks/whatsapp.svg'

function FindMe() {
  return (
    <div className='findme-container'>
      <div className='findme-content'>
        <div className='findme-title'>
          <h1>Find Me Elsewhere</h1>
        </div>
        <div className='social'>
        <img className='social-image' src={github}/>
        <img className='social-image' src={linkedIn}/>
        <img className='social-image' src={whatsapp}/>
        </div>
      </div>
      <div className='findme-background'>
        <img src={findMebg} className='findme-image' alt=''/>
      </div>
    </div>
  )
}

export default FindMe