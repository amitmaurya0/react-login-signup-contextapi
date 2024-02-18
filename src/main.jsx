import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/index.jsx'
import AuthProvider from './components/AuthProvider.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AuthProvider> */}
    <Provider store={store}>
      {/* <RouterProvider router={router} /> */}
      <App />
    </Provider>
    {/* </AuthProvider> */}
  </React.StrictMode>,
)
