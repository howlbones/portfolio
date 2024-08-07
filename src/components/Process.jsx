import React, { useEffect, useRef } from 'react';
import './Process.css'
import wordpressIcon from '../assets/wordpress-icon.svg'
import codeIcon from '../assets/code-icon.svg'
import seoIcon from '../assets/seo-icon.svg'
import adaptiveIcon from '../assets/adaptive-icon.svg'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Card({ classCount, title, text, imgSrc, textBack }) {
  return (
    <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
        <div className={`process__card process__card_${classCount}`}>
          <img src={imgSrc} alt="Card icon" className='process__card-img w-[80px] m-auto mb-[20px]'/>
          <div className="process__card-title-container">
            <h2 className="process__card-title">{title}</h2>
          </div>
          <p className='process__card-text'>{text}</p>
        </div>
      </div>
      <div className="flip-card-back">
        <p>{textBack}</p>
      </div>
    </div>
  </div> 
  )
}

function Process() {

  // Create refs for elements to be animated
  const containerRef = useRef(null);

  // UseEffect hook to trigger GSAP animations
  useEffect(() => {
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
        start: 'top 110%', // Trigger when the top of the element is 80% from the top of the viewport
        end: 'top 30%', // End animation when the top of the element is 30% from the top of the viewport
        scrub: true
      }
    });
  }, []);

  return (
    <div className='process w-[100%] max-w-[100vw] overflow-hidden relative z-1 mt-[100vh]'>
      <div ref={containerRef} className="process__container max-w-[1000px] gap-[20px] m-auto pt-[100px] pb-[100px]" >
        <Card
          classCount={"1"} 
          imgSrc={codeIcon}
          title={"Разработка сайтов с нуля"}
          text={"Создание уникального и персонализированного дизайна, написание чистого и оптимизированного кода."}
          textBack={"Я использую современные технологии и лучшие практики в веб-разработке, чтобы обеспечить высокую производительность и безопасность вашего сайта. Каждый проект начинается с детального обсуждения и планирования, чтобы точно понять ваши требования и цели."}
        />
        <Card
          classCount={"3"} 
          imgSrc={adaptiveIcon}
          title={"Адаптивный дизайн"}
          text={"Ваш сайт будет отлично выглядеть и функционировать на всех устройствах – от смартфонов до десктопов."}
          textBack={"Я разрабатываю адаптивные макеты, которые автоматически подстраиваются под размер экрана, обеспечивая удобство просмотра и навигации для пользователей. Независимо от устройства, ваши посетители получат лучший опыт взаимодействия с сайтом."}
        />
        <Card
          classCount={"4"} 
          imgSrc={seoIcon}
          title={"SEO-оптимизация"}
          text={"Обеспечение высокого рейтинга вашего сайта в поисковых системах."}
          textBack={"Я провожу комплексную оптимизацию, включая настройку метатегов, улучшение скорости загрузки страниц, создание удобной структуры сайта и качественного контента. Всё это помогает вашему сайту занимать высокие позиции в результатах поиска, привлекать больше посетителей и повышать видимость в интернете."}
        />
        <Card
          classCount={"2"} 
          imgSrc={wordpressIcon}
          title={"Использование популярных CMS"}
          text={"Быстрое и эффективное создание сайтов на базе WordPress, Tilda, Сreatium и других систем управления контентом."}
          textBack={"NoCode и LowCode платформы позволяют легко управлять контентом вашего сайта, добавлять новые страницы, публикации и обновления без знаний программирования. Я настраиваю и оптимизирую CMS под ваши нужды, обеспечивая максимальную удобность использования и поддержки в будущем."}
        />
      </div>
    </div>
  )
}

export default Process 
