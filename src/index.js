import React from 'react';
import ReactDOM from 'react-dom/client';
// import paintings from './painting.json';
import { App } from 'components/App';
import { App1 } from 'components/App1';

// import './index.css';
import { GlobalStyle } from 'components/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <App1 />

    <GlobalStyle />
  </React.StrictMode>
);
