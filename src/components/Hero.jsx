import React from 'react'
import './Hero.css'
import bg from '../assets/bg.png'
import SlidingDiagonals from './SlidingDiagonals'
import TypewriterText from './TypewriterText'

function Hero(props) {
  const executeScroll = () => {
    const element = document.querySelector(".process");
    element.scrollIntoView({ behavior: "smooth" });
  };   
  return (
    <div style={{backgroundImage: `url(${bg})`}} className='hero w-full h-svh text-center overflow-hidden top-0 z-0'>
      <SlidingDiagonals />
      <div className="hero__container">
        <div className="hero__glass-container glass-bg z-10" onClick={executeScroll}>
          <span className='hero__glass-text_static'>Делаю сайты </span>
          <TypewriterText />
        </div>
        <div className="hero__content">
          <div className="hero__author">
            <h2>ОЛЕГ ГЕРАСИМЕНКО</h2>
            <p>Frontend Веб Разработчик</p>
          </div>
          {/* <div style={{backgroundImage: `url(${macImg})`}} className="hero__model absolute bottom-[100px] left-0"></div> */}
        </div>
      </div>
    </div>
  )
}

export default Hero
