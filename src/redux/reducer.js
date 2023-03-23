import { ADD_FAVORITE, CLEAN_DETAIL, GET_CHARACTER_DETAIL, REMOVE_FAVORITE } from './actions'

const initialState={
    myfavorites:[],
    characterDetail: {},
}

const rootReducer= (state= initialState, action)=>{
    switch(action.type){
        case ADD_FAVORITE:
            return{...state, myfavorites:[...state.myfavorites, action.payload]}
            
        case REMOVE_FAVORITE:
            return{...state, myfavorites: state.myfavorites.filter((char)=>char.id!==action.payload)}

        case GET_CHARACTER_DETAIL:
            return {...state, characterDetail: action.payload}

        case CLEAN_DETAIL:
            return{...state, characterDetail:{}}

        default:
            return {...state}
    }
}

export default rootReducer;