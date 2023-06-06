import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


//where to display
const root = ReactDOM.createRoot(document.getElementById('root'));


//what to display
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
