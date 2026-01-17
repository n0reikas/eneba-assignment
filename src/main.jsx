import React from 'react'
import ReactDOM from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import './global.css'

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
