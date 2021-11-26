const Role = require('../models/role');
const Usuario = require('../models/usuario');



const esRoleValido = async (rol = '') => {

    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol ${rol} no esta registrado en la base de datos`);
    }

}

const existeEmail = async (correo = '') => {
    const email = await Usuario.findOne({ correo });
    if (email) {
        throw new Error(`El correo ${correo} ya esta registrado en la base de datos`);
    }
}
const existeUsuarioById = async (id = '') => {
    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario) {
        throw new Error(`No existe usuario con el id: ${id} en la base de datos`);
    }
}





module.exports = {
    esRoleValido,
    existeEmail,
    existeUsuarioById
}