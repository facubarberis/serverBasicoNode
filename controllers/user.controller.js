const { response, request } = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');

const usuariosGet = async (req = request, res = response) => {

    // const { id, nombre } = req.query;
    const { limite = 5, desde = 0 } = req.query;
    const query = {estado: true};
   

    const [ total, usuarios] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);

    res.json({
        total, usuarios
    });
}

const usuariosPost = async (req, res = response) => {
    //const body = req.body;
    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({
        nombre,
        correo,
        password,
        rol
    });
    //Encriptar la contrase;a
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);
    //Guardar la base de datos
    await usuario.save();
    //Manejo de estados 
    res.json({
        //  tipo: "post API CONTROLADOR",
        usuario
        //body: body
    });
}

const usuariosPut = async (req, res = response) => {

    const id = req.params.id;

    const { _id, password, google, correo, ...resto } = req.body;

    //VAlidar contra base de datos
    if (password) {

        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);

    }
    const usuario = await Usuario.findByIdAndUpdate(id, resto);


    res.json({ usuario });
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