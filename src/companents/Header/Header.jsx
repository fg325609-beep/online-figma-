import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.scss'; 

const Header = () => {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const changeLanguage = (lang) => {
        if (i18n && typeof i18n.changeLanguage === 'function') {
            i18n.changeLanguage(lang);
        }
    };

    // Har safar link bosilganda menyu yopilishi uchun funksiya
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header>
            <div className="container">
                <div className="navbar">
                    <h1 className='logo'>{t('navbar.logo')}</h1>
                    
                    {/* NAV-MENU endi ham ul-ro'yxatni, ham tugmalarni ichiga oladi */}
                    <nav className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
                        <ul className="nav-list">
                            <li><a href="#home" onClick={handleLinkClick}>{t('navbar.links.home')}</a></li>
                            <li><a href="#courses" onClick={handleLinkClick}>{t('navbar.links.courses')}</a></li>
                            <li><a href="#page" onClick={handleLinkClick}>{t('navbar.links.page')}</a></li>
                            <li><a href="#blog" onClick={handleLinkClick}>{t('navbar.links.blog')}</a></li>
                            <li><a href="#contact" onClick={handleLinkClick}>{t('navbar.links.contact')}</a></li>
                        </ul>

                        {/* Tugmalar va til tanlash endi nav-menu ichida (ul dan tashqarida) */}
                        <div className="nav-actions">
                            <a className='nav-a' href="#signin" onClick={handleLinkClick}>{t('navbar.actions.signIn')}</a>
                            <a className='nav-a signup-btn' href="#signup" onClick={handleLinkClick}>{t('navbar.actions.signUp')}</a>
                            
                            <select 
                                onChange={(e) => changeLanguage(e.target.value)} 
                                defaultValue={i18n ? i18n.language : "uz"}
                            >
                                <option value="uz">UZ</option>
                                <option value="en">EN</option>
                                <option value="ru">RU</option>
                            </select>
                        </div>
                    </nav>

                    {/* Gamburger tugmasi */}
                    <button 
                        className={isMenuOpen ? "hamburger active" : "hamburger"} 
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;