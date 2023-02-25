import { useState, useEffect } from 'react';
import Heart from './images/heart.svg';

const App = () => {
  // count è la variabile di stato
  // setCount è l'unico metodo con cui posso aggiornare il valore di count
  // il primo parametro di useState è il valore di default di quella variabile di stato
  // possono esserci molte variabili di stato (o nessuna)
  // quando una delle variabili di stato cambia valore, il componente si ri-renderizza
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  // definizione della funzione di callback
  const handleClick = () => {
    //console.log('click');
    setCount(count + 1);
    //count++; // NON SI PUO' FARE
  };

  // uso useEffect per modificare il title della pagina
  // 1) primo parametro: la funzione da invocare
  // 2) secondo parametro: array di dipendenze
  useEffect(() => {
    console.log('call useEffect function');
    document.title = `You clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  return (
    <>
      <div
        onClick={handleClick}
        style={{ textAlign: 'center', cursor: 'pointer' }}
      >
        {/* <button onClick={handleClick}>Click me</button>
      <div>Click counter: {count}</div> */}

        <img
          src={Heart}
          alt="heart"
          style={{ width: 10 + 10 * count + 'px' }}
        />
      </div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
      </div>
    </>
  );
};

export default App;
