import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '../../assets/Logo.png';
import logolight from '../../assets/Logo1.png';
import '../styles/main.css';
import { useDarkMode } from '../../shared/darkmode/darkmode';
import DarkModeSwitcher from "../darkmode/darkmode.jsx"
import "../../App.css"

const Header = () => {
  const { t } = useTranslation();
  const { darkMode } = useDarkMode();

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={darkMode ? logolight : logo} alt="Tajikistan Tourism Logo" />
        </div>

        <nav className="header__nav">
          <NavLink to="/" className="header__link" activeClassName="header__link--active" exact="true">
            {t('nav.home')}
          </NavLink>
          <NavLink to="/restaurants" className="header__link" activeClassName="header__link--active">
            {t('nav.restaurants')}
          </NavLink>
          <NavLink to="/foods" className="header__link" activeClassName="header__link--active">
            {t('nav.foods')}
          </NavLink>
          <NavLink to="/tourism-search" className="header__link" activeClassName="header__link--active">
            {t('nav.searchTourism')}
          </NavLink>
          <NavLink to="/clothes" className="header__link" activeClassName="header__link--active">
            {t('nav.clothes')}
          </NavLink>
        </nav>

        <div className="header__right">
          <LanguageSwitcher />
          <DarkModeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
