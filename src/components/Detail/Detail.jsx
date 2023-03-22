import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"


export default function Detail (){
const {id} = useParams()
const [character, setCharacter]= useState({})

useEffect(()=>{
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response)=>{ return response.json()})
    .then((char)=>{
        if(char.name){
            setCharacter(char)
        }else{
            window.alert('No hay personaje con ese id')
        } 
    })
    .catch((err)=>{
        window.alert('No hya personaje con ese id')
    });
    return setCharacter({})
},[id])

/* const {name, status,species,gender,image, origin} = character  */
    return (
        <div>
            {character.name? (
                    <>
                    <p>esto es Detail de {id}</p>
                    <p>name: {character.name}</p>
                    <p>estado: {character.status}</p>
                    <p>especie: {character.species}</p>
                    <p>genero: {character.gender}</p>
                    <p>origne: {character.origin?.name}</p>
                    <img src={character.image} alt='img'/>
                    <Link to='/home'>
                    <button>Home</button>
                    </Link>
                    
                    </>
                ):(
                    <h4>Loading...</h4>
                )
            }
            
            
        </div>
    )
}


/* {
"id": 80,
"name": "Creepy Little Girl",
"status": "Alive",
"species": "Human",
"type": "",
"gender": "Female",
"origin": {
"name": "unknown",
"url": ""
},
"location": {
"name": "Mr. Goldenfold's dream",
"url": "https://rickandmortyapi.com/api/location/18"
},
"image": "https://rickandmortyapi.com/api/character/avatar/80.jpeg",
"episode": [
"https://rickandmortyapi.com/api/episode/2"
],
"url": "https://rickandmortyapi.com/api/character/80",
"created": "2017-11-30T14:20:35.772Z"
} */