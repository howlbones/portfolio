import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contacts.css'
import macImg from '../assets/mac-screen.png'
import emailIcon from '../assets/email_icon.png'
import telegramIcon from '../assets/telegram_icon.png'
import hhIcon from '../assets/HeadHunter_logo.png'

gsap.registerPlugin(ScrollTrigger);

function Contacts() {

  // Create refs for elements to be animated
  const containerRef = useRef(null);

  // UseEffect hook to trigger GSAP animations
  useEffect(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 100,
    })
    gsap.to(containerRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        markers: false,
        start: 'top 90%', // Trigger when the top of the element is 80% from the top of the viewport
        end: 'top 40%', // End animation when the top of the element is 30% from the top of the viewport
        scrub: true
      }
    });
  }, []);

  return (
    <div className='contacts w-[100%] relative z-1 pt-[100px]'>
      <div className="contacts__content-container max-w-[1000px] m-auto">
        <h2 className='contacts__heading text-center w-[100%] text-3xl'>Контакты</h2>
        <p className='contacts__few-words'>Ищете профессионала для вашего следующего проекта? Давайте обсудим, как я могу помочь вам достичь ваших целей. Свяжитесь со мной сегодня!</p>
        <div ref={containerRef} className="contacts__columns-container">
          <div className='contacts__links-container'>
            <p>Олег Герасименко</p>
            <a target='_blank' href="mailto:howllbones@gmail.com">
              <img src={emailIcon} alt="Email icon" />
              howllbones@gmail.com
            </a>
            <a target='_blank' href="https://t.me/SaiferSamurai">
              <img src={telegramIcon} alt="Telegram icon" />
            Telegram
            </a>
            <a target='_blank' href="https://spb.hh.ru/resume/59b436c6ff0b2c07cf0039ed1f4d6143714944">
              <img src={hhIcon} alt="hh.ru icon" />
            Резюме на hh.ru
            </a>
          </div>
          <img src={macImg} alt="Mac display" />
        </div>
      </div>
    </div>
  )
}

export default Contacts