import React from 'react'
import './Card.scss'

function Card() {
  return (
    <div className="card">
      <span className="card__title">A</span>
      <div className="card__wrap">
        <a href="javascritp:;" title="Lorem ipsum dolor sit">Lorem ipsum dolor sit</a>
        <a href="javascritp:;" title="Lorem ipsum dolor sit">Lorem ipsum dolor sit</a>
        <a href="javascritp:;" title="Lorem ipsum dolor sit">Lorem ipsum dolor sit</a>
        <a href="javascritp:;" title="Lorem ipsum dolor sit">Lorem ipsum dolor sit</a>
      </div>
    </div>
  )
}

export default Card
