import { useState } from "react";
import { Route } from "react-router-dom";
import style from "./App.module.css";
import Cards from "./components/Cards/Cards.jsx"
import NavBar from "./components/NavBar/NavBar.jsx"

function App() {
// crea un estado para guardar 
const [characters, setCharacters] = useState([])

// funcion que agrega personajes 

function onSearch(character){
  console.log('me hiciste click')
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
  .then((response)=>response.json())
  .then((data)=>{
    if(data){
      setCharacters((oldChar)=>[...oldChar, data])
    }else{
      window.alert('No hay personaje con ese ID (app.js)')
    }

  })
}

// funcion que elimina personaje por su id 

function onClose(id){
  console.log('Me estoy cerrando ')
  setCharacters(characters.filter((char)=> char.id !==id ))
}




  return (
    <div className={style.App}>
      <Route path='/' >
      <NavBar onSearch={onSearch}/>
    </Route> 

    <Route path='/home'>
      <Cards characters={characters} onClose={onClose}/>
    </Route>


    </div>
    
  );
}

export default App;
