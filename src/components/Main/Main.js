import React from 'react'
import Autocomplete from '../Autocomplete/Autocomplete'
import Accordion from '../Accordion/Accordion'
import Card from '../Card/Card'
import DummyData from '../../DummyData.json'
import './Main.scss'

function Main() {
  return (
    <div className="main">
      <div className="main__top">
        <div className="main__top-content">
          <h1>Lorem ipsum dolor sit amet consectetur</h1>
          <p>With the Cloud Gaming, you can join, play, and share games online with anyone in the world. Play any game on any device!</p>

          <Autocomplete optionsValue={DummyData} />
        </div>
      </div>

      <div className="main__body">
        <section className="main__aside-filter">
          <h2>Browse Games</h2>
          <Accordion title="State" />
          <Accordion title="Genre Filtersate" />
        </section>

        <section className="main__content">
          <Card />
          <Card />
        </section>

      </div>
    </div>
  )
}

export default Main
