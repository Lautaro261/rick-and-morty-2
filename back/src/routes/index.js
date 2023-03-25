const {Router}=require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");

const myRouter = Router();

myRouter.get("/onsearch/:id", getCharById)

myRouter.get("/detail/:id", getCharDetail)


module.exports = myRouter;