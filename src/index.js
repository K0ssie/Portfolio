// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18
import './index.css';
import App from './App';

import 'slick-carousel/slick/slick.css'; // Import slick-carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Import slick carousel theme styles


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

