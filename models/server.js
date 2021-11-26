const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/configdb');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'

        //Conectar BD
        this.conectarDB();
        
        //MIDDLEWARES

        this.middlewares();

        //RUTAS 
        this.routes();
    }

    async conectarDB(){
        dbConnection();
    }

    middlewares() {
        //CORS
        this.app.use( cors() );
        //Lectura y Parseo del body
        this.app.use(express.json());
        //RUTAS
        this.app.use(express.static('public'));



    }

    routes() {

        this.app.use( this.usuariosPath, require('../routes/user.routes') )

    }

    listen() {

        this.app.listen(this.port, () => {
            console.log(`Server en puerto ${this.port}`)
        });

    }

}
module.exports = Server;