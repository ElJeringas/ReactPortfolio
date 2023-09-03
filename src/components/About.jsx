import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import profilePhoto from '../assets/images/foto.png';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import '../styles/about.css'; // Import your CSS file

function About() {
  const [ text ] = useTypewriter({
    words: [' Santiago', ' Frontend Engineer', ' Heraldo'],
    loop: {},
  });

  const [ about ] = useTypewriter({
    words: ['I`m a passionate engineer based in Ecuador'],
    loop: false,
  });

  useEffect(() => {
    // Initialize GSAP animation
    gsap.registerPlugin();

    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    // Define the animation
    tl.to('.profile-image', {
      duration: 2,
      scale: 1.1,
      ease: 'power4.inOut',
    });

    // Adjust the animation parameters to your liking

    return () => {
      // Clean up GSAP animation on unmount
      tl.kill();
    };
  }, []);

  return (
    <div className='about-container'>
      <div className='image-container'>
        <img src={profilePhoto} alt='' className='profile-image' />
      </div>
      <div className='overlay-text'>
        <h1 className='background-text'>Hi</h1>
        <h1 className='background-name'>
          I'm     
          <span style={{ fontWeight: 'bold',   background: 'none' }}>
            {text}
          </span>
          <Cursor />
        </h1>
      </div>
      <div className='about-text'>
        <h1 className='background-about'>
            I`m a passionate engineer based in Ecuador.
        </h1>
      </div>
    </div>
  );
}

export default About;
