import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import RepoProvider from './context/RepoProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <RepoProvider>
      <App />
    </RepoProvider>
)
