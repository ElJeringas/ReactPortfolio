import React from 'react'
import profilePhoto from '../assets/images/foto.png';
function Statement() {
  return (
    <div className='statement-container'>
        <div className='image-container'>
            <img src={profilePhoto} alt='' className='profile-image' />
        </div>
        <div className='text-container'>
            <h3>Hi there!</h3>
            <p>Hello there 👋🏻, I`m Santiago, an Electronics and Telecommunication engineer 🤖📶 based in Ecuador.</p>
            <p>While my field of expertise is communication networking, I developed programming and web development skills throughout my career.<br/>
            My experience covers Electronics, IT, Programming, Cisco Networking, and Telecommunications Networking.</p>
        </div>
    </div>
  )
}

export default Statement