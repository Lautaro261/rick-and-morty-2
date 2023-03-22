import style from './Card.module.css'
import {Link} from 'react-router-dom'

export default function Card ({id, name, species, gender,image, onClose}){
    
    return (
        <div className={style.card}>
            <button onClick={()=>onClose(id)} className={style.botonCruz}>X</button>
            <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
            </Link>
            <p>species:{species}</p>
            <p>gender: {gender}</p>
            <img src={image} alt='img'/>
        </div>

    )
}


