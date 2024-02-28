import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './global.css'

//import { PI, GTM_BRASIL } from './teste'
//Posso renomear o PI por exemplo
import { PI as numeroPI, GTM_BRASIL } from './teste'
import listaDeNomes from './nomes.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* {GTM_BRASIL}
    {numeroPI}
    {listaDeNomes} */}
    <App />
  </React.StrictMode>,
)
