import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { getCharacterDetail, cleanDetail } from '../redux/actions.js';

const usePerHook =()=>{
    const dispatch = useDispatch();
    const {id} = useParams()
    const character = useSelector(state=> state.characterDetail)

    useEffect(()=>{                             //useEffect( ()=>{ 1* return 3* } , [2*] )

        dispatch(getCharacterDetail(id))        // 1* CUANDO EL COMPONENTE SE MONTA 
     
        return ()=>{
         dispatch(cleanDetail())                // 3* CUANDO EL COMPONENTE SE DESMONTA
        }
     },[id])                                    // 2*  CUANDO EL COMPONENTE SE ACTUALIZA

     return character;
}

export default usePerHook;