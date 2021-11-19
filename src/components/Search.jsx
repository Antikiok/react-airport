import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = e => {
    setInputValue(e.target.value);
  };
  const { flightType } = useParams();
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    history.push(`/${flightType}?search=${inputValue.toUpperCase()}`);
  };

  return (
    <div className="row">
      <div className="title">Search Flight</div>
      <form className="search-line-container">
        <input
          value={inputValue}
          onChange={handleInputChange}
          type="text"
          placeholder="Airline, destination or flight #"
          className="search-input"
        />
        <button onClick={handleSubmit} className="btn btn-search">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
