import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/formulario";
import ReposList from "./components/ReposList";

function App() {
  
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('')
  return (
    <>
    <div className="inputUsuario">
      <label htmlFor="inputUsuario">Informe o nome de usuario GitHub (aperte Tab)</label>
    <input type="text" onBlur= {(e) => setNomeUsuario(e.target.value)}/>

    </div>

    {nomeUsuario.length > 4 && (
      <>
      <Perfil nomeUsuario = {nomeUsuario} />
      <ReposList nomeUsuario = {nomeUsuario} />
      </>
      
    )}

     {/* { formularioEstaVisivel && (
      <Formulario />
     )}
    
    <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button"> Toogle Form</button> */}
    </>
  )
}

export default App
