import style from './Card.module.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/actions';
import { useState, useEffect } from 'react';

 function Card ({id, name, species, gender,image, onClose, addFavorite, removeFavorite, myfavorites}){

    const [isFavorite, setIsFavorite]= useState(false)

    function handlerFavorite(){
        
        if(isFavorite){
            setIsFavorite(false)
            removeFavorite(id)
        }else{
            setIsFavorite(true)
            addFavorite({id, name, species, gender,image, onClose, addFavorite, removeFavorite})
        }
    }
    useEffect(() => {
        myfavorites?.forEach((fav) => {
           if (fav.id === id) {
              setIsFavorite(true);
           }
        });
     }, [myfavorites]);
    
    return (
        <div className={style.card}>
            <button onClick={()=>onClose(id)} className={style.botonCruz}>X</button>
            {
            isFavorite ? (
            <button onClick={handlerFavorite}>❤️</button>
            ) : (
            <button onClick={handlerFavorite}>🤍</button>
            )
            }
            <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
            </Link>
            <p>species:{species}</p>
            <p>gender: {gender}</p>
            <img src={image} alt='img'/>
        </div>

    )
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addFavorite: (character)=>{dispatch(addFavorite(character))},
        removeFavorite:(id)=>{dispatch(removeFavorite(id))}
    }
}
const mapStateToProps=(state)=>{
    return{
        myfavorites: state.myfavorites,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);

