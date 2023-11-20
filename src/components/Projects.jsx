import React from 'react';
import ProjectThumbnail from './ProjectThumbnail';
import '../styles/projects.css';

import board from '../assets/images/Thumbnails/Board-Game.svg';
import farm from '../assets/images/Thumbnails/Farm.svg';
import hotel from '../assets/images/Thumbnails/Hotel Booking.svg';
import marketplace from '../assets/images/Thumbnails/Marketplace.svg';
import pokemon from '../assets/images/Thumbnails/Pokemon.png';
import spoonacular from '../assets/images/Thumbnails/Spoonacular.svg';
import html from '../assets/images/icons/html5-original.svg'
import css from '../assets/images/icons/css3-original.svg'
import js from '../assets/images/icons/javascript-original.svg'
import mui from '../assets/images/icons/materialui-plain.svg'
import react_icon from '../assets/images/icons/react-original.svg'
import tailwind from '../assets/images/icons/tailwindcss-plain.svg'
import py from '../assets/images/icons/python-original.svg'
import django from '../assets/images/icons/django-plain-wordmark.svg'
import opencv from '../assets/images/icons/opencv-original.svg'
import numpy from '../assets/images/icons/numpy-original.svg'
import raspberry from '../assets/images/icons/raspberrypi-original.svg'
import restaurant from '../assets/images/Thumbnails/restauran.png'


function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Restaurant Website',
      description: 'Restaurant website, photos videos and dishes 🍽️🍴.',
      img: restaurant,
      url: 'https://restaurant-website-sf-bq66.vercel.app/',
      tech:[html,css,js,react_icon,mui],
    },
    {
      id: 2,
      title: 'Hotel Booking Website',
      description: 'Hotel website page 🏨.',
      img: hotel,
      url: 'https://booking-website-eight.vercel.app/',
      tech:[html,css,js,react_icon,mui],
    },
    {
      id: 3,
      title: 'Spoonacular',
      description: 'Food recipes and dishes from everywhere🌎',
      img: spoonacular,
      url: 'https://project1url.com',
      tech:[html,css,js,react_icon,mui],
    },
    {
      id: 4,
      title: 'Farm-Management',
      description: 'Farming managament, breeds control and more... 🧑🏻‍🌾🧺',
      img: farm,
      url: 'https://project1url.com',
      tech:[html,css,js,react_icon,mui],

    },
    {
      id: 5,
      title: 'Marketplace',
      description: 'Market place using django and HTML 🏪🫙',
      img: marketplace,
      url: 'https://project1url.com',
      tech:[py,django,html,css,tailwind],

    },
    {
      id: 6,
      title: 'Inclusive Board Game',
      description: 'Quis laborum consequat ea sit anim qui reprehenderit ipsum in est tempor commodo sint ex.',
      img: board,
      url: 'https://project1url.com',
      tech:[py,opencv,numpy,raspberry],

    },
    {
      id: 7,
      title: 'Pokemon',
      description: 'Quis laborum consequat ea sit anim qui reprehenderit ipsum in est tempor commodo sint ex.',
      img: pokemon,
      url: 'https://project1url.com',
      tech:[html,css,js,react_icon,tailwind],
    },
  ];

  return (
    <div>
      <div className='projects-heading'>
        <h1>Projects</h1>
      </div>
      <div className='projects-thumbnails'>
      {projects.map((project, index) => (
        <div className='project-card' key={index}>
          <ProjectThumbnail {...project} />
        </div>
      ))}
    </div>
    </div>

  );
}

export default Projects;
