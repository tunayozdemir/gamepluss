import React, { useState, useEffect } from 'react'
import './Select.scss'

// const data = [{id: 0, label: "Title A-Z"}, {id: 1, label: "Title Z-A"}];

function Select({ values, labels }) {
  // debugger
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(values);
  const [selectedItem, setSelectedItem] = useState("");

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  }

  return (
    <div className='select'>
      <div className='select__header' onClick={toggleDropdown}>
        {selectedItem ? items.find(item => item.id == selectedItem).label : labels}
        <i className={`select__icon ${isOpen && "open"}`}></i>
      </div>
      <div className={`select__body ${isOpen && 'open'}`}>
        {items.map(item => (
          <div className="select__body-item" onClick={e => handleItemClick(e.target.id)} id={item.id}>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Select
