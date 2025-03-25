import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './app/router';
import './shared/styles/main.css';
import './app/i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
