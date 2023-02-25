import { useState, useEffect } from 'react';

const App = () => {
  const [content, setContent] = useState([]);
  const [contentIsLoaded, setContentIsLoaded] = useState(false);
  const [responseError, setResponseError] = useState(null);

  useEffect(() => {
    const getContent = async () => {
      try {
        // chiamo l'api
        const response = await fetch('http://localhost:8080/api/breeds/1000');
        console.log(response);
        if (response.ok) {
          // leggo il body della response
          const data = await response.json();
          console.log(data);
          // aggiorno le variabili di stato
          setContent(data);
          setContentIsLoaded(true);
        } else {
          const errorBody = await response.json();
          setResponseError(errorBody.status + ' - ' + errorBody.error);
        }
      } catch (error) {
        console.log(error);
        setResponseError('Unable to do the request');
      }
    };
    getContent();
  }, []);

  if (responseError) {
    return <h1 style={{ color: 'red' }}>{responseError}</h1>;
  } else if (contentIsLoaded) {
    return (
      <h1 style={{ color: 'green' }}>Elements to show: {content.length}</h1>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default App;
