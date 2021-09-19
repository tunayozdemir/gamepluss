import React, { useState, useEffect } from 'react';
import './Autocomplete.scss';
import Clear from '../../assets/img/cancel.png'
import Search from '../../assets/img/search.png'

const Autocomplete = ({ optionsValue }) => {
  const [searchText, setSearchText] = useState("");
  const [suggest, setSuggest] = useState([]);
  const [resfound, setResfound] = useState(true);
  const [isVisible, setisVisible] = useState()


  const handleChange = (e) => {
    let searchVal = e.target.value;
    let tempArray = [];
    if (searchVal.length > 0) {
      // debugger
      tempArray = optionsValue.map((item) => item.title).sort().filter((e) => e.toLowerCase().includes(searchVal.toLowerCase()));
      setResfound(tempArray.length !== 0 ? true : false);
    }
    else {
      setResfound(false)
    }
    setSuggest(tempArray);
    setSearchText(searchVal);
  };

  const suggestedText = (value) => {
    console.log(value);
    setSearchText(value);
    setSuggest([]);
    setResfound(false)
  };

  const getSuggestions = () => {
    if (suggest.length === 0 && searchText !== "" && !resfound) {
      return <p>Search Content Not Found</p>;
    }

    return (
      <ul className="search__result">
        {suggest.map((item, index) => {
          return (
            <div key={index}>
              <li onClick={() => suggestedText(item)}>{item}</li>
              {index !== suggest.length - 1}
            </div>
          );
        })}
      </ul>
    );
  };

  const clearText = () => {
    setSearchText("")
    setResfound(false)
    setSuggest([])
  }

  useEffect(() => {
    clearText()
  }, [])

  return (
    <div className="search">
      <span className="search__icon"></span>
      <input
        type="text"
        placeholder="Search.."
        className="search__input"
        value={searchText}
        onChange={handleChange}
      />
      {searchText &&
        <span onClick={clearText} className="search__cancel-icon"></span>
      }
      {resfound && getSuggestions()}
    </div>
  );
};
export default Autocomplete;