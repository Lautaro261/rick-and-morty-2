import { Route } from "react-router-dom";
import style from "./App.module.css";
import Cards from "./components/Cards/Cards.jsx"
import NavBar from "./components/NavBar/NavBar.jsx"

function App() {
// crea un estado para guardar 

  return (
    <div className={style.App}>
      <Route path='/' >
      <NavBar/>
    </Route> 

    <Route path='/home'>
      <Cards/>
    </Route>
    </div>
    
  );
}

export default App;
