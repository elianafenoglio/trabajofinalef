/* Cualquier archivo de .jsx debe importar a React, de no se asi puede fallar */

import React from 'react'
//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'

// es una funncion que permite enlazar mi aplicacion
//  de react con indext.html
// muestro mi aplicacion de react dentro 
// del div con id ROOT
createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <App />
  //</StrictMode>,
)
