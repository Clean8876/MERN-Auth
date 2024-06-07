import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Login from './Pages/Login.jsx'
import Signup from './Pages/Signup.jsx'
import {store} from './store.js';
import { Provider } from 'react-redux';
import './index.css'
import Show from './Pages/Show.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <Provider store={store}>
 <React.StrictMode>
  <Router>
  <Routes>
  <Route path='/' element={<App/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/home' element={<Show/>}/>
  <Route path='/signup' element={<Signup/>}/>
</Routes>
</Router>
</React.StrictMode>,
    </Provider>
  
)
