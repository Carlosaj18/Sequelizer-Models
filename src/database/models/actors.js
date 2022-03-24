module.exports = (sequelize, dataType) => {
    let alias = "Actor";
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
        first_name: {
            type: dataType.STRING, 
        }, 
        last_name: {
            type: dataType.STRING, 
        }, 
        rating: {
            type: dataType.INTEGER, 
        }, 
        last_name: {
            type: dataType.STRING, 
        }, 
        favorite_movie_id: {
            type: dataType.INTEGER, 
        }
    }
    let config = {
        tableName: "actors", 
        timestamps: false
    }

    const Actores = sequelize.define(alias, cols, config);
    return Actores;
    
}