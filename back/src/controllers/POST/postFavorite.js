const favorites = require("../../utils/favorites");

const postFavorite = (req, res)=>{
    favorites.push(req.body);
    res.status(200).json(favorites)

}


module.exports = postFavorite