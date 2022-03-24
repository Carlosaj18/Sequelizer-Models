const db = require('../database/models/index.js');
const sequelize = db.sequelize;

const moviesController = {

    list: function(req, res) {
        db.Pelicula.findAll()
            .then(movies => {
                res.render("moviesList", {movies: movies})
            });
    }, 
    detail: function(req, res) {
        db.Pelicula.findByPk(req.params.id)
            .then(movie => {
                res.render("moviesDetail", {movie: movie});
            });
    }, 
    new: function (req, res) {
        db.Pelicula.findAll({
            order: [
                ["release_date", "ASC"]
            ]
        })
            .then(movies => {
                res.render("newestMovies", {movies: movies})
        });
    }, 
    recomended: function (req, res) {
        db.Pelicula.findAll({
            where: {
                rating: {[db.Sequelize.Op.gte] : 8 }
            }, 
            order: [
                ["release_date", "ASC"]
            ],
            limit: 5
        })
            .then(movies => {
                res.render("recommendedMovies", {movies: movies})
    });
    }

};

module.exports = moviesController;

