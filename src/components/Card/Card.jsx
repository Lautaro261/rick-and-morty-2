export default function Card ({id, name, species, gender,image, onClose}){
    
    return (
        <div>
            <p>Card</p>
            <button onClick={onClose()}>X</button>
            <h2>name: {name}</h2>
            <p>species:{species}</p>
            <p>gender: {gender}</p>
            <img src={image} alt='img'/>
            
        </div>

    )
}


/*  */