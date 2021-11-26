const moongose = require('mongoose');

const dbConnection = async()=>{

    try {

        await moongose.connect( process.env.MONGODB_CNN);
        
        console.log('Coneccion Correcta a base de datos');
        
    } catch (error) {
        console.log(error);
        throw new Error('Error en iniciar la Base de Datos');

    }

}

module.exports = {
    dbConnection
}