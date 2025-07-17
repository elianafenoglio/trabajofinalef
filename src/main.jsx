/* Cualquier archivo de .jsx debe importar a React, de no se asi puede fallar */

import React from 'react'
//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
<<<<<<< HEAD
/*import PI, {restar, sumar} from './math.js'
/* Enimport, from,export es sintaxis de js*/
/*en Js hay 2 tipos de archivos commoJs y module, actualmente utilizamos module*/

/*let numero_1=10
let numero_2=20
console.log(sumar(numero_1,numero_2))*/
=======
import PI, {restar, sumar} from './math.js'
/* Enimport, from,export es sintaxis de js*/
/*en Js hay 2 tipos de archivos commoJs y module, actualmente utilizamos module*/

let numero_1=10
let numero_2=20
console.log(sumar(numero_1,numero_2))
>>>>>>> 0ff36649e45e2d8268bb7e2042ab68802dbed2b6


// es una funncion que permite enlazar mi aplicacion
//  de react con indext.html
// muestro mi aplicacion de react dentro 
// del div con id ROOT
createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <App />
  //</StrictMode>,
)
