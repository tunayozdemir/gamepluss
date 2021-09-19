import React, { useState, useEffect } from 'react'
import './Card.scss'

const Card = ({ values }) => {

  const [data, setData] = useState()
  const [cardTitle, setCartTitle] = useState([])

  const getAlphabet = (e) => {
    // debugger
    for (let i = 0; i < values.length; i++) {

    }

    return (
      <div className="card">
        <span className="card__title">A</span>
        <div className="card__wrap">
          <a href="javascritp:;" title="Lorem"></a>
        </div>
      </div>
    )
  }

  useEffect(() => {
    getAlphabet()
  }, [])

  return (
    <>
      {getAlphabet()}
    </>

    // <div className="card">
    //   <span className="card__title">A</span>
    //   <div className="card__wrap">
    //     <a href="javascritp:;" title="Lorem ipsum dolor sit">Lorem ipsum dolor sit</a>
    //     <a href="javascritp:;" title="Lorem ipsum dolor sit">Lorem ipsum dolor sit</a>
    //     <a href="javascritp:;" title="Lorem ipsum dolor sit">Lorem ipsum dolor sit</a>
    //     <a href="javascritp:;" title="Lorem ipsum dolor sit">Lorem ipsum dolor sit</a>
    //   </div>
    // </div>

  )
}

export default Card
