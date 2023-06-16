import React from "react";
import logo from '../../images/logo.svg';
import logoTitle from '../../images/logo-title.svg';
import logoSubtitle from '../../images/logo-subtitle.svg';
import catalog from '../../images/catalog.svg';
import apple from '../../images/apple.svg';
import smartphone from '../../images/smartphone.svg'
import laptop from '../../images/laptop.svg'
import arrow from '../../images/arrow-down.svg'
import tablet from '../../images/tablet.svg'
const Header = () => {
  return (
    <header className="header">
      <div className="header__container-up">
        <div className="header__logo">
          <div className="header__logo-wrapper">
            <img className="header__logo-icon" alt="Логотип" src={logo} />
            <img className="header__logo-title" alt="Логотип" src={logoTitle} />
          </div>
          <img className="header__logo-subtitle" alt="Логотип" src={logoSubtitle} />
        </div>

        <nav className="header__navigation-links">
          <ul className="header__links">
            <li className="header__link"><span>Контакты</span></li>
            <li className="header__link"><span>Отзывы</span></li>
            <li className="header__link"><span>Гарантия</span></li>
          </ul>
        </nav>

        <div className="header__contact">
          <h2 className="header__contact-title">
            <span>Звоните, пн-вс 10:00 - 20:00</span>
          </h2>
          <p className="header__contact-number">+7 351 220 77 04 </p>
        </div>

      </div>
      <div className="header__container-down">
        <nav className="header__buttons">
          <button className="header__button">
            <img src={catalog} alt="Кнопка каталог" className="header__button-image" />
            <span className="header__button-text">Каталог</span>
          </button>
          <button className="header__button">
            <img src={apple} alt="Кнопка каталог" className="header__button-image" />
            <span className="header__button-text">Ремонт Apple</span>
            <img src={arrow} alt="arrow" />
          </button>
          <button className="header__button">
            <img src={smartphone} alt="Кнопка каталог" className="header__button-image" />
            <span className="header__button-text">Ремонт смартфонов</span>
            <img src={arrow} alt="arrow" />
          </button>
          <button className="header__button">
            <img src={tablet} alt="Кнопка каталог" className="header__button-image" />
            <span className="header__button-text">Ремонт планшетов</span>
            <img src={arrow} alt="arrow" />
          </button>
          <button className="header__button">
            <img src={laptop} alt="Кнопка каталог" className="header__button-image" />
            <span className="header__button-text">Ремонт ноутбуков</span>
            <img src={arrow} alt="arrow" />
          </button>

        </nav>
      </div>

    </header>
  )
}

export default Header;