import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Task 6.2: Import the Provider component from the react-redux library
import { Provider } from 'react-redux' 
// Task 6.3: Import the Redux store configured in store.js
import store from './store.js' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Task 6.4: Wrap the App component with the Provider and pass the store as a prop */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
