import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App.jsx'
import './App.css'
import store from './app/store.js'
// import 'antd/dist/antd.min.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store= {store} >
      <App />
    </Provider>
  </BrowserRouter>,
)
