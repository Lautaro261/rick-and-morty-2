let favorites = require("../../utils/favorites");


const deleteFavoriteID = (req, res)=>{
    const { id } = req.params;

    const index = favorites.findIndex((char) => char.id === Number(id));
    if (index !== -1) {
      favorites.splice(index, 1);
      res.status(203).json(favorites);
    } else {
      res.status(404).json({ message: "Character not found in favorites" });
    }

}



module.exports = deleteFavoriteID