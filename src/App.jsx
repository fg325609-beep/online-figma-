import React from 'react'
import Header from './companents/Header/Header'
import './i18n';
import { Hero } from './companents/Hero/Hero';
import Sectionone from './companents/Sectionone/Sectionone';
import Sectiontwo from './companents/Sectiontwo/Sectiontwo';
import Sectiontheare from './companents/Sectiontheare/Sectiontheare';
import Sectionfoo from './companents/Sectionfoo/Sectionfoo';
import Sectionfive from './companents/Sectionfive/Sectionfive';






const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Sectionone/>
      <Sectiontwo/>
      <Sectiontheare/>
      <Sectionfoo/>
      <Sectionfive/>
     


    </div>
  )
}

export default App