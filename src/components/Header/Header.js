import React, { useState, useEffect } from 'react'
import './Header.scss'
import Logo from '../Logo/Logo'
import Button from '../Button/Button'

const data = [
{id: 0, nav: "Games", class: "active"},
{id: 1, nav: "Membership"},
{id: 2, nav: "Download"},
{id: 3, nav: "Blog"},
{id: 4, nav: "Support"},
];


const Header = ({ navTitle, setActive }) => {
  const [activeIndex, setActiveIndex] = useState(setActive);
  const [items, setItem] = useState(data);

  return <>
    <header className="header">
      <Logo />
      <div className="header__right">
        <nav className="header__right--nav">

          {items.map(item => (
            <a href="javascript:;" className={item.class ? item.class : null} title={item.nav}>{item.nav}</a>
          ))}
        </nav>

        <Button title="LET'S PLAY" />
      </div>
    </header>
  </>
}

export default Header
