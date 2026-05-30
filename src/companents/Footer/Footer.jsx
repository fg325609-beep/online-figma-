import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Facebook ikonkasini brandlar to'plamidan import qilamiz
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'; 

const Footer = () => {
  const { t } = useTranslation(); // 'i18n' ishlatilmagani uchun uni olib tashladik

  return (
    <>
      <footer>
        <div className="fcontainer">
          <div className="cards">
            <div className="card">
              <h1>{t('footer.education.title')}</h1>
              <p>{t('footer.education.description')}</p>
              <h2>{t('footer.follow_us')}</h2>
              <span>
                {/* To'g'ri import qilingan ikonkani icon propiga beramiz */}
                <FontAwesomeIcon icon={faFacebookSquare} />
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;