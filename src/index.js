import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';       // Global styles
import App from './App';    // Root component

// Create a root and render the App inside <React.StrictMode> for highlighting potential problems
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
