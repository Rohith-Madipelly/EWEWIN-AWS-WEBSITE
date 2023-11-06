import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { useRef } from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from './redux/store';
import Header1 from './Components/Header/Header2';
import YourComponent from './YourComponent.jsx';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
  
     <BrowserRouter>
        <Header1/>
     
        <App/>

       
      </BrowserRouter>
    
    
     </Provider>


    </React.StrictMode>,
)
