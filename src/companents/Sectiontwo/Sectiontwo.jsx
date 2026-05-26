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
                <h1 className='h1'>{t('how_it_work.title')}</h1>
                <p>{t('how_it_work.subtitle_1')}</p>
                <p>{t('how_it_work.subtitle_2')}</p>
            </div>
                <div className="cards">
                    <div className="card">
                      <img src="src/companents/img/Icon1.png" alt="" />
                      <h1>{t('how_it_work.card_1.title')}</h1>
                    </div>
                    <div className="card">
                      <img src="src/companents/img/icon3.png" alt="" />
                      <h1>{t('how_it_work.card_2.title')}</h1>
                    </div>
                    <div className="card">
                      <img src="src/companents/img/icon.png" alt="" />
                      <h1>{t('how_it_work.card_3.title')}</h1>
                    </div>
                    <div className="card">
                      <img src="src/companents/img/icon4.png" alt="" />
                      <h1>{t('how_it_work.card_4.title')}</h1>
                    </div>
                </div>
        </div>
    </section>
    </>
  )
}

export default Sectiontwo