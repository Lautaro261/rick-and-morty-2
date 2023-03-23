 const validation =(userData, error, setError)=>{
// correo electronico

    if(!userData.username){
        setError({...error, username:'Complete con su email'})
    }else if(userData.username.length >35){
        setError({...error, username:'No se puede superar los 35 caracteres'})
    }else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)){
        setError({...error, username:'Email invalido'})
    }else{
        setError({...error, username:''})
    }
     
// password

    if(userData.password.length < 6 || userData.password.length > 10){
        setError({...error, password:'Tiene que ser entre 6 y 10 caracteres'})
    }else if(!/\d/.test(userData.password)) {
        setError({...error, password:'Debe contener al menos un número'})
    }else {
        setError({...error, password:''})
    }
     

}


export default validation