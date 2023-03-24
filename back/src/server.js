const http = require("http")
const getCharById = require("./controllers/getCharById");
const getCharDetail= require("./controllers/getCharDetail");


http
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
}).listen(3001, "localhost")