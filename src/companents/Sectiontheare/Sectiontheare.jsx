import React from 'react'
import "./Sectiontheare.scss"
import { useTranslation } from 'react-i18next';

import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';
import img4 from '../img/4.jpg';
import img5 from '../img/5.jpg';
import img6 from '../img/6.jpg';

const courseImages = [img1, img2, img3, img4, img5, img6];

const Sectiontheare = () => {
  const { t } = useTranslation();

  const coursesList = t('courses', { returnObjects: true }) || [];
  return (
    <div>
      <section className='section-theare'>
        <h1>{t('title')}</h1>
        <p>{t('subtitle')}</p>

        <div className="sect-foo-cards">
          {Array.isArray(coursesList) && coursesList.map((course, index) => (
            <div className="card" key={index}>
              
              <img 
                src={courseImages[index]} 
                alt={course.title} 
                className="course-img" 
              />
              
              <div className="card-stats">
                <span>👤 {course.stats?.students}</span>
                <span>👁️ {course.stats?.views}</span>
                <span>⭐ {course.stats?.rating}</span>
              </div>

              <h2>{course.title}</h2>
              <p>{course.description}</p>
              
         
              <span className="price">{course.price}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Sectiontheare;