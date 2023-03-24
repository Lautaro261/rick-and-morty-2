import { useState } from "react"

export default function Form({login}){
    const [userData, setUserData]= useState({
        username:'',
        password:'',
    })

    const [error, serError]=useState({
        username:'',
        password: '',
    })

    const handlerInputChange=(event)=>{
        const value = event.target.value;
        const property = event.target.name

        setUserData({...userData, [property]: value})
    }
    const handlerOnSubmit=(event)=>{
        event.preventDefault()
        login(userData)
    }

    return (
        <form onSubmit={handlerOnSubmit}>
            <div>
              <label htmlFor="username">username </label>

              <input 
              type='text' 
              name='username'
               value={userData.username} 
               onChange={handlerInputChange}
               />
               <p>{error.username}</p>
             </div>
             <div>
              <label htmlFor="password">password </label>

              <input 
              type="text" 
              name='password' 
              value={userData.password} 
              onChange={handlerInputChange}
              /> {/* despues cambiar type=password */}
              <p>{error.password}</p>
             </div>
            <button>Login</button>
        </form>
    )
}