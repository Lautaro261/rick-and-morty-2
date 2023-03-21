import SearchBar from "../Search Bar/SearchBar"
import style from './NavBar.module.css'

export default function NavBar ({onSearch}){
    return(
        <div className={style.navbar}>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}