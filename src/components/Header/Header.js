import React, { useState, useEffect } from 'react'
import './Header.scss'
import Logo from '../Logo/Logo'
import Button from '../Button/Button'

function Header() {
  const [isActive, setisActive] = useState("")

  function toggleActive(e) {
    // debugger
    let select = e.target.id
    if (select === "0") {
      setisActive("active")
    }
    else if (select === "1") {
      setisActive("active")
    }
    else if (select === "2") {
      setisActive("active")
    }
    else if (select === "3") {
      setisActive("active")
    }
    else if (select === "4") {
      setisActive("active")
    }
  }

  return (
    <header className="header">
      <Logo />
      <div className="header__right">
        <nav className="header__right--nav">
          <a href="javascript:;" className={isActive} id="0" onClick={(e) => toggleActive(e)} title="Games">Games</a>
          <a href="javascript:;" className={isActive} id="1" onClick={(e) => toggleActive(e)} title="Membership">Membership</a>
          <a href="javascript:;" className={isActive} id="2" onClick={(e) => toggleActive(e)} title="Download">Download</a>
          <a href="javascript:;" className={isActive} id="3" onClick={(e) => toggleActive(e)} title="Blog">Blog</a>
          <a href="javascript:;" className={isActive} id="4" onClick={(e) => toggleActive(e)} title="Support">Support</a>
        </nav>

        <Button title="LET'S PLAY" />
      </div>


    </header>
  )
}
export default Header
