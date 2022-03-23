module.exports = (sequelize, dataType) => {
    let alias = "Genero";
    let cols = {
        id: {
            type: dataType.INTEGER, 
            primaryKey: true, 
            autoIncrement: true
        }, 
        created_at: {
            type: dataType.DATE, 
        }, 
        name: {
            type: dataType.STRING, 
        }, 
        ranking: {
            type: dataType.INTEGER, 
        }, 
        active: {
            type: dataType.INTEGER, 
        }, 
    }
    let config = {
        tableName: "genres", 
        timestamps: false
    }

    const Peliculas = sequelize.define(alias, cols, config);
    return Peliculas;
    
}