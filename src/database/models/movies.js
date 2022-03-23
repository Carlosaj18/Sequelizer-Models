module.exports = (sequelize, dataType) => {
    let alias = "Pelicula";
    let cols = {
        id: {
            type: dataType.INTEGER, 
            primaryKey: true, 
            autoIncrement: true
        }, 
        created_at: {
            type: dataType.DATE, 
        }, 
        updated_at: {
            type: dataType.DATE, 
        }, 
        title: {
            type: dataType.STRING, 
        }, 
        rating: {
            type: dataType.DECIMAL, 
        },
        awards: {
            type: dataType.INTEGER, 
        }, 
        release_date: {
            type: dataType.DATE, 
        }, 
        length: {
            type: dataType.INTEGER, 
        },
        genre_id: {
            type: dataType.INTEGER, 
        }
    }
    let config = {
        tableName: "movies", 
        timestamps: false
    }

    const Peliculas = sequelize.define(alias, cols, config);
    return Peliculas;
    
}