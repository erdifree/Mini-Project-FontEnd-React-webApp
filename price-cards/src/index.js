// 1) import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';
// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import css custom
import './style.css';
// import component App
import App from './components/App';

// 2) get a reference of the root div
const el = document.getElementById('root');

// 3) ReactDOM takes control of that element
const root = ReactDOM.createRoot(el);

// 4) Render the App component
root.render(<App />);
