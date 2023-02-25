import { useState, useEffect } from 'react';

const SearchBar = ({ filterData }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    filterData(inputValue);
  }, [inputValue, filterData]);

  return (
    <input
      className="form-control"
      type="text"
      placeholder="Search..."
      value={inputValue}
      onChange={handleInputChange}
    />
  );
};
export default SearchBar;
