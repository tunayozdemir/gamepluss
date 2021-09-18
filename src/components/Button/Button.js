import React from 'react'
import './Button.scss'

function Button(props) {
  return (
    <a href="javscript:;" title={props.title} className="button">{props.title}
    </a>
  )
}

export default Button
