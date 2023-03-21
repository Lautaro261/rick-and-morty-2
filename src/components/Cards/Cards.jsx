import Card from "../Card/Card.jsx"

export default function Cards (props){
    const {characters} = props; /* ARRAY [{},{},{}] con objetos */
    return (
        <div>
            <h3>Cards</h3>
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
                     onClose={props.onClose}
                    />
                    )
                    
                })
             }
            </ul>
            
        </div>
        
    )
}