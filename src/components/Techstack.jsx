import React from 'react'
import StackIcon from "tech-stack-icons";
import './Techstack.css';

function Techstack() {
  return (
    <section className='techstack w-[100%] h-[450px] relative z-1'>
      <div className="techstack__container pt-[60px]">
        {/* <h2 className='techstack__heading text-center'>Технический стек</h2> */}
        <div className="techstack__items-container grid grid-cols-3 w-[100%] max-w-[700px] m-auto gap-[35px] pl-[25px] pr-[20px]">
          <div className="techstack__item-container">
            <StackIcon className="techstack__item-icon" name="reactjs" />
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
