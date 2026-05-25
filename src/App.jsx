import React from 'react'
import Header from './companents/Header/Header'
import './i18n';
import { Hero } from './companents/Hero/Hero';
import Sectionone from './companents/Sectionone/Sectionone';
const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Sectionone/>

    </div>
  )
}

export default App