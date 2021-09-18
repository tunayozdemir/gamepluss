import React, { useState, useEffect, filter } from 'react';
import './Autocomplete.scss';
import DummyData from '../../DummyData.json'


function Autocomplete() {

  const [search, setSearch] = useState('')
  const [result, setResult] = useState([])

  useEffect(() => {
    console.log(DummyData)
    if (search) {
      setResult(DummyData.filter(item => item.title.includes(search)))
    }
    else {
      setResult([])
    }
  }, [search])

  return (
    <div className="search">
      <span className="search__icon"></span>
      <input className="search__input"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <span className="search__cancel-icon"></span>

      {result &&
        <ul className="search__result">
          {result.map((item) =>
            <li key={item.id} className="search__result-item">
              {item.title}
            </li>
          )}
        </ul>
      }
    </div>
  );
}

export default Autocomplete;