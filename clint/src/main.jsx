import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import app  from './store/app.js'
import auth from './configs/firebaseConfig.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={app}>
  <App />
  </Provider>
  </React.StrictMode>
)
