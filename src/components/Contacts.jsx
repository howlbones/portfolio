import React from 'react'
import './Contacts.css'

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
              <img src="./src/assets/email_icon.png" alt="Email icon" />
              howllbones@gmail.com
            </a>
            <a target='_blank' href="https://t.me/SaiferSamurai">
              <img src="./src/assets/telegram_icon.png" alt="Telegram icon" />
            Telegram
            </a>
            <a target='_blank' href="https://spb.hh.ru/resume/59b436c6ff0b2c07cf0039ed1f4d6143714944">
              <img src="./src/assets/HeadHunter_logo.png" alt="hh.ru icon" />
            Резюме на hh.ru
            </a>
          </div>
          <img src="./src/assets/mac-screen.png" alt="Mac display" />
        </div>
      </div>
    </div>
  )
}

export default Contacts