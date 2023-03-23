import { useEffect, useState } from "react";
import { Route, useLocation, useHistory } from "react-router-dom";
import style from "./App.module.css";
import Cards from "./components/Cards/Cards.jsx"
import NavBar from "./components/NavBar/NavBar.jsx"
import About from "./components/About/About.jsx"
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx"

function App() {
// crea un estado para guardar 
const [characters, setCharacters] = useState([])
const [acces, setAcces] = useState(false)
const username = 'ejemplo@gmail.com';
const password = '1password';
const {pathname}= useLocation()
const history = useHistory()

// funcion que agrega personajes 

 function onSearch(id){

/*   if(characters.find((char)=> char.id === id)){
    return alert('Personaje repetido')
  } */ 



  fetch(`https://rickandmortyapi.com/api/character/${id}`)
  .then((response)=> {return response.json()})
  .then((data)=>{
    if(data.name){
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

// funcion que logea el username y password

function login(userData){
  if(userData.username === username && userData.password=== password){
    // como es verdad, necesito que me de acceso a /home 
    setAcces(true)
    history.push('/home')
  }else{
    alert('Correo eletronico o Contraseña incorrecta')
  }
}


 useEffect(()=>{
  !acces && history.push('/')
 },[acces])




  return (
    <div className={style.App}>

      {pathname !=='/' && <NavBar onSearch={onSearch}/>}

      <Route exact path='/' >
       <Form login={login}/>
      </Route> 

    <Route path='/home'>
      <Cards characters={characters} onClose={onClose}/>
    </Route>

    <Route path='/about'>
      <About/>
    </Route>

    <Route  path='/detail/:id'>
      <Detail/>
    </Route>


    </div>
    
  );
}

export default App;
