import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './shared/styles/main.css';
import './app/i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
