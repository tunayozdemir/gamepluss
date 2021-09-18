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
        <nav className="header__right--nav">{items.map((item, key) => {
          if (isActive === "active") {
            {/* debugger */}
            return (
              <a href="javascript:;" className="" key={key} title={item}>{item}</a>
            )
          }
          return (
            <a href="javascript:;" key={key} title={item}>{item}</a>
          )
        })

        }

        </nav>
        <Button title="LET'S PLAY" />
      </div>


    </header>
  )
}
export default Header
