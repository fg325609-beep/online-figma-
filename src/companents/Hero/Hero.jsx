import React from 'react'
import "./Hero.scss"
import { useTranslation } from 'react-i18next';

export const Hero = () => {
     const { t, i18n } = useTranslation();
  return (
    <div>
        <section>
            <div className="hero">
                <h1>{t('hero.title')}</h1>
                <p>{t('hero.description')}</p>
                <button type="submit">{t('hero.button')}</button>
            </div>
        </section>
    </div>
  )
}
