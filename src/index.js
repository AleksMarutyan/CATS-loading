import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LiftProvider from './context/LiftProvider';

ReactDOM.render(
  <React.StrictMode>
    <LiftProvider>
      <App />
    </LiftProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
