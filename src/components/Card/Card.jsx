import style from './Card.module.css'

export default function Card ({id, name, species, gender,image, onClose}){
    
    return (
        <div className={style.card}>
            <button onClick={()=>onClose(id)} className={style.botonCruz}>X</button>
            <h2>{name}</h2>
            <p>species:{species}</p>
            <p>gender: {gender}</p>
            <img src={image} alt='img'/>
        </div>

    )
}


