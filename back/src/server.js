/* const http = require("http") */
/* const getCharById = require("./controllers/getCharById");
const getCharDetail= require("./controllers/getCharDetail"); */
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const server = express();
const PORT = 3001;
const myRouter = require ("./routes/index");



server.use(express.json()); 
server.use(cors())
server.use(morgan("dev"))
server.use("/rickandmorty", myRouter)






server.listen(PORT, ()=>{
    console.log(`server raised in port ${PORT}`)
})


































/* http
.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    const {url} = req  // req es un objeto que con informacion de quien hace la peticion 
                       // desestructuro de url (es una propiedad con string) de req

    if(url.includes("onsearch")){
        const id= url.split("/").at(-1) // aqui tengo el id que saque de url 
        getCharById(res, id)
    }

    if(url.includes("detail")){
        const id = url.split("/").at(-1)
        getCharDetail(res,id)
    }
}).listen(3001, "localhost") */