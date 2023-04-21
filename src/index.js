import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Aos from 'aos';


Aos.init();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


