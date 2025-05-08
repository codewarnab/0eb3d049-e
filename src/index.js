import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/App.css';

// Add Tailwind CSS via CDN in development
const tailwindScript = document.createElement('script');
tailwindScript.src = 'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4';
document.head.appendChild(tailwindScript);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);