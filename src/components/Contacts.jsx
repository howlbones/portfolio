import React from 'react'
import './Contacts.css'
import macImg from '../assets/mac-screen.png'
import emailIcon from '../assets/email_icon.png'
import telegramIcon from '../assets/telegram_icon.png'
import hhIcon from '../assets/HeadHunter_logo.png'

function Contacts() {
  return (
    <div className='contacts w-[100%] relative z-1 pt-[100px]'>
      <div className="contacts__content-container max-w-[1000px] m-auto">
        <h2 className='contacts__heading text-center w-[100%] text-3xl'>Контакты</h2>
        <p className='contacts__few-words'>Ищете профессионала для вашего следующего проекта? Давайте обсудим, как я могу помочь вам достичь ваших целей. Свяжитесь со мной сегодня!</p>
        <div className="contacts__columns-container">
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