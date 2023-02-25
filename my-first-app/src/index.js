// 1) Importo le librerie React e ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';
// 4) Importo il componente App
import MyApp from './components/App';

// 2) Ottengo il riferimento al div con id root
const el = document.getElementById('root');

// 3) Dico a React di prendere il controllo di quell'elemento
const root = ReactDOM.createRoot(el);

// 5) Mostro il componente sullo schermo
root.render(<MyApp />);
