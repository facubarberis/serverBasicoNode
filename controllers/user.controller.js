const { response, request } = require('express')


const usuariosGet = (req = request, res = response) => {

    const { id , nombre} = req.query;

    res.json({        
        tipo: "get API CONTROLADOR",
        id: id,
        nombre: nombre
    });
}

const usuariosPost = (req, res = response) => {

    //const body = req.body;
    const { nombre } = req.body;
    //Manejo de estados 
    res.json({
        tipo: "post API CONTROLADOR",
        nombre: nombre
        //body: body
    });
}

const usuariosPut = (req, res = response) => {

    const id = req.params.id;


    res.json({
        id: id,
        nombre: "put API CONTROLADOR"
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        numero: 45,
        nombre: "delete API CONTROLADOR"
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}