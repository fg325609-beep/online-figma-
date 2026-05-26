import React from 'react'
import Header from './companents/Header/Header'
import './i18n';
import { Hero } from './companents/Hero/Hero';
import Sectionone from './companents/Sectionone/Sectionone';
import Sectiontwo from './companents/Sectiontwo/Sectiontwo';

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Sectionone/>
      <Sectiontwo/>


    </div>
  )
}

export default App