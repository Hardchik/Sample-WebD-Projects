import React from 'react';
import "./Home.css";
import {FaAngleDoubleDown} from 'react-icons/fa'
import logo from '../../Assets/Logo/kalpanacaps.png'
import homeImage from "../../Assets/Images/Home-Image.png"
import { motion } from 'framer-motion';


export default function index() {
  return (
    <div className='home'>
      <div className='hero-container'>
        <motion.div 
        className='hero'
        initial={{opacity:0, y:80}}
        animate={{opacity:1, y:0}}
        transition={{ease: [0.6, 0.01, -0.05, 0.95], duration:0.6}}>
          <div className='hero-content'>
            <div className='hero-header'>
              <img src={logo} alt="" />
              <div>
                <h1>Team Kalpana</h1>
                <p>Aeronautical Society of NSUT</p>
              </div>
            </div>
            <div className='hero-description'>
              <p>We at team kalpana are very laxy people always avoiding work. Content Team please fill these.</p>
              <a href='#about'>Know More</a>
            </div>
          </div>
          <div className='hero-image'>
            <img src={homeImage} alt="..." />
          </div>
        </motion.div>
        <div className='down-move'>
          <a className='down-link' href="#down"><FaAngleDoubleDown className='icon-down'/></a>
        </div>
      </div>

      <div id='about' className='about'>
        <div className='about-title'>
        <h1>Who are we</h1>
        <div className='bottom-border'></div>
        </div>
        <div className='about-description'>
          <p>Team Kalpana is a group of hard working, like-mided people who are enthusiastic about space exploration. We participate in various reputated competions like CANSAT and UAS and represented NSUT. I am getting out of words so will fill this thing with random sentences from now on. Afterall my job is to make the design and code it. I am no content writter. I have been a part of Team Kalpana from 7 months now but still i do not have much things to write about. I have some idea about this society and can write a thing or two, but times up.</p>
        </div>
      </div>

      <div className='team'>
        <h1 className='team-title'>The Team</h1>
        <div className='team-description'></div>
      </div>

      <div className='events'>
        <h1 className='events-title'>Events</h1>
        <div className='events-description'></div>
      </div>
      <div id="down"></div>
    </div>
  )
}
