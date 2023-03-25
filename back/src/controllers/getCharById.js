const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character"


const succesHandler=(response,res)=>{
    const {id,name,species, gender, image}= response.data;
    res.status(200).json({id,name,species,gender,image})
}


const errorHandler=(error,res)=>{
    res.status(500).json(error.message)
}



const getCharById = (req, res)=>{
    const {id}= req.params;

    axios.get(`${URL}/${id}`)
    .then((response)=>succesHandler(response,res))
    .catch((error)=>errorHandler(error,res))
}






module.exports = getCharById; 




















/* const axios = require("axios")


const succesHandler =(response, res)=>{
    const {id, name, especies, gender, image} = response.data;
    res.writeHead(200, {"Content-Type":"application/json"})
    res.end(JSON.stringify({id, name, especies, gender, image}));
}



const errorHandler = (error, res)=>{
    res.writeHead(500, {"Content-Type": "text/plain"})
    res.end(error.message)
}




const getCharById = (res, id)=>{

    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response)=>succesHandler(response, res))
    .catch((error)=>errorHandler(error, res))
}



module.exports= getCharById */