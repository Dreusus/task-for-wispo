import React from 'react';
import useWindowSize from '../../utils/useWindowSize';
import {
  avatar__ilya,
  avatar__alex,
  avatar__andrey,
  avatar__dmitriy
} from '../../images/png/png';
import {
  doneJobs,
  cloud__small,
  cloud__medium,
  cloud__big
} from '../../images/svg/svg';

const Team = () => {
  const windowSize = useWindowSize()

  return (
    <section className="team">
      <h1 className="team__title">
        <span className="team__titleText">Ремонт осуществляется <br />первоклассными специалистами</span>
      </h1>

      <p className="team__subtitle">
        Средний опыт работы наших мастеров 4 года

      </p>


      {windowSize > 700 ?
        <div className="team__cards">
          <div className="card">
            <img src={avatar__ilya} alt="Аватар мастера" className="card__image" />
            <h3 className="card__name">Илья</h3>
            <p className="card__description">Мастер по ремонту, опыт 5 лет.<br />В «Белом Сервисе» с июля 2020</p>
            <div className="card__jobs">
              <img src={doneJobs} alt="выполненно" className="card__jobs-image" />
              <p className="card__jobs-text">Более 4 800 выполненных работ</p>
            </div>
            <div className="card__cloud">
              <img src={cloud__medium} alt="" className="card__cloud-svg" />
              <p className="card__cloud-text">Определю любую причину поломки!</p>
            </div>
          </div>

          <div className="card">
            <img src={avatar__alex} alt="Аватар мастера" className="card__image" />
            <h3 className="card__name">Александр</h3>
            <p className="card__description">Мастер по ремонту, опыт 4,5 года.<br /> В «Белом Сервисе» с августа 2020</p>
            <div className="card__jobs">
              <img src={doneJobs} alt="выполненно" className="card__jobs-image" />
              <p className="card__jobs-text">Более 5 200 выполненных работ</p>
            </div>
            <div className="card__cloud">
              <img src={cloud__big} alt="задний фон" className="card__cloud-svg" />
              <p className="card__cloud-text">Верну к жизни, как самые первые модели, так и новинки  смартфонов.</p>
            </div>
          </div>

          <div className="card">
            <img src={avatar__andrey} alt="Аватар мастера" className="card__image" />
            <h3 className="card__name">Андрей</h3>
            <p className="card__description">Мастер по ремонту и переклейке дисплеев, опыт 5 лет. В «Белом Сервисе» с сентября 2020</p>
            <div className="card__jobs">
              <img src={doneJobs} alt="выполненно" className="card__jobs-image" />
              <p className="card__jobs-text">Более 5 200 выполненных работ</p>
            </div>
            <div className="card__cloud">
              <img src={cloud__small} alt="задний фон" className="card__cloud-svg" />
              <p className="card__cloud-text">Ремонт Apple – мой конек!</p>
            </div>
          </div>

          <div className="card">
            <img src={avatar__dmitriy} alt="Аватар мастера" className="card__image" />
            <h3 className="card__name">Дмитрий</h3>
            <p className="card__description">Мастер по ремонту, опыт 9 лет.<br />В «Белом Сервисе» с марта 2020</p>
            <div className="card__jobs">
              <img src={doneJobs} alt="выполненно" className="card__jobs-image" />
              <p className="card__jobs-text">Более 4 800 выполненных работ</p>
            </div>
            <div className="card__cloud">
              <img src={cloud__big} alt="задний фон" className="card__cloud-svg" />
              <p className="card__cloud-text">Мы даем гарантию
                и исполняем ее. На технику – это всегда год.</p>
            </div>
          </div>
        </div>
        :
        <div className="team__cards">
          <div className="card">
            <img src={avatar__ilya} alt="Аватар мастера" className="card__image" />
            <h3 className="card__name">Илья</h3>
            <p className="card__description">Мастер по ремонту, опыт 5 лет.<br />В «Белом Сервисе» с июля 2020</p>
            <div className="card__jobs">
              <img src={doneJobs} alt="выполненно" className="card__jobs-image" />
              <p className="card__jobs-text">Более 4 800 выполненных работ</p>
            </div>
            <div className="card__cloud">
              <img src={cloud__medium} alt="" className="card__cloud-svg" />
              <p className="card__cloud-text">Определю любую причину поломки!</p>
            </div>
          </div>
        </div>}
    </section>
  )
}

export default Team;