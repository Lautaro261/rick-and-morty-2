const {Router}=require("express");
const getCharById = require("../controllers/GET/getCharById");
const getCharDetail = require("../controllers/GET/getCharDetail");
const postFavorite = require("../controllers/POST/postFavorite");
const getFavorite = require("../controllers/GET/getFavorite");
const deleteFavoriteID = require ("../controllers/DELETE/deleteFavoriteId");

const myRouter = Router();

myRouter.get("/onsearch/:id", getCharById)

myRouter.get("/detail/:id", getCharDetail)

myRouter.get("/favorite", getFavorite)

myRouter.post("/favorite", postFavorite)

myRouter.delete("/favorite/:id", deleteFavoriteID)

/* /rickandmorty/onsearch//1 */

module.exports = myRouter;