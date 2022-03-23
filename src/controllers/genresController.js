const db = require('../database/models/index.js');

const generController = {
    list: function (req, res) {
        db.Genero.findAll()
            .then(genres => {
                res.render("genresList", {genres: genres})
            })
    }, 
    detail: function (req, res) {
        db.Genero.findByPk(req.params.id)
            .then(genre => {
                res.render("genresDetail", {genre: genre})
            })
    }
}

module.exports = generController;