import Card from "../Card/Card.jsx"
import style from "./Cards.module.css"

export default function Cards ({characters}){ /* ARRAY [{},{},{}] con objetos */
const onClose = ()=> window.alert('se cerró')

    return (
        <div className={style.cards}>
            <ul> {
                characters.map((char,index)=>{
                    return(
                    <Card 
                     key={index}
                     id={char.id}
                     name={char.name}
                     species={char.species}
                     gender={char.gender}
                     image={char.image}
                     onClose={onClose}
                    />
                    )
                    
                })
             }
            </ul>
            
        </div>
        
    )
}