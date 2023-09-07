import  { useEffect } from 'react';
import { gsap } from 'gsap';
import profilePhoto from '../assets/images/foto.png';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import '../styles/about.css'; // Import your CSS file
import blob from '../assets/images/blob.svg';
import men from '../assets/images/men.svg'

function About() {
  const [text] = useTypewriter({
    words: [' Santiago', ' Frontend Engineer', ' Heraldo'],
    loop: {},
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
      <div className='content-left'>
        <div className='image-container'>
          <img src={profilePhoto} alt='' className='profile-image' />
        </div>
          <img className='background-photo' src={blob} alt='' />
        <div className='greetings'>
          <h1 className='greetings-h1'>Hi</h1>
        </div>
        <div className='text-generated'>
          <h2>
            I`m
            <span style={{ fontWeight: 'bold', background: 'none' }}>{text}</span>
            <Cursor />
          </h2>
        </div>
      </div>
      <div className='stack-container'>
        <h2 className='stack-title'>Tech Stack</h2>
        <div className='counter-grid'>
        <div className='box'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
        </div>
        <div className='box'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
        </div>
        <div className='box'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
        </div>
        <div className='box'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
        </div>
        <div className='box'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
        </div>
        <div className='box'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
        </div>
        <div className='box'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" />
        </div>
        <div className='box'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
        </div>
        <div className='box'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" />
        </div>
        <div className='box'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" />
        </div>
        <div className='box'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
        </div>
      </div>
      <div className='button-about'>
        <button>More</button>
      </div>
      </div>

    </div>
  );
}

export default About;
