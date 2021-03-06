import React from 'react'
import Autocomplete from '../Autocomplete/Autocomplete'
import Accordion from '../Accordion/Accordion'
import Card from '../Card/Card'
import DummyData from '../../DummyData.json'
import CardData from '../../CardData.json'
import './Main.scss'
import Checkbox from '../CheckBox/CheckBox'

function Main(props) {
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
          <Accordion title="State">
            <Checkbox children="Available" />
            <Checkbox children="Patching" />
            <Checkbox children="Maintenance" />
          </Accordion>
          <Accordion title="Genre Filters">
            <Checkbox children="Shooters" />
            <Checkbox children="Action" />
            <Checkbox children="RPG" />
            <Checkbox children="Racing" />
            <Checkbox children="MOBA/MMO" />
            <Checkbox children="Simulation" />
            <Checkbox children="Strategy" />
            <Checkbox children="Sports" />
            <Checkbox children="Kids/Family" />
            <Checkbox children="Casual" />
            <Checkbox children="Demo" />
            <Checkbox children="Horror" />
            <Checkbox children="Platformer" />
            <Checkbox children="Battle Royale" />
            <Checkbox children="Adventure" />
            <Checkbox children="Open World" />
          </Accordion>
        </section>

        <section className="main__content">
          <Card values={CardData} />
        </section>

      </div>
    </div>
  )
}

export default Main
