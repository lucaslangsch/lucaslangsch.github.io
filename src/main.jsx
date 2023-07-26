import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import RepoProvider from './context/RepoProvider.jsx';
import RepoDetailsProvider from './context/RepoDetailsProvider.jsx';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RepoProvider>
      <RepoDetailsProvider>
        <App />
      </RepoDetailsProvider>
    </RepoProvider>
  </BrowserRouter>
)
