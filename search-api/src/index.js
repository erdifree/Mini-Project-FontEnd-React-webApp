import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import App from './App';

import { postBreed } from './api';
const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

postBreed({
  name: 'bari museum',
  description: 'eeeee',
  imageUrl: 'http://localhost:3000/',
  trainability: 1,
  minLifeSpan: 1,
  maxLifeSpan: 1,
  size: 'MEDIUM',
});

root.render(<App />);
