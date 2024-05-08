import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import GameContextProvider from './context/index.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GameContextProvider>
      <App />
    </GameContextProvider>
  </React.StrictMode>
);
