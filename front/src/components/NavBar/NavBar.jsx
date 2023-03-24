import {Link} from 'react-router-dom'
import SearchBar from "../SearchBar/SearchBar"
import style from './NavBar.module.css'

export default function NavBar ({onSearch}){
    return(
        <div className={style.navbar}>
            <ul>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/favorites'>Favorites</Link>
                </li>
                <li>
                    <Link to='/'>Nada</Link>
                </li>
            </ul>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}