import { useState } from 'react';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [textValue, setTextValue] = useState("qui scrivo l'eco");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    //const value = document.querySelector('input').value; in React NON SI FA!!!!
    //console.log(inputValue);
    setTextValue(inputValue);
  };

  const handleFormReset = (event) => {
    // pulisco input
    setInputValue('');
    // pulisco div di eco
    setTextValue('');
  };

  const handleInputChange = (event) => {
    //console.log(event.target.value);
    setInputValue(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} onReset={handleFormReset}>
        <input
          type="text"
          onChange={handleInputChange}
          value={inputValue}
        ></input>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
      <div>{textValue}</div>
    </div>
  );
};

export default App;
