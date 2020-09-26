import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"

const Header = () => {
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    setRedirect(false)
  })
  const home = () => {
    console.log("here")
    setRedirect(true)
  }

  return (
    <header onClick={home}>
      {
        redirect && <Redirect to="/" />
       
      }
      Sweetly Different
    </header>
  )
}

export default Header
