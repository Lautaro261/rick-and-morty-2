import { Route } from "react-router-dom";
import style from "./App.module.css";
import Cards from "./components/Cards/Cards.jsx"
import NavBar from "./components/NavBar/NavBar.jsx"
import characters from "./data";

function App() {
// crea un estado para guardar 

  return (
    <div className={style.App}>
      <Route path='/' >
      <NavBar onSearch={(characterID)=>window.alert(characterID)}/>
    </Route> 

    <Route path='/home'>
      <Cards characters={characters}/>
    </Route>
    </div>
    
  );
}

export default App;
