import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import * as atatus from 'atatus-spa';

atatus.config('37cf9dc15cff4a3f9c19dd3d1cc7bf5f').install();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)