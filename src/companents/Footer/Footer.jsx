import React from 'react'
import { useTranslation } from 'react-i18next';
const Footer = () => {
         const { t, i18n } = useTranslation();
    
  return (
    <>
<footer>
    <div className="fcontainer">
       <div className="cards">
        <div className="card">
            <h1>{t('footer.education.title')}</h1>
            <p>{t('footer.education.description')}</p>
            <h2>{t('footer.follow_us')}</h2>
        </div>
       </div>
    </div>
</footer>
    </>
  )
}

export default Footer