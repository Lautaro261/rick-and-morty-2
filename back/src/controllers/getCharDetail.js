const axios = require("axios")

const succesHandler = (response, res)=>{
    const {id, name, species, gender, status, origin, image} = response.data 

    res.writeHead(200, {"Content-Type":"application/json"})
    res.end(JSON.stringify({id,name,species,gender,status,origin, image}))
}

const errorHandler =(error, res)=>{
    res.writeHead(500,{"Content-Type":"text/plain"})
    res.end(error.message)

}

const getCharDetail = (res, id)=>{
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response)=>{succesHandler(response, res)})

}

module.exports= getCharDetail

