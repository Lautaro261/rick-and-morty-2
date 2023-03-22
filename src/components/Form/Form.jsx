import { useState } from "react"

export default function Form(){
    const [data, setData]= useState({
        username:'',
        password:'',
    })

    const [error, serError]=useState({})

    const handlerInputChange=(event)=>{
        const value = event.target.value;
        const property = event.target.name

        setData({...data, [property]: value})
    }

    return (
        <div>
            <p>Estamos en form</p>
            <label htmlFor="username">username </label>

            <input 
            type='text' 
            name='username'
             value={data.username} 
             onChange={handlerInputChange}
             />

            <label htmlFor="password">password </label>

            <input 
            type="text" 
            name='password' 
            value={data.password} 
            onChange={handlerInputChange}
            /> {/* despues cambiar type=password */}

            <button type='submit' >Login</button>
        </div>
    )
}