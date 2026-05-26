import React from 'react'
import { useTranslation } from 'react-i18next';
import "./Sectionone.scss"

const Sectionone = () => {
     const { t, i18n } = useTranslation();
  return (
    <>
    <section className="course-section">
    <div className="sect-left">
        <h1>{t('course_find.title')}</h1>
        <p className="desc-1">{t('course_find.description_1')}</p>
        <p className="desc-2">{t('course_find.description_2')}</p>
        <button className="btn-learn-more">{t('course_find.button')}</button>
    </div>
    <div className="sect-right">
        <div className="img-container">
            <img src="src/companents/img/sect1.jpg" alt="Talabalar" />
            <div className="play-button">
                <span className="play-icon">▶</span>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default Sectionone