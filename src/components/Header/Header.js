import React, { useState, useEffect } from 'react'
import './Header.scss'
import Logo from '../Logo/Logo'
import Button from '../Button/Button'

function Header() {
  const [isActive, setisActive] = useState("false")
  const [data, setData] = useState([])

  const items = [
    ["Games"],
    ["Membership"],
    ["Download"],
    ["Blog"],
    ["Support"]
  ]
  const handleToggle = () => {
    setisActive(!isActive);
  };


  useEffect(() => {
  }, [])

  return (
    <header className="header">
      <Logo />
      <div className="header__right">
        <nav className="header__right--nav">{items.map((item, key) => {
            return (
              {/* <a href="javascript:;" onClick={handleToggle} className={isActive ? "active" : item} key={key} title={item}>{item}</a> */}
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
