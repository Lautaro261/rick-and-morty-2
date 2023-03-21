export default function SearchBar ({onSearch}){
    return (
        <div>
            <input type='search '></input>
            <button onClick={()=>onSearch(5) }>Buscar</button>
        </div>
    )
}