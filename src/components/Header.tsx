import React from 'react';
import style from './Header.module.css';

export default function Header() {
  return (
    <header className={style.siteHeader}>
      <div className={style.containerInner}>
        <div className={style.logo}>MyOnePage</div>
        <nav className={style.nav}>
          <a href="#">Главная</a>
          <a href="#cards">Карточки</a>
          <a href="#contact">Контакты</a>
        </nav>
      </div>
    </header>
  );
}
