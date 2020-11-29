import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import firstAbout from "../src/images/about-1.jpg";
import secondAbout from "../src/images/about-2.jpg";
import thirdAbout from "../src/images/about-3.jpg";

const App = () => {
  return(
    <div className="appWrapper">
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <div className="header__logo">МАСТЕР-КУЗОВ</div>
            <nav className="nav">
              <a className="nav__link" href="#">О нас</a>
              <a className="nav__link" href="#">Контакты</a>
            </nav>
          </div>
        </div>
      </header>
      <div className="intro">
        <div className="container">
          <div className="intro__inner">
          </div>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="section__header">
          <h2 class="section__title">О нас</h2>
          <div class="section__text">
              <p>Мы - автосервис с опытными мастерами.</p>
              <p>Предоставлям качественный сервис.</p>
          </div>
          </div>
        </div>
        <div className="about">
          <div className="about__item">
            <div className="about__img">
              <img src={firstAbout}></img>
            </div>
          </div>
          <div className="about__item">
            <div className="about__img">
              <img src={secondAbout}></img>
            </div>
          </div>
          <div className="about__item">
            <div className="about__img">
              <img src={thirdAbout}></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
