import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './pages/App';
import GlobalStyle from './style'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);