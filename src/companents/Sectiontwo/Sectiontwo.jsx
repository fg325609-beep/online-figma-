import React from 'react'
import "./Sectiontwo.scss"
import { useTranslation } from 'react-i18next';
const Sectiontwo = () => {
    const { t, i18n } = useTranslation();
  return (
    <>
    <section>
        <div className="sect-two">
            <div className="sect-two-title">
                <h1>{t('how_it_work.title')}</h1>
                <p>{t('how_it_work.subtitle_1')}</p>
                <p>{t('how_it_work.subtitle_2')}</p>
                <div className="cards">
                    <div className="crd"></div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Sectiontwo