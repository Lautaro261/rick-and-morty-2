import axios from "axios";
export const ADD_FAVORITE = 'ADD_FAVORITE'; 
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const GET_CHARACTER_DETAIL = 'GET_CHARACTER_DETAIL';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';
export const GET_FAVORITE = 'GET_FAVORITE';


export const addFavorite=(character)=>{
return async function(dispatch){

    try {
        const response = await axios.post("http://localhost:3001/rickandmorty/favorite", character)
        return dispatch({type: ADD_FAVORITE, payload: response.data})
    } catch (error) {
        window.alert("No se pudo cargar a favoritos")
    }

    /* axios.post("http://localhost:3001/rickandmorty/favorite",character)
    .then((response)=> {
        return dispatch({ type: ADD_FAVORITE, payload: response.data})
    })
    .catch((err)=>{
        window.alert('No se pudo agregar a favoritos')
    }) */

}
/* return {
    type: ADD_FAVORITE,
    payload: character
} */
}

export const removeFavorite=(id)=>{
    return async function (dispatch){
        try {
            const response = await axios.delete(`http://localhost:3001/rickandmorty/favorite/${id}`, id)
            return dispatch({type: REMOVE_FAVORITE, payload:response.data})
        } catch (error) {
            console.log(error)
        }
       /*  axios.delete(`http://localhost:3001/rickandmorty/favorite/${id}`, id)
        .then((response)=>{
            return dispatch( {type: REMOVE_FAVORITE, payload: response.data} )
        }) */
    }
    /* return{
        type: REMOVE_FAVORITE,
        payload: id
    } */
}

export const getFavorite = ()=>{
    return async function (dispatch){
        try {
            const response = await axios.get(`http://localhost:3001/rickandmorty/favorite`)
            return dispatch({type: GET_FAVORITE, payload: response.data})
        } catch (error) {
            window.alert('No se pudo mostrar los favoritos')
        }
    }
}

export const getCharacterDetail=(id)=>{
    return async function (dispatch){
        try {
            const response = await axios.get(`http://localhost:3001/rickandmorty/detail/${id}`, id)
            return dispatch({type: GET_CHARACTER_DETAIL, payload: response.data})
        } catch (error) {
            window.alert('No hay personaje con ese id')
        }
        /* fetch(`http://localhost:3001/rickandmorty/detail/${id}`)
    .then((response)=>{ return response.json()})
    .then((char)=>{
        if(char.name){
            dispatch({type:GET_CHARACTER_DETAIL, payload:char})
        }else{
            window.alert('No hay personaje con ese id')
        } 
    })
    .catch((err)=>{
        window.alert('No hay personaje con ese id')
    }); */
    }
}

export const cleanDetail =()=>{
    return {
        type:CLEAN_DETAIL,
    }
}