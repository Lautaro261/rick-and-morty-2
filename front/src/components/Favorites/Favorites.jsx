import { useSelector } from 'react-redux'
import  Card from '../Card/Card.jsx'

const Favorite = ()=>{
    const myfavorites = useSelector(state=> state.myfavorites)

    /* CUANDO SE MONTA HACER EL PEDIDO DE LOS FAVORITOS */
    return (
        <div>
            {
                myfavorites.map((char,index)=>{
                    return(
                        <Card
                        key={index}
                        id={char.id}
                        name={char.name}
                        species={char.species}
                        gender={char.gender}
                        image={char.image}
                        />
                    )
                })
            }
        </div>
    )
}

export default Favorite;
