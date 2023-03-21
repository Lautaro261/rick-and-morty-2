import SearchBar from "../Serarch Bar/SearchBar"

export default function NavBar ({onSearch}){
    return(
        <div>
            <p>Esto es Nav Bar</p>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}