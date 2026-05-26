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
        <div className="sect-right">
            <img src="src/companents/img/sect1.jpg" alt="Uch nafar yosh talaba (ikki ayol va bir erkak) yorug‘ xonadagi to‘q rangli stol atrofida o‘tirib, o‘zaro jilmayib suhbatlashmoqda. Ularning oldida ochiq kitoblar, daftarlar va ruchkalar bor." />
        </div>
    </section>
    </>
  )
}

export default Sectionone