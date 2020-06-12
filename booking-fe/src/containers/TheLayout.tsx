import React from 'react'
import { useTypedSelector } from '../store'
import {
  TheContent,
  TheSidebar,
  TheAside,
  TheFooter,
  TheHeader
} from './index'

const TheLayout = () => {
  const darkMode = useTypedSelector((state) => state.darkMode)
  const classes = `c-app c-default-layout ${darkMode ? 'c-dark-theme' : ''}`
    
  return (
    <div className={classes}>
      <TheSidebar/>
      <TheAside/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          <TheContent/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default TheLayout
