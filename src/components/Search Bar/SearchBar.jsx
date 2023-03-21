import style from './SearchBar.module.css'


export default function SearchBar ({onSearch}){
    return (
        <div className={style.searchbar}>
            <input type='search '></input>
            <button onClick={()=>onSearch(5) }>Buscar</button>
        </div>
    )
}