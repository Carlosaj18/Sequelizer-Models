TO DO 

1. Create project with express-generator (npm i, npm i express)
2. npm install sequelize-cli -g, npm install sequelize, npm install mysql2
3. Create file .sequelizerc with {
    
    const path = require('path')

    module.exports = {
    config: path.resolve('./src/database/config', 'config.js'),
    'models-path': path.resolve('./src/database/models'),
    'seeders-path': path.resolve('./src/database/seeders'),
    'migrations-path': path.resolve('./src/database/migrations'),
    }
}

4. sequelize init
5. Finalmente no debemos olvidarnos de modificar el archivo
/database/config/config.js agregando module.exports al principio del archivo y
configurando los datos de conexión a la base de datos.
6. Crear los modelos 
7. Ajustar los controladores 