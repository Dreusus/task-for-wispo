import React from "react";
import {
  location__one,
  location__two,
  location__three
} from '../../images/png/png';


const Location = () => {
  return (
    <section className="location">
      <img src={location__one} alt="Локация 1" className="location__image" />
      <div className="location__description">
        <h3 className="location__description-title">Сервисные центры</h3>
        <p className="location__description-paragraph">
          Первый сервисный центр Белый Сервис распахнул свои двери 28 марта 2012 года по адресу г. Челябинск, ул. Энгельса 75.
        </p>
        <p className="location__description-paragraph">
          На текущий момент «Белый Сервис» имеет три филиала со своими приемщиками и мастерами. Гибко распределяем рабочую нагрузку: если персонал на одной из точек перегружен заказами, то часть работ передается их менее загруженным коллегам из другого филиала.
        </p>
        <button className="location__button">Показать адреса</button>

      </div>
      <img src={location__two} alt="Локация 2" className="location__image" />
      <img src={location__three} alt="Локация 3" className="location__image" />
    </section>
  )
}

export default Location;