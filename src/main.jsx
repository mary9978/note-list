import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NoteProvider } from './context/NoteContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NoteProvider>
       <App />
    </NoteProvider> 
  </React.StrictMode>
)
