import React from 'react';
import ReactDOM from 'react-dom/client';
import RepoProvider from './context/RepoProvider.jsx';
import RepoDetailsProvider from './context/RepoDetailsProvider.jsx';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, HashRouter } from 'react-router-dom/cjs/react-router-dom.min.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RepoProvider>
      <RepoDetailsProvider>
        <App />
      </RepoDetailsProvider>
    </RepoProvider>
  </BrowserRouter>
)
