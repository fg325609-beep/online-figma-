import React from 'react'
import { useTranslation } from 'react-i18next';

const Sectionone = () => {
     const { t, i18n } = useTranslation();
  return (
    <>
    <section>
        <div className="sect-left">
            <h1>{t('course_find.title')}</h1>
            <p>{t('course_find.description_1')}</p>
            <span>{t('course_find.description_2')}</span>
            <button>{t('course_find.button')}</button>
        </div>
    </section>
    </>
  )
}

export default Sectionone