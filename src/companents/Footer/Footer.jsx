import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Ijtimoiy tarmoqlar ikonasi
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons'; 
// Aloqa bo'limi uchun kerakli solid ikonalar
import { 
  faPhone, 
  faEnvelope, 
  faGlobe,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import './Footer.scss';

const Footer = () => {
  const { t } = useTranslation(); 

  return (
    <footer className="footer">
      <div className="fcontainer">
        
        {/* 1-ustun: Education & Socials */}
        <div className="fcard">
          <h2>{t('footer.education.title')}</h2>
          <p className="desc">{t('footer.education.description')}</p>
          <h3>{t('footer.follow_us')}</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="icon-box">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="icon-box">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="icon-box">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="icon-box">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>

        {/* 2-ustun: Feature Links */}
        <div className="fcard">
          <h2>{t('footer.feature_links.title')}</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
              <a href="#about">{t('footer.feature_links.about_us')}</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
              <a href="#graduation">{t('footer.feature_links.graduation')}</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
              <a href="#scholarship">{t('footer.feature_links.scholarship')}</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
              <a href="#admissions">{t('footer.feature_links.admissions')}</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
              <a href="#international">{t('footer.feature_links.international')}</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
              <a href="#events">{t('footer.feature_links.events')}</a>
            </li>
          </ul>
        </div>

        {/* 3-ustun: Support */}
        <div className="fcard">
          <h2>{t('footer.support.title')}</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
              <a href="#language">{t('footer.support.language')}</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
              <a href="#wordpress">{t('footer.support.wordpress')}</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
              <a href="#privacy">{t('footer.support.privacy')}</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
              <a href="#faqs">{t('footer.support.faqs')}</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
              <a href="#support">{t('footer.support.support_link')}</a>
            </li>
          </ul>
        </div>

        {/* 4-ustun: Contact Us */}
        <div className="fcard">
          <h2>{t('footer.contact_us.title')}</h2>
          <div className="contact-info">
            <p className="address">{t('footer.contact_us.address')}</p>
            
            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <a href="tel:+01748457269">+017 4845 7269</a>
            </div>
            
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <a href="mailto:info@gmail.com">info@gmail.com</a>
            </div>
            
            <div className="contact-item">
              <FontAwesomeIcon icon={faGlobe} className="contact-icon" />
              <a href="https://www.yourdomain.com" target="_blank" rel="noreferrer">www.yourdomain.com</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;