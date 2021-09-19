import React, { useState, useRef, useEffect } from 'react'
import './Accordion.scss'
import Checkbox from '../CheckBox/CheckBox'
import Arrow from '../../assets/img//icons-arrow-large.png'


const Accordion = ({ children, title }) => {
  const [isActive, setisActive] = useState("")
  const [heightState, setHeightState] = useState("auto");
  const [rotateState, setRotateState] = useState("accordion__icon")

  const content = useRef(null)

  function toggleAccordion() {
    // debugger
    setisActive(isActive === "" ? "active" : "")
    setHeightState(isActive === "active" ? "0px" : `${content.current.scrollHeight}px`)
    setRotateState(isActive === "active" ? "accordion__icon" : "accordion__icon rotate")
    console.log(content.current.scrollHeight)
  }

  useEffect(() => {
    setisActive("active")
  }, [])


  return <>
    <div className="accordion">
      <div className={`accordion__head ${isActive}`} onClick={toggleAccordion}>
        <h5 className="accordion__head--title">{title}</h5>
        <i className={`${rotateState}`} >
          <img src={Arrow} />
        </i>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${heightState}` }}
        className="accordion__content">
        <div className="accordion__content-text">
          {children}
        </div>
      </div>
    </div>

  </>
}



export default Accordion
