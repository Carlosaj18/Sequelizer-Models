const db = require('../database/models/index.js');

const actorsController = {
    list: function (req, res) {
        db.Actor.findAll()
            .then(actors => {
                res.render("actorsList", {actors: actors})
            })
    }, 
    detail: function (req, res) {

        let Peliculas = db.Pelicula.findAll()
        console.log(Peliculas)
        let Actores = db.Actor.findByPk(req.params.id)
        console.log(Actores)

        Promise.all([Peliculas, Actores])
            .then(function([actor, pelicula]){
                res.render("actorsDetail", {actor: actor, pelicula: pelicula})
        })

            /*.then([actor, pelicula] => {
                // <! -- Como se haria un inner join --> 
                res.render("actorsDetail", {actor: actor, pelicula: pelicula})
            })*/
    }
}



module.exports = actorsController;