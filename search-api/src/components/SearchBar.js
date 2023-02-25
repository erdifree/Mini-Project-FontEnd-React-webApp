import { useState } from 'react';

const SearchBar = ({ callWhenSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('SearchBar dice ' + inputValue);
    callWhenSubmit(inputValue);
  };
  return (
    <form className="w-50" onSubmit={handleFormSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="search"
          onChange={handleInputChange}
          value={inputValue}
        ></input>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
