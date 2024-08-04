import React, { useEffect, useRef } from 'react';
import './Hero.css'
import bg from '../assets/bg.png'
import SlidingDiagonals from './SlidingDiagonals'
import TypewriterText from './TypewriterText'
import { gsap } from "gsap";

function Hero(props) {
  // Create refs for elements to be animated
  const heroContainerRef = useRef(null);
  const heroAuthorRef = useRef(null);

  // UseEffect hook to trigger GSAP animations
  useEffect(() => {
    gsap.from(heroAuthorRef.current, {
      opacity: 0
    });
    gsap.to(heroAuthorRef.current, {
      opacity: 1,
      duration: 2
    });
  }, []);

  const executeScroll = () => {
    const element = document.querySelector(".process");
    element.scrollIntoView({ behavior: "smooth" });
  };   

  return (
    <div style={{backgroundImage: `url(${bg})`}} className='hero w-full h-svh text-cente max-w-[100vw] overflow-hidden top-0 z-0'>
      <SlidingDiagonals />
      <div className="hero__container">
        <div  ref={heroContainerRef} className="hero__glass-container glass-bg z-10" onClick={executeScroll}>
          <span className='hero__glass-text_static'>Frontend </span>
          <TypewriterText />
        </div>
        <div ref={heroAuthorRef} className="hero__content">
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
