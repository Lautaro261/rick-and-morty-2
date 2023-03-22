import { useState } from 'react'
import style from './SearchBar.module.css'


export default function SearchBar ({onSearch}){
 const [id, setId]= useState('')

 function handlerChange(event){
    const value = event.target.value
    setId(value)
 }

    return (
        <div className={style.searchbar}>
            <input 
            type='search' 
            onChange={handlerChange} 
            value={id}
            ></input>
            <button onClick={()=>onSearch(id) }>Buscar</button>
        </div>
    )
}