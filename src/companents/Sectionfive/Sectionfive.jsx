import React from 'react'
import "./Sectionfive.scss"
import { useTranslation } from 'react-i18next';

const Sectionfive = () => {
     const { t, i18n } = useTranslation();
  return (
    <>
    <section className='Sectionfive'>
         <h1>{t('heading')}</h1>
         <p>{t('subheading')}</p>
         <form action="" method="post">
         <input type="email" placeholder={t('input_placeholder')} required/>
         <button>{t('button_text')}</button>
         </form>
    </section>
    </>
  )
}

export default Sectionfive