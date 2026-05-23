import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.scss'; 

const Header = () => {
    const { t, i18n } = useTranslation();
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const chenglanguage = (lang) => {
        if (i18n && typeof i18n.changeLanguage === 'function') {
            i18n.changeLanguage(lang);
        }
    };

    return (
        <header>
            <div className="container">
                <div className="navbar">
                    <h1 className='logo'>{t('navbar.logo')}</h1>
                    
                    <nav className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
                        <nav>
                            <li><a href="#home">{t('navbar.links.home')}</a></li>
                            <li><a href="#courses">{t('navbar.links.courses')}</a></li>
                            <li><a href="#page">{t('navbar.links.page')}</a></li>
                            <li><a href="#blog">{t('navbar.links.blog')}</a></li>
                            <li><a href="#contact">{t('navbar.links.contact')}</a></li>
                        </nav>
                    </nav>

                    <span className="nav-actions">
                        <a className='nav-a' href="#signin">{t('navbar.actions.signIn')}</a>
                        <a className='nav-a signup-btn' href="#signup">{t('navbar.actions.signUp')}</a>
                        
                        <select 
                            onChange={(e) => chenglanguage(e.target.value)} 
                            defaultValue={i18n ? i18n.language : "uz"}
                        >
                            <option value="uz">UZ</option>
                            <option value="en">EN</option>
                            <option value="ru">RU</option>
                        </select>
                    </span>

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