import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Notifications from './Notifications';
import reportWebVitals from './reportWebVitals';

const appRoot = ReactDOM.createRoot(document.getElementById('root'));
appRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const notificationsRoot = ReactDOM.createRoot(document.getElementById('root-notifications'));
notificationsRoot.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);

reportWebVitals();
