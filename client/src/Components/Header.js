import React, { useState, useEffect } from "react"
import { Redirect, useHistory } from "react-router-dom"
import { AngleDoubleRight } from "react-icons/fa"
import { BsChevronDoubleRight } from 'react-icons/bs'
import './Header.scss'

const Header = (props) => {
  const rightArrow = React.useRef()
  const history = useHistory()
  const {toggle, setToggle} = props

  useEffect(() => {
   
  })
  const home = (e) => {
 
    setToggle(!toggle)
 
    history.push('/')
    
  }
  const handleScroll = (e) => {
    e.preventDefault()
    e.stopPropagation();
    // e.nativeEvent.stopImmediatePropagation();
    console.log('handle')
        window.scrollTo({ top: 500, behavior: "smooth" })
       
    
  }
  return (
    <header onClick={home}>
      Sweetly Different
      <div className='right-arrow' onClick={handleScroll} ref={rightArrow}><BsChevronDoubleRight /></div>
    </header>
  )
}
export default Header
