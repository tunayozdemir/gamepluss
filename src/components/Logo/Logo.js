import React from 'react'
import GamePlusLogo from '../../assets/img/logo@3x.png'
import './Logo.scss'

function Logo(props) {
  return (
    <a href="javascript:;" className="logo" title="Game Plus">
      <img src={GamePlusLogo} />
    </a>
  )
}

export default Logo
