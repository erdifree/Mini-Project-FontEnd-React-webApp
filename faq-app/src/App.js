import { useState, useCallback } from 'react';
import SearchBar from './components/SearchBar';
import jsonData from './data.json';
import Accordion from './components/Accordion';

const App = () => {
  const [data, setData] = useState(jsonData);

  const filterData = (term) => {
    let updatedData = jsonData;
    if (term !== '') {
      updatedData = jsonData.filter((element) => {
        return (
          element.title.toLowerCase().includes(term.toLowerCase()) ||
          element.content.toLowerCase().includes(term.toLowerCase())
        );
      });
    }
    setData(updatedData);
  };
  // useCallback mi permette di cachare la definizione di una funzione
  const cachedFilterData = useCallback(filterData, []);

  return (
    <div className="container">
      <h1>Faq</h1>
      <div className="my-3">
        <SearchBar filterData={cachedFilterData} />
      </div>
      <Accordion data={data} />
    </div>
  );
};
export default App;
