const favorites = require("../../utils/favorites");

const getFavorite=(req, res)=>{
    res.status(201).json(favorites);
}


module.exports = getFavorite;