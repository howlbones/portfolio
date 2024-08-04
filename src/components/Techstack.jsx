import React, { useEffect, useRef } from 'react';
import StackIcon from "tech-stack-icons";
import './Techstack.css';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Techstack() {
  // Create refs for elements to be animated
  const containerRef = useRef(null);
  const reactIconRef = useRef(null);

  // UseEffect hook to trigger GSAP animations
  useEffect(() => {
    // Rotation animation on scroll
    gsap.to(reactIconRef.current, {
      rotation: 360,
      scrollTrigger: {
        trigger: reactIconRef.current,
        start: 'top 100%', // Start the rotation when the top of the element is 80% from the top of the viewport
        end: 'top 0%', // End the rotation when the top of the element is 20% from the top of the viewport
        scrub: true, // Smooth scrubbing
      },
    });
    gsap.from(containerRef.current, {
      opacity: 0,
      x: -500,
    })
    gsap.to(containerRef.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        markers: false,
        start: 'top 100%', // Trigger when the top of the element is 80% from the top of the viewport
        end: 'top 60%', // End animation when the top of the element is 30% from the top of the viewport
        scrub: true
      }
    });
  }, []);
  return (
    <section className='techstack w-[100%] h-[450px] relative z-1'>
      <div ref={containerRef} className="techstack__container">
        {/* <h2 className='techstack__heading text-center'>Технический стек</h2> */}
        <div className="techstack__items-container grid grid-cols-3 w-[100%] max-w-[700px] m-auto gap-[35px] pl-[25px] pr-[20px]">
          <div className="techstack__item-container">
            <div ref={reactIconRef}>
              <StackIcon className="techstack__item-icon" name="reactjs" />
            </div>
            <div className="techstack__item-name">
              REACT
            </div>
          </div>
          <div className="techstack__item-container">
            <StackIcon className="techstack__item-icon" name="redux" />
            <div className="techstack__item-name">
              REDUX
            </div>
          </div>
          <div className="techstack__item-container">
            <StackIcon className="techstack__item-icon" name="webpack" />
            <div className="techstack__item-name">
              WEBPACK
            </div>
          </div>
          <div className="techstack__item-container">
            <StackIcon className="techstack__item-icon" name="vitejs" />
            <div className="techstack__item-name">
              VITE
            </div>
          </div>
          <div className="techstack__item-container">
            <StackIcon className="techstack__item-icon" name="git" />
            <div className="techstack__item-name">
              GIT
            </div>
          </div>
          <div className="techstack__item-container">
            <StackIcon className="techstack__item-icon" name="figma" />
            <div className="techstack__item-name">
              FIGMA
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Techstack
