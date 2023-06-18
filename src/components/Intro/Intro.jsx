import React, { useState, useEffect } from 'react';
import emoji from '../../images/emoji.png'
import arrowRight from '../../images/arrow-right.svg'
import screwDriver from '../../images/screwdriver.svg'
import guard from '../../images/guard.svg'
import magnifier from '../../images/magnifier.svg'
import bb from '../../images/bb.svg'
const Intro = () => {

  const [windowSize, setWindowSize] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="intro">

      {windowSize > 700 ? <div className="intro__graphics">
        <div className="repair-count">
          <span className="repair-count__number">12 585</span>
          <img src={emoji} alt="emoji" className="repair-count__emoji" />
          <span className="repair-count__text">Выполненных ремонтов</span>
        </div>
      </div>
        :
        <div className="intro__graphics">
        </div>}


      <div className="service-info">
        <h1 className="service-info__title">Сервисный центр</h1>
        <p className="service-info__description">
          Ремонт планшетов в Челябинске. Бесплатно продиагностируем и быстро починим любую поломку Гарантия 3 месяца
        </p>
      </div>

      <button className="diagnoctics">
        <img src={arrowRight} alt="arrow" className="diagnoctics__arrow" />
        <span className="diagnoctics__text">Записаться на диагностику</span>
      </button>

      <li className="adventages">
        <ul className="adventage">
          <img src={screwDriver} alt="преимущество" className="adventage__image" />
          <span className="adventage__title">Починим даже то, от чего отказались другие</span>
        </ul>

        <ul className="adventage">
          <img src={guard} alt="преимущество" className="adventage__image" />
          <span className="adventage__title">Гарантия нашего
            сервиса 3 месяца</span>
        </ul>

        <ul className="adventage">
          <img src={bb} alt="преимущество" className="adventage__image" />
          <span className="adventage__title">Собственная выгодная бонусная система</span>
        </ul>

        <ul className="adventage">
          <img src={magnifier} alt="преимущество" className="adventage__image" />
          <span className="adventage__title">Бесплатная диагностика даже при отказе от ремонта</span>
        </ul>
      </li>
       
       {windowSize > 700 ? "" : <div className="repair-count">
          <span className="repair-count__number">12 585</span>
          <img src={emoji} alt="emoji" className="repair-count__emoji" />
          <span className="repair-count__text">Выполненных ремонтов</span>
        </div>}


    </section>
  )
}

export default Intro;