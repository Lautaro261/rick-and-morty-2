export const ADD_FAVORITE = 'ADD_FAVORITE'; 
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const GET_CHARACTER_DETAIL = 'GET_CHARACTER_DETAIL';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';


export const addFavorite=(character)=>{
return{
    type: ADD_FAVORITE,
    payload: character
}
}

export const removeFavorite=(id)=>{
    return{
        type: REMOVE_FAVORITE,
        payload: id
    }
}

export const getCharacterDetail=(id)=>{
    return function (dispatch){
        fetch(`http://localhost:3001/rickandmorty/detail/${id}`)
    .then((response)=>{ return response.json()})
    .then((char)=>{
        if(char.name){
            dispatch({type:GET_CHARACTER_DETAIL, payload:char})
        }else{
            window.alert('No hay personaje con ese id')
        } 
    })
    .catch((err)=>{
        window.alert('No hya personaje con ese id')
    });
    }
}

export const cleanDetail =()=>{
    return {
        type:CLEAN_DETAIL,
    }
}