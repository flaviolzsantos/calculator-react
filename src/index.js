import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculador from './main/Calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Calculator</h1>
    <Calculador />
  </React.StrictMode>
);

