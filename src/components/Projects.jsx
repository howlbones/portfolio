import React from 'react'
import './Projects.css'
import gpt3Img from '../assets/gpt3-landing.webp'
import gerichtImg from '../assets/Gericht.webp'
import chessImg from '../assets/chess-club.webp'
import cvImg from '../assets/cv-builder.webp'
import todoImg from '../assets/todo-app.webp'
import restaurantImg from '../assets/restaurant-menu.webp'
import weatherImg from '../assets/weather-app.webp'
import onlineFromImg from '../assets/online-form.webp'
import adminImg from '../assets/admin-dashboard.webp'
import libraryImg from '../assets/library-app.webp'

function Project({index, img, name, tools, link, github, noscroll}) {
  return (
    <div className='project'>
      <div className={'projects_project_' + index}>
        <h3 className="project__name">{name}</h3>
        <a target='_blank' href={link}>
          <div className={noscroll ? 'project__img-container project_noscroll' : 'project__img-container'}>
            <img className='project__img' src={img} alt="project image" />
          </div>
        </a>
        <div className='project__description'>
          <p className="project__tools">
            {'{ ' + tools + ' }'} 
          </p>
          <a target='_blank' href={github}>{'Github'}</a>
        </div>
      </div>
    </div>
  )
}

function Projects() {

  const projects = [
    {
      img: gpt3Img,
      name: 'Лендинг GPT-3',
      tools: 'React, Vite, БЭМ методология',
      link: 'https://howlbones.github.io/gpt3-landing/',
      github: 'https://github.com/howlbones/gpt3-landing',
      noscroll: false,
    },
    {
      img: gerichtImg,
      name: 'Лендинг ресторана Gericht',
      tools: 'React, Vite, БЭМ методология',
      link: 'https://howlbones.github.io/gerich-restaurant/',
      github: 'https://github.com/howlbones/gerich-restaurant',
      noscroll: false,
    },
    {
      img: chessImg,
      name: 'Лендинг шахматного турнира',
      tools: 'HTML, CSS, JS',
      link: 'https://howlbones.github.io/black-knights-club-showcase/',
      github: 'https://github.com/howlbones/black-knights-club-showcase',
      noscroll: false,
    },
    {
      img: cvImg,
      name: 'Приложение: Конструктор резюме',
      tools: 'React, Vite',
      link: 'https://cv-application-jfk711tr3-heresywolves-projects.vercel.app/',
      github: 'https://github.com/howlbones/cv-application',
      noscroll: true,
    },
    {
      img: {todoImg},
      name: 'Приложение: Таск-менеджер',
      tools: 'HTML, CSS, JS, Webpack',
      link: 'https://howlbones.github.io/todo-list/',
      github: 'https://github.com/howlbones/todo-list',
      noscroll: true,
    },
    {
      img: {restaurantImg},
      name: 'Сайт-меню ресторана',
      tools: 'HTML, CSS, JS, Webpack',
      link: 'https://howlbones.github.io/restaurant-menu/',
      github: 'https://github.com/howlbones/restaurant-menu',
      noscroll: true,
    },
    {
      img: {weatherImg},
      name: 'Приложение: прогноз погоды',
      tools: 'HTML, CSS, JS, Webpack',
      link: 'https://howlbones.github.io/weather-app/',
      github: 'https://github.com/howlbones/weather-app',
      noscroll: true,
    },
    {
      img: {onlineFromImg},
      name: 'Онлайн форма',
      tools: 'HTML, CSS, JS',
      link: 'https://howlbones.github.io/online-form/',
      github: 'https://github.com/howlbones/online-form',
      noscroll: true,
    },
    {
      img: {adminImg},
      name: 'Панель администратора',
      tools: 'HTML, CSS, JS',
      link: 'https://howlbones.github.io/admin-dashboard/',
      github: 'https://github.com/howlbones/admin-dashboard',
      noscroll: true,
    },
    {
      img: {libraryImg},
      name: 'Приложение: Онлайн библиотека',
      tools: 'HTML, CSS, JS',
      link: 'https://howlbones.github.io/library-app/',
      github: 'https://github.com/howlbones/library-app',
      noscroll: true,
    },
  ]

  return (
    <div className='projects w-[100%] relative z-1 pt-[100px]'>
      <div className="projects__content-container max-w-[1000px] m-auto">
        <h2 className='projects__heading text-center w-[100%] text-3xl'>Мои проeкты</h2>
        <div className="projects__projects-container">
            {projects.map((project, index) => (
              <Project 
                key={index} 
                index={index}
                name={project.name} 
                img={project.img} 
                tools={project.tools}
                link={project.link}
                github={project.github}
                noscroll={project.noscroll}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Projects