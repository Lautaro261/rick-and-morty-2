const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character"


/* const succesHandler =(response,res)=>{
    const {id, name, species, image, gender, origin}= response.data;
    res.status(200).json({id, name, species, image, gender, origin})

}

const errorHandler=(error, res)=>{
    res.status(500).json(error.message)
} */


const getCharDetail= async(req, res)=>{
    const {Detailid}= req.params;
    try {
        const response = await axios.get(`${URL}/${Detailid}`)
        const {id, name, species, image, gender, origin} = response.data;
        res.status(200).json({id, name, species, image, gender, origin})
    } catch (error) {
        res.status(400).json(error.message)
    }

    /* axios.get(`${URL}/${id}`)
    .then((response)=>succesHandler(response, res))
    .catch((error)=>errorHandler(error,res)) */

}

module.exports= getCharDetail;

























/* const axios = require("axios")

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

module.exports= getCharDetail */

