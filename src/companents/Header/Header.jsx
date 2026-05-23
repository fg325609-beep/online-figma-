import React from 'react'
import "./Header.scss"
import { useTranslation } from 'react-i18next'
const Header = () => {
    const { t , i18n }= useTranslation()
    const
  return (
    <div>
        <header>
            <div className="container">
                <div className="navbar">
                    <h1>Education</h1>
                    <nav>
                    </nav>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header