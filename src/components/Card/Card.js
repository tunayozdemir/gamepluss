import React, { useState, useEffect } from 'react'
import './Card.scss'
import Cards from '../../CardData.json'


function Card(values) {

  return (
    <>
      {Cards.cards.map((item) => (
        <div className="card">
          <span className="card__title">{item.alphabet}</span>
          <div className="card__wrap">
            {item.text.map((items) => (
              <a href="javascritp:;" title="Lorem">{items.textContent} </a>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export default Card
