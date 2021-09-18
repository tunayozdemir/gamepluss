import React, { useEffect, useRef, useState } from 'react';
import './Checkbox.scss'

const Checkbox = React.forwardRef((props, ref) => {
  const [Id, setId] = useState("")

  const generateId = () => {
    //return '_' + Math.random().toString(36).substr(2, 9);
    setId('_' + Math.random().toString(36).substr(2, 9))
  }

  const onChangeHandler = (e) => {
    if (typeof props.onChange === "function") {
      props.onChange(e)
    }
  }

  useEffect(() => {
    generateId()
  }, [])

  const getPropsValue = (p, e) => {
    if (e !== undefined) {
      return p !== undefined ? p : e
    } else {
      return p !== undefined ? p : ""
    }
  }

  return (
    <>
      <div className="checkbox noselect" id={props.id} indexkey={getPropsValue(props.indexkey)}>
        <input ref={ref} type="checkbox" id={Id} name="" value="" onChange={onChangeHandler} />
        <label htmlFor={Id}><span>{props.children}</span></label>
      </div>
    </>
  )
})

export default Checkbox;
