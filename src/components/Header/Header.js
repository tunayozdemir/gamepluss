import React, { useState, useEffect } from 'react'
import './Header.scss'
import Logo from '../Logo/Logo'
import Button from '../Button/Button'




function Header() {
  const [isActive, setisActive] = useState("")

  const items = [
    ["Games"],
    ["Membership"],
    ["Download"],
    ["Blog"],
    ["Support"]
  ]

  useEffect(() => {

  }, [])

  return (
    <header className="header">
      <Logo />
      <div className="header__right">
        <nav className="header__right--nav">
          <a href="javascript:;" className="active" title="Games">Games</a>
          <a href="javascript:;" className="" title="Membership">Membership</a>
          <a href="javascript:;" className="" title="Download">Download</a>
          <a href="javascript:;" className="" title="Blog">Blog</a>
          <a href="javascript:;" className="" title="Support">Support</a>
        </nav>
        <Button title="LET'S PLAY" />
      </div>


    </header>
  )
}
export default Header
